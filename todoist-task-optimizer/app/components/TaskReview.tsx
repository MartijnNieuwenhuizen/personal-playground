import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { enhanceTaskDescription } from "../domains/openai/openai.client";

interface Task {
  id: string;
  content: string;
}

interface TaskReviewProps {
  tasks: Task[];
  onComplete: (
    keptTasks: Task[],
    changedTasks: {
      original: Task;
      enhanced: string;
      addRobotLabel?: boolean;
    }[]
  ) => void;
}

export default function TaskReview({ tasks, onComplete }: TaskReviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [enhancedTask, setEnhancedTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [keptTasks, setKeptTasks] = useState<Task[]>([]);
  const [changedTasks, setChangedTasks] = useState<
    { original: Task; enhanced: string; addRobotLabel?: boolean }[]
  >([]);

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

  const handleKeep = () => {
    setChangedTasks([
      ...changedTasks,
      {
        original: currentTask,
        enhanced: currentTask.content,
        addRobotLabel: true,
      },
    ]);
    moveToNextTask();
  };

  const handleChange = () => {
    setChangedTasks([
      ...changedTasks,
      {
        original: currentTask,
        enhanced: enhancedTask,
        addRobotLabel: true,
      },
    ]);
    moveToNextTask();
  };

  const moveToNextTask = () => {
    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex(currentTaskIndex + 1);
    } else {
      setIsOpen(false);
      onComplete(keptTasks, changedTasks);
    }
  };

  const startReview = () => {
    setCurrentTaskIndex(0);
    setKeptTasks([]);
    setChangedTasks([]);
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
