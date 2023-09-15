import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import TransferenciasPage from "./pages/TransferenciasPage";
import PagosPage from "./pages/PagosPage";
import Navbar from './components/Navbar/Navbar'
import ErrorPage from './pages/ErrorPage'

import LoginPage from "./pages/LoginPage";

//Rutas para la navegacion
const routes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "transferencias",
        element: <TransferenciasPage />,
      },
      {
        path: "pagos",
        element: <PagosPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
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
