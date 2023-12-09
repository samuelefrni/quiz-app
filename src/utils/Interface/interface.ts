export interface IRequestAPI {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  answers: string[];
}

export interface AnswerObject {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

export interface IHomeProps {
  startGame: () => void;
}

export interface IQuizProps {
  question: string;
  answers: string[];
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
  nextQuestion: () => void;
}

export interface IResultsProps {
  score: number;
  totalQuestion: number;
}
