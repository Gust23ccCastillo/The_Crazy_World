import React from "react";
import {logo} from "../assets/logo.png";
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {BsTwitter} from "react-icons/bs";




export default function Footer() {


  return (
    <footer id="Footer">
      <div className="container">
      <a href="" className="footer__logo">The Crazy   World</a>
       <ul className="permalinks">
           <li><a href="#Inicio">Inicio</a></li>
           <li><a href="#NFTsExlusivos">NFTs Exclusivos </a></li>
           <li><a href="#FasesProyecto">Procesos Del Proyecto</a></li>
           <li><a href="#SaleInformation">Informacion de Venta</a></li>
       </ul>

      <div className="footer__socials">
        
        <a href="https://instagram.com/the_crazy_world_inc"><FiInstagram/></a>
        <a href="https://twitter.com/TheCrazyWorldI1"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; The Crazy   World, Nos Reservamos los Derechos de Admisión .</small>
      </div>
      </div>
     

    </footer>
  );
}
