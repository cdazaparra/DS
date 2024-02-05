import React from 'react'
// Importar archivo
import {data} from '../helpers/data.js'
// Importando imágenes
import logo from '../assets/images/descarga.png';
const HomeSliders = () => {
  return (
    <div>
        {data.map((item=>{
            return(
                <div className="slider">
                    <img src={item.image} alt="slider" />
                    <div className="slider-content">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.button}</a>
                    </div>
                </div>
            )
        }))}
    </div>
  )
}

export default HomeSliders