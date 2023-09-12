import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import TransferenciasPage from "./Pages/TransferenciasPage";
import PagosPage from "./Pages/PagosPage";
import LoginPage from "./Pages/LoginPage";

//Rutas para la navegacion
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/transferencias",
    element: <TransferenciasPage />,
  },
  {
    path: "/pagos",
    element: <PagosPage />,
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
];

const router = createBrowserRouter(routes)


export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
