import React from "react";
import MyCarousel from "../components/Carousell/Carousell";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@chakra-ui/react";

export default function HomePage() {
  const { isLogged } = useAuth();

  return (
    <>
      <MyCarousel />
      {isLogged ? null : <Button>Ingresá</Button>}
    </>
  );
}
