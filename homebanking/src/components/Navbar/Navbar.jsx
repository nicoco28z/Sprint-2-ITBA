import React from "react";
import { Box, Flex, Link, Spacer, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Outlet } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
    <Box bg="green.500" p={4} color="black">
      <Flex>
        <DropdownMenu />
        <Image src={logo} alt="Logo" w={16} h={16} mr={2} />
        <Link as={RouterLink} to="/home" fontSize="30" fontWeight="bold">
          PillarBank
        </Link>
        <Spacer />
      </Flex>
    </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
