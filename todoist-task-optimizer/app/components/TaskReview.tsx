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
  const [isLoading, setIsLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState<string | null>(null);

  const currentTask = tasks[currentTaskIndex];

  useEffect(() => {
    if (isOpen && currentTask) {
      enhanceCurrentTask();
    }
  }, [currentTaskIndex, isOpen]);

  const enhanceCurrentTask = async () => {
    if (!currentTask) return;

    setIsLoading(true);
    try {
      const enhanced = await enhanceTaskDescription(currentTask.content);
      setEnhancedTask(enhanced);
    } catch (error) {
      console.error("Error enhancing task:", error);
      setEnhancedTask("Failed to enhance task. Please try again.");
    } finally {
      setIsLoading(false);
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
    if (currentTaskIndex < tasks.length - 1) {
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
      <button onClick={startReview} className="review-button">
        Review Tasks
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {currentTask ? (
          <div className="task-review">
            <h2>
              Task Review ({currentTaskIndex + 1}/{tasks.length})
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
        }
        .original {
          background-color: #f8f9fa;
          border-left: 4px solid #6c757d;
        }
        .enhanced {
          background-color: #e3f2fd;
          border-left: 4px solid #2196f3;
        }
        h3 {
          margin-top: 0;
          color: #333;
          font-size: 18px;
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
