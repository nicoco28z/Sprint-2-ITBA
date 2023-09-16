import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, HStack, Image, Text } from "@chakra-ui/react";



export default function ErrorPage() {

  const navigate = useNavigate();

  return (
    <>
      <Text textAlign="center" fontSize="xl">
        Página no encontrada.
      </Text>
      <Image
        src="./error_page_img.jpg"
        objectFit="cover"
        objectPosition="50% 50%"
        boxSize="60vh"
        alt="Error 404, página no encontrada"
        margin="auto"
      />
      <HStack justify="center">
        <Button onClick={() => navigate(-1)}>Retroceder</Button>
        <Button onClick={() => navigate("/home")}>Volver al inicio</Button>
      </HStack>
    </>
  );
}
