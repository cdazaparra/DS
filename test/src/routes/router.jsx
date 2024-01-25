// LIBRERIAS DE REACT
import React from "react";
import { createBrowserRouter } from "react-router-dom";
// PÁGINAS

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import VerApi from "../pages/VerApi";
// COMPONENTE BASE
import Layout from "../layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
        {
            errorElement: <NotFound></NotFound>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: "/ver-api",
                    element: <VerApi></VerApi>
                }
            ]
        }
    ]
}
])

export default router;