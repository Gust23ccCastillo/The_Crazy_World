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
          <h2 className="title">Un NFTs como ningún otro.</h2>
          <p className="description">
          Estos NFTs se venderan en Ethereum y Tambien otros en Solana, Esto varia segun su clasificacion.
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
          <h2 className="title">Un NFTs como ningún otro.</h2>
          <p className="description">
            Estos NFTs traen Recompesas y Regalias, asi como su metadato que sera unico y podras verrificar su autenticidad pronto, No te quedes sin el tuyo!!.   
          </p>
          <p className="description">
          ____________________The Crazy   World_________________________
          </p>
        </div>
      </div>
    </div>
  );
}
