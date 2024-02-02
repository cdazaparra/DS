// Importar las librerias del contexto
import { createContext, useContext } from "react";
// Crear la variable que contiene el contexto
export const ThemeContext = createContext()
// Función que usa y exporta el contexto
export const useThemeProvider = ()=>{
    // Retornamos el contexto
    return useContext(ThemeContext)
}