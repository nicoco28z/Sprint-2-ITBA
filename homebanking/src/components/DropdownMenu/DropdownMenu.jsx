import React from 'react';
import {
Menu,
MenuButton,
MenuList,
MenuItem,
Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'; // Importa ChevronDownIcon desde @chakra-ui/icons
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../../hooks/useAuth'

const DropdownMenu = () => {

  const {isLogged, signOut} = useAuth();
  const navigate = useNavigate()

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
            <Button onClick={()=> {signOut(); navigate("/home") }}>Cerrar sesión</Button>
          </MenuItem>
        : null
        }
    </MenuList>
    </Menu>
);
};

export default DropdownMenu;