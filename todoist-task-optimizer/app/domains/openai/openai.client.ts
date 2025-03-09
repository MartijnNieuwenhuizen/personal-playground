export const enhanceTaskDescription = async (
  taskContent: string
): Promise<string> => {
  try {
    const response = await fetch("/api/enhance-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskContent }),
    });

    if (!response.ok) {
      throw new Error("Failed to enhance task");
    }

    const data = await response.json();
    return data.enhancedTask;
  } catch (error) {
    console.error("Error enhancing task:", error);
    return "Failed to enhance task. Please try again.";
  }
};
