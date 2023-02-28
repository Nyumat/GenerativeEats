import React from "react";
import axios from "axios";

interface useRecipeSearchProps {
  userIngredients: string[];
}

const useRecipeSearch = ({ userIngredients }: useRecipeSearchProps) => {
  const [recipes, setRecipes] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

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

    let ignore = false;
    const controller = new AbortController();

    async function fetchRecipes() {
      setIsLoading(true);
      let data;
      try {
        const response = await axios.post(
          "http://localhost:8080/recipe",
          { ingredients: userIngredients },
          { signal: controller.signal }
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch.");
        } else {
          data = response.data;
        }
      } catch (err) {
        if (err instanceof DOMException) {
          console.log("HTTP request aborted");
        } else {
          setError(true);
          throw err;
        }
      }

      if (!ignore) {
        setIsLoading(false);
        setRecipes(data);
      }

    }

    if (userIngredients.length > 0) {
      fetchRecipes();
    }

    return () => {
      ignore = true;
      setIsLoading(false);
      isMounted = false;
      controller.abort();
    };

  }, [userIngredients]);

  return { recipes, isLoading, error };
};

export default useRecipeSearch;
