import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/NFT-Exclusive-1.png";
import release2 from "../assets/NFT-Exclusive-2.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">NFTs Exclusivos En la Colección</h2>
          <p className="description">
          Estos NFT contienen sorpresas y recompensas por ser Exclusivos.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Exclusive NFT"
            title="Moth Man"
            price={2.99}
            tag={12983}
            time={60}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Exclusive NFT"
            title="Star Wars Soldier"
            price={3.95}
            tag="105"
            time={60}
          />
        </div>
      </div>
    </div>
  );
}
