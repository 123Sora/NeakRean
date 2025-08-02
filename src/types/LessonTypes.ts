export interface LessonContent {
  title: string;
  objectives: string[];
  content: string;
  examples: string[];
  quiz: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
  lab: {
    task: string;
    solution: string;
    css?: string;

  };
}

// We'll also define the Lesson interface here, which includes the ID.
// This is what HTMLCourse will use.
export interface Lesson extends LessonContent {
  id: string;
}