<<<<<<< Updated upstream
import { Flex, Stack, Box, Icon, Text,
        Accordion, AccordionItem, AccordionButton, AccordionPanel} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import CardAccount from "../components/Accounts/AccountCard"
import AddAccount from '../components/Accounts/AddAccount'
import { useEffect, useState } from 'react'
=======
import {
  Stack,
  Box,
  Icon,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  SimpleGrid
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CardAccount from "../components/Accounts/AccountCard";
import AddAccount from "../components/Accounts/AddAccount";
import { useEffect, useState } from "react";
>>>>>>> Stashed changes

import Accounts from "../data/bankaccounts.json"


export default function Account(){
    let [cuentas, setCuentas] = useState(Accounts)
    let [actualizador, setActualizador] = useState(false)
    let [componenteCuentas, setComponenteCuentas] = useState([])

<<<<<<< Updated upstream
    useEffect(()=>{
        let nuevComp = renderAccounts(cuentas, setCuentas, setActualizador)
        setComponenteCuentas(nuevComp)
        setActualizador(false)
    },[actualizador])
    

    return(
        <Stack align="center" width="90%" margin="1" border="0.5px">
            <button onClick={() => console.log(cuentas)}>Mostrar cuentas</button>
            <Accordion allowToggle width="95%">
                <AccordionItem>
                    <AccordionButton bg="gray" _expanded={{bg: "gray.100"}} padding="15px" borderRadius="3px">
                        <Box as="span" flex='1' textAlign='left'/>
                        <Icon as={AddIcon}/>
                    </AccordionButton>
                    <AccordionPanel>
                        <AddAccount cuentas={cuentas} setCuentas={setCuentas} setActualizador={setActualizador}/>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Flex wrap="wrap" gap="15px" justify="center" width="100%">
                {componenteCuentas}
            </Flex>
        </Stack>
    )
=======
  return (
    <Stack align="center" width="90%" margin="1" border="0.5px">
      <Accordion allowToggle width="95%">
        <AccordionItem>
          <AccordionButton
            bg="teal"
            _expanded={{ bg: "teal.100" }}
            padding="15px"
            borderRadius="3px"
          >
            <Box as="span" flex="1" textAlign="left" />
            <Icon as={AddIcon} />
          </AccordionButton>
          <AccordionPanel>
            <AddAccount
              cuentas={cuentas}
              setCuentas={setCuentas}
              setActualizador={setActualizador}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
        <SimpleGrid columns={[1, 2, 3]} spacing="3" width="90%">
          {componenteCuentas}
        </SimpleGrid>
    </Stack>
  );
>>>>>>> Stashed changes
}


function renderAccounts(cuentas, setCuentas, setActualizador){
    if(cuentas.length === 0) return <Text textAlign="center">No hay cuentas disponibles.</Text>
    return cuentas.map(c => <CardAccount key={c.id} cuenta={c} cuentas={cuentas} setCuentas={setCuentas} setActualizador={setActualizador}/>)
}