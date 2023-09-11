import React from 'react';
import { Box, Flex, Link, Spacer, Text, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import logo from './logo.png';

const Navbar = () => {
return (
    <Box bg="green.500" p={4} color="black">
    <Flex align="center">
        <Image src={logo} alt="Logo" w={16} h={16} mr={2} />
        <Link as={RouterLink} to="/" fontSize="30" fontWeight="bold">
        PillarBank
        </Link>
        <Spacer />
        <DropdownMenu /> {/* Agrega el menú desplegable aquí */}
    </Flex>
    </Box>
);
};

export default Navbar;
