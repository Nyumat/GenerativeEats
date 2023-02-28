import { Tag, TagLabel, useColorMode } from "@chakra-ui/react";

interface IngredientProps {
  ingredient: string;
}

const Ingredient = ({ ingredient }: IngredientProps) => {
  const { colorMode } = useColorMode();
  return (
    <Tag
      size="lg"
      variant="solid"
      colorScheme={colorMode === "light" ? "gray" : "whiteAlpha"}
    >
      <TagLabel fontSize="1.2rem">{ingredient}</TagLabel>
    </Tag>
  );
};

export default Ingredient;
