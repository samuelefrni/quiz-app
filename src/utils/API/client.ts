import axios from "axios";
import { IRequestAPI } from "../Interface/interface";
import { mixArray } from "../Functions/utils";

export const fetchQuery = async (): Promise<IRequestAPI[]> => {
  try {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&type=multiple"
    );

    return response.data.results.map((items: IRequestAPI) => ({
      ...items,
      answers: mixArray([...items.incorrect_answers, items.correct_answer]),
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
