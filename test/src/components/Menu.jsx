import React from 'react'

// Importamos el contexto
import {useThemeProvider} from '../context/ThemeContext'

const Menu = () => {
  const {color}= useThemeProvider()
  const {handleThem}= useThemeProvider()
  return (
    <div className={`Menu ${color}`}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/ver-api">Ver API</a>
        </li>
        <li>
          <button type='button' onClick={handleThem}>Cambio de color</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu