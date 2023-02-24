import moment from "moment";
import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

const RecipeCard = ({
  id,
  title,
  image,
  date,
  ingredients,
  instructions,
  tags,
}: RecipeCardProps) => {
  if (image === "n/a") {
    return null;
  }

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="scroll"
      maxH={"400px"}
      boxShadow="lg"
    >
      <Image
        src={image}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "5px",
        }}
        alt={title}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Text
            mt="1"
            fontSize="2xl"
            fontWeight="bold"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Text>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Text
            mt="1"
            fontSize="sm"
            fontWeight="bold"
            lineHeight="tight"
            isTruncated
          >
            Generated on {moment(date).format("MMMM Do YYYY")}.
          </Text>
        </Box>

        <Box
          display="flex"
          mt="2"
          alignItems="left"
          style={{ flexDirection: "column" }}
        >
          <Text
            mt="1"
            fontSize="md"
            fontWeight="bold"
            lineHeight="tight"
            isTruncated
          >
            Tags
          </Text>

          <Text
            mt="1"
            fontSize="sm"
            fontWeight="bold"
            lineHeight="tight"
            isTruncated
          >
            {tags.map((tag) => {
              const copy = tag.replace(/-/g, " ");
              const capitalized = copy.replace(/\b\w/g, (l) => l.toUpperCase());
              return <li>{capitalized}</li>;
            })}
          </Text>
        </Box>

        <Box
          display="flex"
          mt="2"
          alignItems="left"
          style={{
            flexDirection: "column",
          }}
        >
          <Text
            mt="1"
            fontSize="md"
            fontWeight="bold"
            lineHeight="tight"
            isTruncated
          >
            Ingredients
          </Text>
          <Text
            mt="1"
            fontSize="sm"
            fontWeight="bold"
            lineHeight="tight"
            isTruncated
          >
            {ingredients.map((ingredient) => {
              const copy = ingredient.replace(/-/g, " ");
              const capitalized = copy.replace(/\b\w/g, (l) => l.toUpperCase());
              return <li>{capitalized}</li>;
            })}
          </Text>
        </Box>

        <Box
          display="flex"
          mt="1"
          alignItems="left"
          style={{ flexDirection: "column" }}
        >
          <Text>Instructions</Text>
          <Text mt="1" fontSize="sm" fontWeight="bold" lineHeight="tight">
            {instructions.map((instruction) => {
              while (instruction.match(/\d/)) {
                instruction = instruction.replace(/\d/, "");
                instruction = instruction.replace(".", "");
              }
              return <li>{instruction}</li>;
            })}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeCard;
