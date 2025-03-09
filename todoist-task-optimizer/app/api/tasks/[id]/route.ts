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
    const { content } = await req.json();
    if (!content) {
      return NextResponse.json(
        { error: "Task content is required" },
        { status: 400 }
      );
    }

    const api = new TodoistApi(apiToken);
    await api.updateTask(taskId, { content });

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
