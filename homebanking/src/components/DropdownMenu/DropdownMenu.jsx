import React from 'react';
import {
Menu,
MenuButton,
MenuList,
MenuItem,
Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'; // Importa ChevronDownIcon desde @chakra-ui/icons
import { Link } from "react-router-dom";
import {useAuth} from '../../hooks/useAuth'

const DropdownMenu = () => {

  const {isLogged, signOut} = useAuth();

return (
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Menu
    </MenuButton>
    <MenuList>
        <MenuItem>
          <Link to="/home">Inicio</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/perfil">Mi perfil</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/transferencias">Transferencias</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/pagos">Pagos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/herramientas">Herramientas</Link>
        </MenuItem>
        {isLogged
        ?<MenuItem>
            <Link to="/home" onClick={()=> signOut() }>Cerrar sesión</Link>
          </MenuItem>
        : null
        }
    </MenuList>
    </Menu>
);
};

export default DropdownMenu;