import { Router } from "express";
import { mutateArray, openai } from "../lib/index.js";

const router = Router();

router.post("/", async (req, res) => {
  const meal = req.body.meal;

  const s = meal;

  const prompt = `
  
      Write a instructions based on this given meal:
      
      The first line should be the title of the recipe with a header "Title:"
      The title should be descriptive in one sentence and on the same line as the header.
      The second line should be the list of ingredients required. Make sure each of the ingredients are on new lines.
      The third line should be the instructions for creating the meal.

      Each line should have a header, like "Ingredients:" or "Title:" or "Instructions:".

      Meal: ${s}

      Ingredients:
      `;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
    });

    const recipe = response.data.choices[0].text;
    const recipeArray = recipe.split("\n");

    let title = "";
    for (let i = 0; i < recipeArray.length; i++) {
      if (recipeArray[i].includes("Title:")) {
        title = recipeArray[i].split(": ")[1];
      }
    }

    let ingredientsList = [];
    let start = false;
    let i = 0;

    while (i < recipeArray.length) {
      if (recipeArray[i].includes(" ")) {
        start = true;
        i++;
      }
      while (start) {
        if (recipeArray[i].includes("Instructions:")) {
          start = false;
        } else {
          ingredientsList.push(recipeArray[i]);
        }
        i++;
      }
      i++;
    }

    let instructions = [];
    let start2 = false;
    let j = 0;
    while (j < recipeArray.length) {
      if (recipeArray[j].includes("Instructions:")) {
        start2 = true;
      }
      while (start2) {
        if (j === recipeArray.length - 1) {
          start2 = false;
        } else {
          instructions.push(recipeArray[j + 1]);
        }
        j++;
      }
      j++;
    }

    let newIngredientsList = mutateArray(ingredientsList, "Ingredients:");
    let newInstructions = mutateArray(instructions, "Instructions:");

    res.send({
      title: title,
      ingredients: newIngredientsList,
      instructions: newInstructions,
      status: 200,
    });
  } catch (error) {
    if (error.response) {
      res.send({
        error: error.response.data,
        status: error.response.status,
      });
    } else {
      res.send({
        error: error,
        status: 500,
      });
    }
    res.send({
      recipe: "Sorry, we couldn't find a recipe for you.",
      status: 404,
    });
  }
});

export default router;
