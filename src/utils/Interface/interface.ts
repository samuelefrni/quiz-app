export interface IGetQuestions {
  question: string;
  answers: string[];
  correct_answer: string;
}

export interface IAnswerObject {
  question: string;
  answer: string;
  isCorrect: boolean;
  correct_answer: string;
}

export interface IHomeProps {
  startGame: () => void;
}

export interface IQuizProps {
  question: string;
  answers: string[];
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: IAnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
  nextQuestion: () => void;
  preaviusQuestion: () => void;
  restartGame: () => void;
}

export interface IResultsProps {
  score: number;
  totalQuestion: number;
}

export interface INavbarProps {
  preaviusQuestion: () => void;
  restartGame: () => void;
}
