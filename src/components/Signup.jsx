import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import signup from "../assets/Coleccion_PersonajesMisticos.png";

export default function Signup() {

  
  return (

    
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">________NFTs of The Crazy World_________</p>
          <h1 className="title">Un NFT como Ningún otro.</h1>
          <p className="description">
          No te Pierdas el Lanzamiento de Nuestros NFTs, En el Siguiente Botón lleva a la Colección que estará en Open Sea.
          Se Habilitará el Dia de la Fecha Del Lanzamiento, Espera la Colección.
          </p>
          <button >
             <a href="https://opensea.io/">
             Colección Open Sea
             </a>
              
            
          </button>
          
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
