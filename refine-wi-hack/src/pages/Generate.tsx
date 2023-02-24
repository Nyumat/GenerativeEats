import React from "react";
import useRecipeSearch from "hooks/useRecipeSearch";
import {
  Box,
  Flex,
  Center,
  Text,
  IconButton,
  useColorMode,
  Input,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

const Generate = () => {
  const [ingredientsRes, setTextRes] = React.useState<string[]>([]);
  const [value, setValue] = React.useState("");

  const { recipes, isLoading } = useRecipeSearch({
    userIngredients: ingredientsRes,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setTextRes([...ingredientsRes, value]);
    setValue("");
  };

  console.log(ingredientsRes);
  console.log(recipes);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Center
        pl={12}
        mt={5}
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "2.0rem",
          fontWeight: "bolder",
          textAlign: "center",
          color: `${colorMode === "light" ? "black" : "white"}`,
        }}
      >
        <Text
          style={{
            fontSize: "3.0rem",
            fontWeight: "bold",
            textAlign: "center",
            color: `${colorMode === "light" ? "black" : "white"}`,
          }}
        >
          Generate A Recipe/Meal
        </Text>
      </Center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Flex
          h={16}
          alignItems={"center"}
          gap={5}
          justifyContent={"space-between"}
        >
          <>
            <Input
              value={value}
              onChange={handleChange}
              placeholder="Add Ingredients"
              size="lg"
            />
            <Button onClick={handleClick}>Add</Button>
          </>
        </Flex>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {recipes?.length !== 0 && (
          <Text
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              textAlign: "center",
              color: `${colorMode === "light" ? "black" : "white"}`,
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Generated Recipe:
          </Text>
        )}
        <ul>
          {recipes?.title && (
            <span>
              <Text
                style={{
                  fontSize: "2.7rem",
                  fontWeight: "bolder",
                  textAlign: "center",
                  color: `${colorMode === "light" ? "black" : "white"}`,
                  marginTop: "5px",
                  marginBottom: "15px",
                  width: "900px",
                }}
              >
                {recipes.title}
              </Text>
            </span>
          )}

          {recipes?.ingredients && (
            <span>
              <Text
                style={{
                  fontSize: "2.0rem",
                  fontWeight: "bolder",
                  textAlign: "center",
                  color: `${colorMode === "light" ? "black" : "white"}`,
                }}
              >
                Ingredients
              </Text>
            </span>
          )}

          {recipes.ingredients &&
            recipes?.ingredients.map((recipe: any) => (
              <span>
                <Text
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    textAlign: "center",
                    color: `${colorMode === "light" ? "black" : "white"}`,
                    marginTop: "5px",
                    marginBottom: "15px",
                    width: "900px",
                  }}
                >
                  {recipe}
                </Text>
              </span>
            ))}

          {recipes?.ingredients && (
            <span>
              <Text
                style={{
                  fontSize: "2.0rem",
                  fontWeight: "bolder",
                  textAlign: "center",
                  color: `${colorMode === "light" ? "black" : "white"}`,
                  marginTop: "5px",
                  marginBottom: "15px",
                  width: "900px",
                }}
              >
                Instructions:
              </Text>
            </span>
          )}

          {recipes?.instructions &&
            recipes?.instructions.map((recipe: any) => (
              <span>
                <Text
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    textAlign: "left",
                    color: `${colorMode === "light" ? "black" : "white"}`,
                    marginTop: "5px",
                    marginBottom: "5px",
                    width: "900px",
                  }}
                >
                  {recipe}
                </Text>
              </span>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Generate;
