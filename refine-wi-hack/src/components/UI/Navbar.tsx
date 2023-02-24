import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadSavedRecipes } from "redux/slices/appSlice";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} w={"100vw"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Center
            pl={12}
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "2.0rem",
              fontWeight: "bolder",
              textAlign: "center",
              color: `${colorMode === "light" ? "black" : "white"}`,
            }}
          >
            <p>GenerativeEats</p>

            <button
              style={{
                marginLeft: "25px",
              }}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? (
                <BsMoon size={30} />
              ) : (
                <BsSun size={30} />
              )}
            </button>
          </Center>

          <Flex alignItems={"center"} gap={5}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={
                  <button
                    style={{
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "5px",
                      marginRight: "10px",
                    }}
                  >
                    Menu
                  </button>
                }
                variant="ghost"
              />
              <MenuList>
                <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                <MenuItem onClick={() => navigate("/recipes")}>
                  Your Recipes
                </MenuItem>
                <MenuItem onClick={() => navigate("/generate")}>
                  Generate
                </MenuItem>
                <MenuItem onClick={() => dispatch(loadSavedRecipes() as any)}>
                  Reset Redux
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
