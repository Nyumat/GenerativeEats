import { motion } from "framer-motion";
import { Text, Center, Button, Box, useColorModeValue } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSavedRecipes,
  selectAppStateLoaded,
  loadSavedRecipes,
} from "redux/slices/appSlice";

import RecipeCard from "components/UI/RecipeCard";

const SavedRecipes = () => {
  const dispatch = useDispatch();
  dispatch({ type: "app/loadSavedRecipes" });
  const riseAndFadeIn = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", duration: 2.5 },
  };

  const fadeAndBounceIn = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", duration: 5.5 },
  };

  const savedRecipes = useSelector(selectSavedRecipes);
  const appStateLoaded = useSelector(selectAppStateLoaded);

  console.log("savedRecipes", savedRecipes);
  console.log("appStateLoaded", appStateLoaded);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginLeft: "25px",
      }}
    >
      <motion.div {...riseAndFadeIn}>
        <Center>
          <Text fontSize="6xl" fontWeight="bold">
            Your Saved Recipes
          </Text>
        </Center>
      </motion.div>

      <motion.div
        {...fadeAndBounceIn}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridGap: "1rem",
          width: "100%",
          padding: "1rem",
        }}
      >
        {savedRecipes.map((recipe: any) => (
          <RecipeCard {...recipe} />
        ))}
      </motion.div>
    </div>
  );
};

export default SavedRecipes;
