import { motion } from "framer-motion";
import { Text, Center } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSavedRecipes,
  selectAppStateLoaded,
  loadSavedRecipes,
} from "redux/slices/appSlice";

import RecipeCard from "components/UI/RecipeCard";

const SavedRecipes = () => {
  const dispatch = useDispatch();
  dispatch(loadSavedRecipes() as any);
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
        width: "100vw",
      }}
    >
      <motion.div {...riseAndFadeIn}>
        <Center>
          <Text fontSize="4xl" fontWeight="bold" py={16}>
            Your Saved Recipes
          </Text>
        </Center>
      </motion.div>

      <motion.div
        {...fadeAndBounceIn}
        style={{
          display: "flex",
          flex: 1,
          gap: "36px",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "10px",
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
