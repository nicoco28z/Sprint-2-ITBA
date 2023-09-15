import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import TransferenciasPage from "./pages/TransferenciasPage";
import PagosPage from "./pages/PagosPage";
import Navbar from './components/Navbar/Navbar'
import ErrorPage from './pages/ErrorPage'
import Account from './pages/AccountsPage'
import AdditionalTools from './pages/AdditionalTools'

import LoginPage from "./pages/LoginPage";

//Rutas para la navegacion
const routes = [
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "home",
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
      {
        path: "cuentas",
        element: <Account />,
      },
      {
        path: "herramientas",
        element: <AdditionalTools />,
      },
    ],
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path: "*",
    element: <ErrorPage />,
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
