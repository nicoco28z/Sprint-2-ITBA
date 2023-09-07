import React from "react";
import {
  Button,
  Avatar,
  Card,
  CardHeader,
  Text,
  CardFooter,
} from "@chakra-ui/react";

export default function TransferenciaCard({name}) {
  return (
    <>
      <Card maxH="180px" backgroundColor='gray.200'>
        <CardHeader textAlign="center">
          <Avatar name={name} />
        </CardHeader>
        <Text textAlign="center">{name}</Text>
        <CardFooter>
          <Button colorScheme='blue'>Transferir</Button>
        </CardFooter>
      </Card>
    </>
  );
}
