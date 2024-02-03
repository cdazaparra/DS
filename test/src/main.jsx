// LIBRERIAS DE REACT
import React from "react";
// Espacio para hacer render
import ReactDOM from "react-dom/client";
// Para dónde podemos ir
import { RouterProvider } from "react-router-dom";

// creación del router
import router from "./routes/router";
// Importamos el proveedor del tema
import ThemeProvider from "./providers/ThemeProvider";

// importar hojas de estilo 95%
import './styles/base.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
