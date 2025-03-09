"use client";

import { useEffect, useState } from "react";
import { fetchTasks, Task } from "../domains/tasks/task.client";
import TaskReview from "../components/TaskReview";

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [updateMessage, setUpdateMessage] = useState<string | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setIsLoading(true);
    try {
      const results = await fetchTasks();
      setTasks(results);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTaskUpdated = (updatedTask: Task) => {
    // Update the task in the local state
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const handleReviewComplete = () => {
    setUpdateMessage("Task review completed!");
    setTimeout(() => setUpdateMessage(null), 3000);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading tasks...</p>
        <style jsx>{`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
          .spinner {
            width: 40px;
            height: 40px;
            margin-bottom: 20px;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-left-color: #3498db;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          p {
            color: #555;
            font-size: 16px;
            margin-top: 0;
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Tasks</h1>

      {updateMessage && <div className="update-message">{updateMessage}</div>}

      <TaskReview
        tasks={tasks}
        onTaskUpdated={handleTaskUpdated}
        onReviewComplete={handleReviewComplete}
      />

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {task.content}
            {task.labels && task.labels.includes("🤖") && (
              <span className="robot-label">🤖</span>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
        h1 {
          color: #333;
          margin-bottom: 20px;
        }
        .update-message {
          background-color: #d4edda;
          color: #155724;
          padding: 10px 15px;
          border-radius: 4px;
          margin-bottom: 20px;
          animation: fadeOut 3s forwards;
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .task-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .task-item {
          padding: 15px;
          border-bottom: 1px solid #eee;
          transition: background-color 0.2s;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .task-item:hover {
          background-color: #f8f9fa;
        }
        .robot-label {
          margin-left: 10px;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
