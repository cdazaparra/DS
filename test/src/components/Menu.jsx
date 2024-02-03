import React from 'react'

// Importamos el contexto
import {useThemeProvider} from '../context/ThemeContext'

const Menu = () => {
  const {color}= useThemeProvider()
  const {handleThem}= useThemeProvider()
  return (
    <div className={`Menu ${color} `}>
      <div className='menuLogo'></div>
      <ul className='menuList'>
        <li className='menulistItem'>
          <a className='menulistitemLink' href="/">Home</a>
        </li>
        <li  className='menulistItem'>
          <a  className='menulistitemLink' href="/about">About</a>
        </li>
        <li  className='menulistItem'>
          <a  className='menulistitemLink' href="/ver-api">Ver API</a>
        </li>
        <li  className='menulistItem'>
        <a  className='menulistitemLink' onClick={handleThem} href='#'>Cambio de color</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu