// LIBRERIAS DE REACT
import React from "react";
// Espacio para hacer render
import { createBrowserRouter } from "react-router-dom";

// PÁGINAS
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import VerApi from "../pages/VerApi";

// COMPONENTE BASE
// Este es el espacio para cargar
import Layout from "../layout/Layout";

// Para dónde podemos ir
const router = createBrowserRouter([
{
    // Cargue el layout
    path: "/",
    element: <Layout></Layout>,
    // Si la ruta no existe muestra Not Fount
    errorElement: <NotFound></NotFound>,
    children: [
        {
            // Si la ruta no existe muestra Not Fount
            errorElement: <NotFound></NotFound>,
            children: [
                {
                    // Si la ruta existe y es Home va a Home
                    path: "/",
                    element: <Home></Home>
                },
                {
                    // Si la ruta existe y es About va a About
                    path: "/about",
                    element: <About></About>
                },
                {
                    // Si la ruta existe y es ver-api va a ver-api
                    path: "/ver-api",
                    element: <VerApi></VerApi>
                }
            ]
        }
    ]
}
])

export default router;