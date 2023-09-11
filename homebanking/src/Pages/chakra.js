import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // Personalizar
});

const Chakra = ({ children }) => (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default Chakra;