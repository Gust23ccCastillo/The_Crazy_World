import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/NFT-Exclusive-1.png";
import release2 from "../assets/NFT-Exclusive-2.png";
import Card from "./Card";

export default function Release() {
  return (
  

    <div id="FasesProyecto"className="releases">

      
      <div className="release orange">
        <div className="content">
          <h2 className="title">Fase (1) del Proyecto</h2>
          <p className="description">
            -En esta Fase del Proyecto Crearemos como Primera Colección 250 NFTs y Luego Lanzaremos en un Lapso de 3 Meses otros 250 NFTs, Esto para ver el Comportamiento y Aceptación de Nuestros Coleccionistas.
            Esperamos Optener un Promedio de Ventas de la Primera Colección y Segunda del mas del 50%, Para Seguir Financiado las Otras Fases del Proyecto.
          </p>
          <p className="description">
            -En Esta Fase luego de Completar Dichas Ventas Nuestros Compradores Recibirán  Recompesas unicas de la Colección como lo Serían Camisas, Gorras, Medias e Inclusive Vasos y Botellas como Regalías.
            Todas estos Artículos seran una de la Regalía al Optener de la Colección las cuales seran unicas por que seran Creadas por cada Compra de NFT y Ademas Venderán con Otra Regalía Digital que se estara Publicando Luego de Vender los NFTs en Esta Página Oficial.
          </p>
          <p className="description">
            -En Esta Fase como Final las Regalías y Ventajas a Optener como Comprador de NFTs Exclusivos son mas Interesantes ya que no solo Recibirán las Regalías Mensionadas Anteriormente si no, También otro NFT Unico y solo Creado para Esta Colección Exclusiva el cual traeran su Metadato o Smart Contract el cual sera Diferente,
            ya que trae un Script para un pase a una Subasta que se Abrirá en OpenSea el cual sera unos NFTs de Cantidad muy Reducida los cuales se Venderán como Pases de Inversiones que se Explicara en la Segunda Fase. 

          </p>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>


      <div className="release green">
        <div className="content">
          <h2 className="title">Fase (2) del Proyecto</h2>
          <p className="description">
            -En esta Fase del Proyecto Queremos Abarcar las Inversiones, Como lo Haremos?.
            Bueno En este caso Nosostros Como Compañia Nueva en el mercado Queremos Crear Cosas Que Beneficien tanto a Nuestros Compradores como al Desarrollo de la Empresa,
            Por eso la Mayoria del Capital Sera Invertida a la Empresa, En Esta Segunda Fase vamos a crer NFTs con Acciones las cuales sera muy Reducidas pero con Buen Margen de Ganacia.
            Ya que al Adquirir esta Accion NFTs sera Crear y Desarrollar en la Compañia un Proyecto Físico por ejemplo: Con Estas Acciones lo que se Quiere llegar a Crear es que si se Plantea un Proyecto el que Compre la Acción Forme Parte del Proyecto Físico como un Inversor del Proyecto.
            Un Claro Ejemplo es una Cadena de Comidas donde se Valore si sera Rentable Crearla o No?, y Empezar con dicho Proyecto, El Capital que se Adquiera con ese Proyecto Físico se dara Comisiona Nuestros Accionistas Mediante un Contrato Legal, Todo esto sera Planificado y Abarcado en la Compañia como los Accionitas que Adquirieron los NFTs de Este Tipo, Ademas Esto llevara un Documento legal y Firmado como Sociadad con los Accionistas, Donde ira Establecido el Pais donde se Creará dicha Inversión y se Firmarán las Ganacias con los Plazos de Años que Optendra por Esta Acción,
            Recuperando lo Invertido y Opteniedo una Ganacia.
          </p>
          <p className="description">
          -El Documento Legal Llevará el Respaldo con la leyes de Acuerdo a pais donde se Invertirá y los Accionistas tendran que Firmar el Documento una vez  se Compruebe el NFTs y la Validez de su Comprador, Todo esto Mediante el Smart Contracts, donde se Empezara?, Se Publicara por este medio el dia de que suban los NFTs el Pais Natal de los Desarrolladores asi como Quienes estan detras del Proyecto .
            Los Accionistas Sera Parte de todo el Proceso y Veran Cada Parte de Desarrollo del Proyecto, La Idea es Empezar en el Pais Natal de los Desarroladores del Proyecto NFTs y si todo sale como lo Planeado Expandirnos Dentro y Fuera del Pais. 
          </p>
          <p className="description">
            -Todo Esto Realizado en la Fase 1 y Fase 2 Demostrara que los NFts tiene un Alcanse Largo y que esta en su Desarrollo, Ademas de demostrar que la Compañia tiene una Gran Vision a Futuro. 

          </p>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>

     

      <div className="release orange">
        <div className="content">
          
          <h2 className="title">Fase (3) del Proyecto</h2>
          <p className="description">
            -Esta Fase del Proyecto esta en proceso ya que se Tomaran varias ideas tanto de los Desarrolladores como los Inversionistas del Proyecto, Se Crearán entre tres a cuatro ideas las cuales se Publicarán con todos los Detalles bien Planteados
            ademas la idea que llegue a quedar es la continuida de difentes Fases que llevará la Empresa, esto sera bajo la Calificación en la Página para ver las Diferentes Reacciones para Evaluar cual sera la que se Desarrollará.
          </p>
          
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>

    </div>
  );
}
