import React from "react";
import {
  Button,
  Avatar,
  Card,
  CardHeader,
  Text,
  CardFooter,
  Heading,
  CardBody,
} from "@chakra-ui/react";

export default function PagosCard({name, price}) {
  return (
    <>
      <Card maxH="180px" size='sm' borderRadius='10px' backgroundColor='blue.100'>
        <CardHeader textAlign="center">
          <Heading size='md'>{name}</Heading>
        </CardHeader>
        <CardBody textAlign='center'>
            <Text>$ {price}</Text>
        </CardBody>
        <CardFooter justifyContent='center'>
          <Button>Abonar</Button>
        </CardFooter>
      </Card>
    </>
  );
}
