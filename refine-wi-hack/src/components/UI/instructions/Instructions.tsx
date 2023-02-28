import { Box, Center, Text } from "@chakra-ui/react";

interface InstructionsProps {
  instructions: string[];
}

const Instructions = ({ instructions }: InstructionsProps) => {
  return (
    <Center flexDirection="column" mt={8} mb={8} alignItems={"flex-start"}>
      <Text fontSize="3xl" fontWeight="bold" mb={6}>
        Instructions
      </Text>
      {instructions.map((instruction, index) => (
        <Text key={index} fontSize="xl" mb={2}>
          {instruction}
        </Text>
      ))}
    </Center>
  );
};

export default Instructions;
