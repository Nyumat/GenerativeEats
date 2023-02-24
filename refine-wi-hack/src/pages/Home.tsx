import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Text, Center, Button } from "@chakra-ui/react";

const Home = () => {
  const navigate = useNavigate();

  const motionFlyInAndGrow = {
    initial: { opacity: 0, y: -0, x: -1700, scale: 0 },
    animate: { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 },
    transition: { type: "bounce", duration: 1.5 },
  };

  const motionFlyInAndGrow2 = {
    initial: { opacity: 0, y: -0, x: 1700, scale: 0.5 },
    animate: { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 },
    transition: { type: "linear", duration: 1.5, delay: 0.5 },
  };

  const motionFlyInAndGrow3 = {
    initial: { opacity: 0, y: -0, x: -1700, scale: 0.5 },
    animate: { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 },
    transition: { type: "linear", duration: 3.5, delay: 1.5 },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <motion.div {...motionFlyInAndGrow}>
        <Center>
          <Text fontSize="6xl" fontWeight="bold">
            GenerativeEats
          </Text>
        </Center>
      </motion.div>
      <motion.h2 {...motionFlyInAndGrow2}>
        <Center>
          <Text fontSize="2xl" fontWeight="bold">
            Recipes, Re-imagined.
          </Text>
        </Center>
      </motion.h2>
      <motion.button {...motionFlyInAndGrow3}>
        <Center mt={5}>
          <Button onClick={() => navigate("/recipes")}>Get Started</Button>
        </Center>
      </motion.button>
    </div>
  );
};

export default Home;
