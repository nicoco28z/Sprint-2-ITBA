import { Box, Button, Card, CardBody, HStack, Heading } from "@chakra-ui/react";
import React from "react";

export default function TransferenciasPage() {
  return (
    <>
      {/*ACA VA EL COMPONENTE DEL MENU */}

      <Heading textAlign="center" mt="10px">
        Transferencias
      </Heading>
      <Box display="flex" justifyContent="center" textAlign="center" mt="2rem">
        <Card size="md" w="50%">
          <CardBody>
            <HStack justifyContent="center">
              <Button>Transferir con Alias, CBU o CVU</Button>
              <Button>Ingresar Dinero</Button>
            </HStack>
          </CardBody>
        </Card>
      </Box>
      <Box p='35px' borderRadius='25px' border='1px' w='60rem' borderColor='black'>
        <Heading size='md' textAlign="start">Transferir a contactos</Heading>
        <Button leftIcon>Agregar Contacto + </Button>
       
      </Box>

    </>
  );
}
