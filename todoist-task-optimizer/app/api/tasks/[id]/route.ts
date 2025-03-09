import { NextRequest, NextResponse } from "next/server";
import { TodoistApi } from "@doist/todoist-api-typescript";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const apiToken = process.env.TODOIST_API_TOKEN;
  if (!apiToken) {
    return NextResponse.json(
      { error: "API token is not defined" },
      { status: 500 }
    );
  }

  const taskId = params.id;
  if (!taskId) {
    return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
  }

  try {
    const updates = await req.json();
    const api = new TodoistApi(apiToken);

    // First, get the current task to preserve existing properties
    const currentTask = await api.getTask(taskId);

    // Prepare the update object
    const updateData: {
      content?: string;
      labels?: string[];
    } = {};

    // If content is provided, update it
    if (updates.content) {
      updateData.content = updates.content;
    }

    // Handle labels - merge existing labels with new ones
    if (updates.labels) {
      // Get existing labels and add new ones without duplicates
      const existingLabels = currentTask.labels || [];
      const uniqueLabels = [...new Set([...existingLabels, ...updates.labels])];
      updateData.labels = uniqueLabels;
    }

    console.log("Update data:", JSON.stringify(updateData));

    // Update the task
    await api.updateTask(taskId, updateData);

    // Fetch the updated task to return
    const updatedTask = await api.getTask(taskId);

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 }
    );
  }
}
