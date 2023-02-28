import { Center, Text, Grid } from "@chakra-ui/react";
import Ingredient from "./Ingredient";

interface RecipeIngredientsProps {
  ingredients: string[];
}

const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  console.log("ingredients", ingredients);
  return (
    <Center flexDirection="column" my={8} alignItems={"center"}>
      <Text fontSize="3xl" fontWeight="bold" mb={2}>
        Ingredients
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" my={4}>
        {ingredients.map((ingredient, i) => (
          <Ingredient key={i} ingredient={ingredient} />
        ))}
      </Grid>
    </Center>
  );
};

export default RecipeIngredients;
