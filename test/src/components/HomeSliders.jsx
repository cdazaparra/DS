import React from 'react'
// Importar archivo
import {slidersData} from '../helpers/data.js'
// Importando imágenes
import logo from '../assets/images/descarga.png';
const HomeSliders = () => {
  return (
    <div className="Container">
        {slidersData.map((data=>{
            return(
                <div className="Slider" key={data.id}>
                        <h2  className="sliderTitle">{data.title}</h2>
                    <div className="sliderContent">
                        <img className='slidercontentImg' src={data.img} alt="slidercontentImg" />
                        <p className="slidercontenttitleText">{data.description}</p>
                        <a href={data.link} target="_blank" rel="noopener noreferrer">{data.button}</a>
                    </div>
                </div>
            )
        }))}
    </div>
  )
}

export default HomeSliders