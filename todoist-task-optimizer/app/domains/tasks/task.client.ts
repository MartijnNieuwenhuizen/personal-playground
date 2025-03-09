export interface Task {
  id: string;
  content: string;
}

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await fetch("/api/tasks");
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const { results } = await response.json();
  return results;
};

export const updateTask = async (
  taskId: string,
  content: string
): Promise<Task> => {
  const response = await fetch(`/api/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error("Failed to update task");
  }

  return response.json();
};
