import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";

function App() {
  const chakraTheme = extendTheme({
    colors: {
      brand: {
        100: "#f7fafc",
        900: "#1a202c",
      },
    },
  });

  return (
    <ChakraProvider theme={chakraTheme}>
      <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
      
    </ChakraProvider>
  );
}

export default App;
