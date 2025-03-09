import { NextResponse } from "next/server";
import { TodoistApi } from "@doist/todoist-api-typescript";

export async function GET() {
  const apiToken = process.env.TODOIST_API_TOKEN;
  if (!apiToken) {
    return NextResponse.json(
      { error: "API token is not defined" },
      { status: 500 }
    );
  }

  const api = new TodoistApi(apiToken);

  const fetchAllTasks = async (
    cursor: string | null = ""
  ): Promise<{ id: string; content: string }[]> => {
    // const { results, nextCursor } = await api.getTasks({ cursor });
    const { results } = await api.getTasks({ cursor });

    // if (!nextCursor) {
    //   return results;
    // }

    // return [...results, ...(await fetchAllTasks(nextCursor))];
    return results;
  };

  const allTasks = await fetchAllTasks();

  const cappedTasks = allTasks.slice(0, 2);

  // return NextResponse.json({ results: allTasks });
  return NextResponse.json({ results: cappedTasks });
}
