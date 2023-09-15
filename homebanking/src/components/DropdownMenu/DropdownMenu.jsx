import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import React from "react";

export default function DropdownMenu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">

        {/* Esta sería la vista del escritorio/computadora */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link to="/home">
            <Button variant="ghost" aria-label="Home" my={5} w="100%">
              Inicio
            </Button>
          </Link>

          <Link to="/perfil">
            <Button variant="ghost" aria-label="About" my={5} w="100%">
              Mi Perfil
            </Button>
          </Link>

          <Link to="/transferencias">
            <Button variant="ghost" aria-label="Contact" my={5} w="100%">
              Transferencias
            </Button>
          </Link>

          <Link to="/pagos">
            <Button variant="ghost" aria-label="Contact" my={5} w="100%">
              Pagos
            </Button>
          </Link>
        </Flex>

        {/* Estos son los estilos para los dispositivos móbiles */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      {/* Como se muestra el contenido a los celulares */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link to="/">
            <Button variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link to="/about">
            <Button variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link to="/contact">
            <Button variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
