// LIBRERIAS DE REACT
import React from "react";
// Espacio para hacer render
import ReactDOM from "react-dom/client";
// Para dónde podemos ir
import { RouterProvider } from "react-router-dom";

// creación del router
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
