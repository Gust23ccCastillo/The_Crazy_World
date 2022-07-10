import React from "react";
import home from "../assets/home.png";
import NFTPortada from '../assets/NFT-Portada-2.png';


export default function Home() {
  return (
    <div id="Inicio"className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Proximos Lanzamiento</p>
          <h1 className="title">Un NFT Como Ningun Otro</h1>
          <p className="description">
          No Te Pierdas el Lanzamiento de NuestroS NuevoS NFTs, Dichas Colección se Subirán a la Plataforma de Open Sean en la Fecha Mencionada a Continuación.
          </p>
          <h1 className="title">Fecha De Lanzamiento</h1>
          <div  class="bg-6">
            <div class="glitch" data-text="20/08/2022">20/08/2022</div>
          </div>
          
          
        </div>
        <div>
        
        </div>
        <div className="image-container">
          <div className="image">
            <img src={NFTPortada} alt="home image" />
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
