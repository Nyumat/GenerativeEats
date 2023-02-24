import { Router } from "express";
import { openai } from "../lib/index.js";
import Meal from "../models/Meal.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
var image = "n/a";

router.post("/save", async (req, res) => {
  const { title, ingredients, instructions } = req.body;

  // make a request ot the unsplash api to get query the image of the meal
  try {
    const encodedTitle = encodeURI(title);
    const unsplashResponse = await axios.get(
      `https://api.unsplash.com/search/photos?query=${encodedTitle}&client_id=${process.env.UNSPLASH_ACCESS}`
    );
    let randomIndex = Math.floor(
      Math.random() * unsplashResponse.data.results.length
    );
    const responseImage =
      unsplashResponse.data.results[randomIndex].urls.regular;
    image = responseImage;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  try {
    var description;
    let tags;

    //   backend needs to generate an image, description, and tags
    const getDescriptionPrompt = `
            Write a 2 sentence long description for this recipe.

            Title: ${title}
            Ingredients: ${ingredients}
            Instructions: ${instructions}
            `;

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: getDescriptionPrompt,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
      })
      .then((response) => {
        description = response.data.choices[0].text;
        description = description.replace(/\n/g, "");
        const getTagsPrompt = `
                Write a list of tags for this recipe.
                The tags should be separated by commas.
                The tags should be descriptive and relevant to the recipe.
    
                Title: ${title}
                Ingredients: ${ingredients}
                Instructions: ${instructions}
    
                Tags:
                `;

        openai
          .createCompletion({
            model: "text-davinci-003",
            prompt: getTagsPrompt,
            temperature: 0.9,
            max_tokens: 150,

            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
          })
          .then((response) => {
            tags = response.data.choices[0].text.split(", ");
            tags = tags.map((tag) => {
              return tag.replace(/\n/g, "");
            });

            tags = tags.map((tag) => {
              return tag.trim();
            });
          })
          .catch((error) => {
            res.send({
              message: "Error generating tags",
            });
          })
          .finally(async () => {
            const recipe = await Meal.create({
              title,
              ingredients,
              instructions,
              description,
              tags,
              image,
            });

            res.status(200).send({
              recipe: recipe,
              message: "Recipe saved successfully",
            });
          });
      })
      .catch((error) => {
        res.send({
          error: error,
        });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
