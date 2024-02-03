import React from 'react'
// Importando imágenes
import logo from '../assets/images/descarga.png';
const Home = () => {
  return (
    <div className="Home">
      <hr  className="homeSeparator"/>
      <h1 className="homeTitle">Home</h1>
        <div className="hometitleContainer">
          <div className="hometitlecontainerImg">
            <img src={logo} alt='Libertad' className="homeImg"></img>
          </div>
          <p  className="homeTexto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias enim aliquam modi nostrum animi expedita, distinctio, odio officia excepturi quisquam iure doloribus dignissimos quod aut libero, quidem possimus nulla quaerat!</p>
        </div>
      <hr className="homeSeparator"/>
      <h2 className="homeSubtitle">Subtitulo</h2>
      <img src={logo} alt='Libertad' className="homeImg"></img>
      <p className="homeTexto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat officiis iusto, enim, corporis accusamus rerum alias officia et explicabo corrupti atque quae dolores nisi, culpa earum hic exercitationem eius.</p>
      <hr className="homeSeparator"/>
    </div>
  )
}

export default Home