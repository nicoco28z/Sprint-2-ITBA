import React from 'react';
import {
Menu,
MenuButton,
MenuList,
MenuItem,
Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'; // Importa ChevronDownIcon desde @chakra-ui/icons

const DropdownMenu = () => {
return (
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Menu
    </MenuButton>
    <MenuList>
        <MenuItem>Perfil</MenuItem>
    </MenuList>
    </Menu>
);
};

export default DropdownMenu;

