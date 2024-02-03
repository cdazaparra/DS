import React from 'react'

const Menu = () => {
  return (
    <div className='Menu'>
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
      </ul>
    </div>
  )
}

export default Menu