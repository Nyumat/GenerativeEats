import dotenv from "dotenv";
import { OpenAIApi, Configuration } from "openai";

dotenv.config();

const mutateArray = (array, header) => {
  let localArray = array;
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(header)) {
      localArray.splice(i, 1);
    }

    if (array[i] === "") {
      localArray.splice(i, 1);
    }
  }
  return localArray;
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export { mutateArray, openai };
