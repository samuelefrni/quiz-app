import { IGetQuestions } from "../Interface/interface";

export const mixArray = (object: IGetQuestions[]) => {
  const randomSort = () => Math.random() - 0.5;
  return object.map((items) => ({
    ...items,
    answers: items.answers.sort(randomSort),
  }));
};
