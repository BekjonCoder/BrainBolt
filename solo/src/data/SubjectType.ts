export interface QuestionType {
  id: number;
  quiz: string;
  variant: string[];
  answer: string;
}

export interface LevelType {
  level: "Beginner" | "Intermediate" | "Advanced";
  questions: QuestionType[];
}

export interface SubjectType {
  id: number;
  category: string;
  levels: LevelType[];
}
