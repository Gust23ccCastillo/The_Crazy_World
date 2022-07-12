import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div id="SaleInformation"className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">Un NFTs como Ningún otro.</h2>
          <p className="description">
          Estos NFTs se Venderán en Ethereum y También otros en Solana, Esto varia Según su Clasificación.
          No te quedes sin el tuyo!!.                     
          </p>
          <p className="description">
          ____________________The Crazy   World_________________________
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">Un NFTs como Ningún otro.</h2>
          <p className="description">
            Estos NFTs traen Recompesas y Regalías, asi como su Metadato que sera único y podras Verificar su Autenticidad Pronto, No te quedes sin el tuyo!!.   
          </p>
          <p className="description">
          ____________________The Crazy   World_________________________
          </p>
        </div>
      </div>
    </div>
  );
}
