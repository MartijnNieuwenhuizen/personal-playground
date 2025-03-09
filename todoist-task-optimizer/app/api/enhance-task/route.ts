import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API key is not defined" },
      { status: 500 }
    );
  }

  try {
    const { taskContent } = await req.json();

    if (!taskContent) {
      return NextResponse.json(
        { error: "Task content is required" },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a personal assistant who helps reformat tasks based on the productivity principles in the book *Grip* by Rick Pastoor. You will adjust tasks to follow the book's guidelines for clarity, focus, and priority. The output will reformat the task into a clear, actionable item in the **imperative form** (starting with a verb), aligning with the productivity standards from *Grip*. The input will be the task itself.",
          },
          {
            role: "user",
            content: taskContent,
          },
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return NextResponse.json(
        { error: "Failed to enhance task" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const enhancedTask = data.choices[0].message.content.trim();

    return NextResponse.json({ enhancedTask });
  } catch (error) {
    console.error("Error enhancing task:", error);
    return NextResponse.json(
      { error: "Failed to enhance task" },
      { status: 500 }
    );
  }
}
