import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import signup from "../assets/Coleccion_PersonajesMisticos.png";

export default function Signup() {

  
  return (

    
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">NFTs of the Crazy World</p>
          <h1 className="title">Un NFT como ningún otro</h1>
          <p className="description">
          No te pierdas el lanzamiento de nuestros NFTs, En el Siguiente Boton lleva a la Coleccion Que esta en Open Sea.
          Que se habilitara el dia de la fecha que se publiquen en Open Sea.
          </p>
          <button >
             <a href="https://opensea.io/">
             Coleccion Open Sea
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
