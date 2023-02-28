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
  HStack,
  Spinner,
  Tag,
  TagLabel,
  TagCloseButton,
  Button,
  AbsoluteCenter,
  Grid,
  useToast,
} from "@chakra-ui/react";
import RecipeIngredients from "components/UI/ingredients/RecipeIngredients";
import Instructions from "components/UI/instructions/Instructions";
import { saveRecipe } from "redux/slices/appSlice";
import { useDispatch } from "react-redux";

const Generate = () => {
  const toast = useToast();
  const [ingredientsRes, setTextRes] = React.useState<string[]>([]);
  const [value, setValue] = React.useState("");
  const [valueArr, setValueArr] = React.useState<string[]>([]);
  const { colorMode } = useColorMode();
  const [saveLoading, setSaveLoading] = React.useState(false);
  const dispatch = useDispatch();

  const { recipes, isLoading, error } = useRecipeSearch({
    userIngredients: ingredientsRes,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setValueArr([...valueArr, value]);
    setValue("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (valueArr.length > 0) {
      setTextRes(valueArr);
    } else {
      console.log("No ingredients to regenerate");
    }

    setValue("");
  };

  const handleDelete = (index: number) => {
    const newArr = [...valueArr];
    newArr.splice(index, 1);
    setValueArr(newArr);
  };

  const handleGenerate = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (valueArr.length > 0) {
      let copy = [...valueArr];
      setTextRes(copy);
    } else {
      toast({
        title: "No ingredients to regenerate.",
        description: "Please add ingredients to regenerate.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    setValue("");
  };

  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSaveLoading(true);
    const recipe = {
      title: recipes.title,
      ingredients: recipes.ingredients,
      instructions: recipes.instructions,
    };
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(dispatch(saveRecipe(recipe) as any)), 1000);
    });
    await promise;
    toast({
      title: "Recipe saved.",
      description: "We've saved your recipe for you.",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "bottom-right",
    });
    setSaveLoading(false);
  };

  const renderData = () => {
    if (isLoading) {
      return (
        <Grid placeItems="center" h="50vh">
          <Spinner size="xl" />
        </Grid>
      );
    } else if (error) {
      return (
        <Grid placeItems="center" h="100vh">
          <Text>Something went wrong</Text>
        </Grid>
      );
    } else if (recipes.length === 0) {
      return null;
    } else {
      return (
        <Center
          h={"100%"}
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          w={"50%"}
          margin={"0 auto"}
          whiteSpace={"pre-wrap"}
        >
          <Grid>{isLoading && <Spinner />}</Grid>
          {recipes?.title && (
            <Text
              fontSize="5xl"
              fontWeight={"bold"}
              color={colorMode === "light" ? "black" : "white"}
              textAlign={"center"}
            >
              {recipes.title}
            </Text>
          )}

          {recipes.ingredients && (
            <RecipeIngredients ingredients={recipes.ingredients} />
          )}

          {recipes.instructions && (
            <Instructions instructions={recipes.instructions} />
          )}

          {recipes?.title && (
            <Center py={16} gap={8}>
              <Button
                onClick={handleGenerate}
                isLoading={isLoading}
                loadingText="Generating"
                colorScheme={colorMode === "light" ? "black" : "gray"}
                variant="outline"
              >
                Generate Another Recipe
              </Button>

              <Button
                onClick={handleSave}
                isLoading={saveLoading}
                loadingText="Saving"
                colorScheme={colorMode === "light" ? "black" : "gray"}
                isDisabled={saveLoading}
                variant="outline"
              >
                Save Recipe
              </Button>
            </Center>
          )}
        </Center>
      );
    }
  };

  return (
    <>
      <Center
        pl={12}
        mt={16}
        mb={8}
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
          fontSize={"3xl"}
          fontWeight={"bold"}
          textAlign={"center"}
          color={useColorModeValue("gray.800", "white")}
        >
          Generate Your Own Recipe
        </Text>
      </Center>
      <Box
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
          ml={16}
          justifyContent={"space-between"}
        >
          <Input
            value={value}
            onChange={handleChange}
            variant={"filled"}
            placeholder="Add Ingredients"
            w={"500px"}
          />
          <Button onClick={handleAdd}>Add</Button>
          <Button onClick={handleGenerate}>Generate</Button>
        </Flex>
        <form onSubmit={handleSubmit}>
          <HStack
            spacing={4}
            marginTop={5}
            marginBottom={5}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
              width: "270px",
              flexWrap: "wrap",
            }}
          >
            {valueArr.map((ingredient, i) => (
              <Tag
                size={"lg"}
                key={i}
                borderRadius="full"
                variant="solid"
                bg={colorMode === "light" ? "gray.500" : "gray.700"}
              >
                <TagLabel>
                  {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                </TagLabel>
                <TagCloseButton onClick={() => handleDelete(i)} />
              </Tag>
            ))}
          </HStack>
        </form>
      </Box>

      {renderData()}
    </>
  );
};

export default Generate;
