import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import PagosCard from "../components/PagosCard/PagosCard";

export default function PagosPage() {
  return (
    <>
      {/* Aca iria el NavMenu jeje */}

      <Heading textAlign="center" mt="10px">
        Pagos
      </Heading>

      <Box textAlign="center" mt="10px" mb="15px">
        <Button>Nuevo Pago</Button>
      </Box>

      <VStack display="flex" pr='25%' pt="10px" pb='20px'>
          <Heading size="md">Pagos por vencer</Heading>
          <Button>Agregar un servicio</Button>
      </VStack>
        <VStack>
          <HStack
            border="1px"
            borderColor="gray.300"
            borderRadius="10px"
            flexWrap="wrap"
            justifyContent="right"
            spacing={6}
            
          >
            <PagosCard name="Factura de Luz" price={10000} />
            <PagosCard name="Factura de Agua" price={154285} />
            <PagosCard name="Cuota de Club" price={5400} />
          </HStack>
        </VStack>
      
    </>
  );
}
