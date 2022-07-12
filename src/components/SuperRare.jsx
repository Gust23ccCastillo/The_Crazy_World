import React from "react";
import Card from "./Card";
import super1 from "../assets/NFT-Exclusive-3.png";
import super2 from "../assets/NFT-Exclusive-4.png";
import super3 from "../assets/NFT-Exclusive-5.png";
import super4 from "../assets/NFT-Exclusive-2.png";
import super5 from "../assets/NFT_Militar.png";
import super6 from "../assets/NFT_McDonald.png";
import super7 from "../assets/NFT_SuperVillan.png";
import super8 from "../assets/NFT_Ghost_Catcher.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Exclusive NFT",
      title: "C3-PO",
      price: 0.090,
      tag: 23,
      time: '20/08/2022',
    },
    {
      image: super2,
      series: "Exclusive NFT",
      title: "Caveman",
      price: 0.090,
      tag: 30,
      time: '20/08/2022',
    },
    {
      image: super3,
      series: "Exclusive NFT",
      title: "Red Man",
      price: 0.090,
      tag: 25,
      time: '20/08/2022',
    },
    {
      image: super4,
      series: "Exclusive NFT",
      title: "Star Wars Soldier",
      price: 0.090,
      tag: 105,
      time: '20/08/2022',
    },
  ];
  const data2 = [
    {
      image: super5,
      series: "Exclusive NFT",
      title: "Soldier",
      price: 0.090,
      tag: 23,
      time: '20/08/2022',
    },
    {
      image: super6,
      series: "Exclusive NFT",
      title: "McDonald's Employee",
      price: 0.090,
      tag: 30,
      time: '20/08/2022',
    },
    {
      image: super7,
      series: "Exclusive NFT",
      title: "SuperVillan",
      price: 0.090,
      tag: 25,
      time: '20/08/2022',
    },
    {
      image: super8,
      series: "Exclusive NFT",
      title: "Ghost Catcher",
      price: 0.090,
      tag: 105,
      time: '20/08/2022',
    },
  ];
  return (
    <div id="NFTsExlusivos" className="super-rare">
      <div className="title-container">
        <h2 className="title">NFTs Exclusivo de la Colección con Interesantes Premios!!</h2>
        <p className="description">
        Muy Pronto la Colección Estará Disponible en la Plataforma Open Sea.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>

      <div className="cards">
        {data2.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
      
    </div>
  );
}
