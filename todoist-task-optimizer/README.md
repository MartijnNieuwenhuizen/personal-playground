# Todoist Task Optimizer

## Conclusion

(This part, and this part alone, is written by me without an AI).

It works. The AI is able to translate my requests into code. I'm not (yet) great at writing prompts and didn't focus on any styling, Semantics etc, but still, there is an app.

Sometimes it surprised me with a solution. Like the "Ask again" function. I would have build a refresh button. The AI build a whole compare functionality where you can also go back to the previous generated suggestion and still pick that one.

The code output is shit. I didn't provide any examples that should have set the bar, but still, the files are huge, there is a lot of inline shit. I needed to change the location of some code to ensure a split between business logic and UI (or API and components). But it didn't stick to it (I also didn't ask it to do it). Next time I will include some documents/articles about the correct architecture as context, maybe it helps.

But the big surprise here is that the AI understands the generated code very well. And is able to modify this without any issues. Therefore, this is a very powerful tool if the code isn't doesn't have to be changed by a developer.

(AI is taking over again).

## Introduction

This project is a Next.js application that integrates with the Todoist API to help optimize task descriptions. What makes this project unique is that it was **entirely written by AI** through prompts in the Cursor IDE, using both Claude and GPT models. I did not manually write or edit any of the code - everything from the project structure to the implementation details was generated through AI prompts.

### AI-Generated Development

The entire codebase, including:

- API integration with Todoist
- OpenAI API integration for task enhancement
- React components and UI design
- State management
- Error handling

...was created solely through conversation with AI models. This project serves as an experiment to explore the capabilities of AI pair programming and to see how far we can go with AI-assisted development without writing code manually.

## Project Purpose

The Todoist Task Optimizer allows users to:

1. View their Todoist tasks
2. Review tasks one by one in a modal interface
3. For each task, see an AI-enhanced version that makes it more specific, actionable, and clear
4. Choose whether to keep the original task or update it with the enhanced version

This tool aims to help users improve their task management by making task descriptions more effective according to productivity principles.

## Technical Stack

- Next.js with TypeScript
- Todoist API for task management
- OpenAI API for task enhancement
- React for the UI components

## Disclaimer

This is purely an experimental project to test the capabilities of AI-assisted development. It is not intended for production use without proper review and testing.

(Even this README)
