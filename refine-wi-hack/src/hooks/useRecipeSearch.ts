import React from "react";
import axios from "axios";

interface useRecipeSearchProps {
  userIngredients: string[];
}

const useRecipeSearch = ({ userIngredients }: useRecipeSearchProps) => {
  const [recipes, setRecipes] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useMemo(() => {
    console.log("userIngredients", userIngredients);
  }, [userIngredients]);

  React.useEffect(() => {
    let isMounted = true;

    if (!isMounted) return;

    if (userIngredients.length === 0) {
      setRecipes([]);
      return;
    }

    const fetchRecipes = async () => {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8080/recipe", {
        ingredients: userIngredients,
      });
      setRecipes(response.data);
      setIsLoading(false);
    };
    if (userIngredients.length > 0) {
      fetchRecipes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userIngredients]);

  return { recipes, isLoading };
};

export default useRecipeSearch;
