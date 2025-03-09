import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { enhanceTaskDescription } from "../domains/openai/openai.client";
import { updateTask } from "../domains/tasks/task.client";

interface Task {
  id: string;
  content: string;
  labels?: string[];
}

interface TaskReviewProps {
  tasks: Task[];
  onTaskUpdated: (updatedTask: Task) => void;
  onReviewComplete: () => void;
}

export default function TaskReview({
  tasks,
  onTaskUpdated,
  onReviewComplete,
}: TaskReviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [enhancedTask, setEnhancedTask] = useState("");
  const [previousSuggestions, setPreviousSuggestions] = useState<string[]>([]);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState<string | null>(null);

  // Filter out tasks that already have the 🤖 label
  const tasksToReview = tasks.filter((task) => {
    const labels = task.labels || [];
    return !labels.includes("🤖");
  });

  const currentTask = tasksToReview[currentTaskIndex];

  useEffect(() => {
    if (isOpen && currentTask) {
      // Clear previous suggestions when moving to a new task
      setPreviousSuggestions([]);
      setCurrentSuggestionIndex(0);
      enhanceCurrentTask();
    }
  }, [currentTaskIndex, isOpen]);

  const enhanceCurrentTask = async () => {
    if (!currentTask) return;

    setIsLoading(true);
    try {
      const enhanced = await enhanceTaskDescription(currentTask.content);
      setEnhancedTask(enhanced);

      // Store the current suggestion in the history
      if (enhanced !== "Failed to enhance task. Please try again.") {
        setPreviousSuggestions([enhanced]);
        setCurrentSuggestionIndex(0);
      }
    } catch (error) {
      console.error("Error enhancing task:", error);
      setEnhancedTask("Failed to enhance task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const requestAnotherSuggestion = async () => {
    setIsLoading(true);
    setUpdateMessage("Generating new suggestion...");

    try {
      // Request a new enhancement
      const enhanced = await enhanceTaskDescription(currentTask.content);

      // Check if this suggestion is the same as any previous ones
      if (previousSuggestions.includes(enhanced)) {
        setUpdateMessage("Received a duplicate suggestion. Trying again...");
        // Try one more time to get a unique suggestion
        const secondAttempt = await enhanceTaskDescription(
          `${
            currentTask.content
          } (please provide a different suggestion than: ${enhanced.substring(
            0,
            50
          )}...)`
        );
        setEnhancedTask(secondAttempt);
        setPreviousSuggestions((prev) => [...prev, secondAttempt]);
        setCurrentSuggestionIndex(previousSuggestions.length);
      } else {
        setEnhancedTask(enhanced);
        setPreviousSuggestions((prev) => [...prev, enhanced]);
        setCurrentSuggestionIndex(previousSuggestions.length);
      }
    } catch (error) {
      console.error("Error getting new suggestion:", error);
      setUpdateMessage("Failed to get a new suggestion. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setUpdateMessage(null), 2000);
    }
  };

  const showPreviousSuggestion = () => {
    if (currentSuggestionIndex > 0) {
      const newIndex = currentSuggestionIndex - 1;
      setCurrentSuggestionIndex(newIndex);
      setEnhancedTask(previousSuggestions[newIndex]);
    }
  };

  const showNextSuggestion = () => {
    if (currentSuggestionIndex < previousSuggestions.length - 1) {
      const newIndex = currentSuggestionIndex + 1;
      setCurrentSuggestionIndex(newIndex);
      setEnhancedTask(previousSuggestions[newIndex]);
    }
  };

  const handleKeep = async () => {
    if (!currentTask) return;

    setIsLoading(true);
    try {
      // Add robot label to indicate it was reviewed
      const existingLabels = currentTask.labels || [];
      if (!existingLabels.includes("🤖")) {
        const updatedTask = await updateTask(currentTask.id, {
          labels: [...existingLabels, "🤖"],
        });
        onTaskUpdated(updatedTask);
        setUpdateMessage("Task marked as reviewed");
      }
    } catch (error) {
      console.error("Error updating task:", error);
      setUpdateMessage("Failed to update task");
    } finally {
      setIsLoading(false);
      setTimeout(() => setUpdateMessage(null), 2000);
      moveToNextTask();
    }
  };

  const handleChange = async () => {
    if (!currentTask) return;

    setIsLoading(true);
    try {
      // Update content and add robot label
      const existingLabels = currentTask.labels || [];
      const updates: { content: string; labels?: string[] } = {
        content: enhancedTask,
      };

      if (!existingLabels.includes("🤖")) {
        updates.labels = [...existingLabels, "🤖"];
      }

      const updatedTask = await updateTask(currentTask.id, updates);
      onTaskUpdated(updatedTask);
      setUpdateMessage("Task updated successfully");
    } catch (error) {
      console.error("Error updating task:", error);
      setUpdateMessage("Failed to update task");
    } finally {
      setIsLoading(false);
      setTimeout(() => setUpdateMessage(null), 2000);
      moveToNextTask();
    }
  };

  const moveToNextTask = () => {
    if (currentTaskIndex < tasksToReview.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      setIsOpen(false);
      onReviewComplete();
    }
  };

  const startReview = () => {
    setCurrentTaskIndex(0);
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={startReview}
        className="review-button"
        disabled={tasksToReview.length === 0}
      >
        Review Tasks{" "}
        {tasksToReview.length > 0
          ? `(${tasksToReview.length})`
          : "(No tasks to review)"}
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {currentTask ? (
          <div className="task-review">
            <h2>
              Task Review ({currentTaskIndex + 1}/{tasksToReview.length})
            </h2>

            {updateMessage && (
              <div className="update-message">{updateMessage}</div>
            )}

            <div className="task-container">
              <div className="task-box original">
                <h3>Original Task</h3>
                <p>{currentTask.content}</p>
              </div>

              <div className="task-box enhanced">
                <h3>Enhanced Task</h3>
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <p>{enhancedTask}</p>
                )}
                <button
                  onClick={requestAnotherSuggestion}
                  className="refresh-button"
                  disabled={isLoading}
                  title="Get another suggestion"
                >
                  ↻ New Suggestion
                </button>

                {previousSuggestions.length > 1 && (
                  <div className="suggestion-navigation">
                    <div className="suggestion-count">
                      Suggestion {currentSuggestionIndex + 1} of{" "}
                      {previousSuggestions.length}
                    </div>
                    <div className="navigation-buttons">
                      <button
                        onClick={showPreviousSuggestion}
                        disabled={currentSuggestionIndex === 0 || isLoading}
                        className="nav-button"
                        title="Previous suggestion"
                      >
                        ←
                      </button>
                      <button
                        onClick={showNextSuggestion}
                        disabled={
                          currentSuggestionIndex ===
                            previousSuggestions.length - 1 || isLoading
                        }
                        className="nav-button"
                        title="Next suggestion"
                      >
                        →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="button-container">
              <button
                onClick={handleKeep}
                className="action-button keep"
                disabled={isLoading}
              >
                Keep Original
              </button>
              <button
                onClick={handleChange}
                className="action-button change"
                disabled={isLoading}
              >
                Use Enhanced
              </button>
            </div>
          </div>
        ) : (
          <div>No tasks to review</div>
        )}
      </Modal>

      <style jsx>{`
        .review-button {
          background-color: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 20px;
          transition: background-color 0.3s;
        }
        .review-button:hover {
          background-color: #2980b9;
        }
        .review-button:disabled {
          background-color: #bdc3c7;
          cursor: not-allowed;
        }
        .task-review {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .update-message {
          background-color: #d4edda;
          color: #155724;
          padding: 10px 15px;
          border-radius: 4px;
          margin-bottom: 10px;
          text-align: center;
        }
        .task-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .task-box {
          padding: 15px;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .original {
          background-color: #f8f9fa;
          border-left: 4px solid #6c757d;
        }
        .enhanced {
          background-color: #e3f2fd;
          border-left: 4px solid #2196f3;
        }
        .refresh-button {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: #f1f1f1;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: background-color 0.2s;
        }
        .refresh-button:hover {
          background-color: #e0e0e0;
        }
        .refresh-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .suggestion-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
          border-top: 1px solid #e0e0e0;
          padding-top: 10px;
        }
        .suggestion-count {
          font-size: 12px;
          color: #666;
        }
        .navigation-buttons {
          display: flex;
          gap: 5px;
        }
        .nav-button {
          background-color: #f1f1f1;
          border: none;
          border-radius: 4px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .nav-button:hover:not(:disabled) {
          background-color: #e0e0e0;
        }
        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        h3 {
          margin-top: 0;
          color: #333;
          font-size: 18px;
          padding-right: 100px;
        }
        .button-container {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
        .action-button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
          width: 48%;
        }
        .keep {
          background-color: #e9ecef;
          color: #495057;
        }
        .keep:hover {
          background-color: #dee2e6;
        }
        .change {
          background-color: #4caf50;
          color: white;
        }
        .change:hover {
          background-color: #43a047;
        }
        .loading-spinner {
          width: 30px;
          height: 30px;
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-left-color: #2196f3;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @media (min-width: 768px) {
          .task-container {
            flex-direction: row;
          }
          .task-box {
            flex: 1;
          }
        }
      `}</style>
    </>
  );
}
