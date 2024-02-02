// Importar librerias de React
// useState sirve para  majear el estado, pór ejemplo ver si es falso o verdadero
import React, {useState} from "react"
// Importar el contexto para poder enviarle las variables de colores
import { ThemeContext } from "../context/ThemeContext"

// Creamos la función del tema
const ThemeProvider = ({children}) => {
    // Creamos los estados del tema, que pueden ser falso o verdadero
    const [theme, setTheme] = useState(false)
    // Creamos la variable color para saber que color va a quedar guardado
    // If ternario, condición, ?, valor verdadero, :, valor de falso
    const color = theme ? 'Dark': 'Light'
    // Devolvemos el resultado de color
  return (
    // Ponemos los valores de la función dentro del contexto
    <ThemeContext.Provider
        // Se envian los valores theme y color.
        // Se envia la función de cambio de color
        value={{
            theme,
            setTheme,
            color
        }}
    >
            {/* Todo lo que va dentro del contexto recibe estos cambios */}
            {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider