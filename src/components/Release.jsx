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
            -En esta Fase del Proyecto Crearemos como Primera Coleccion 250 NFT y luego lanzaremos en un lapso de 3 meses otros 250 NFT, Esto para ver el comportamiento y aceptacion de nuestros coleccionistas.
            Si el Promedio de ventas de la Primera Coleccion y Segunda son del mas del 50% seguiremos con las demas Fases del Proyecto.
          </p>
          <p className="description">
            -En Esta Fase luego de Completar Dichas Ventas Nuestros Compradores Recibiran  Recompesas Unicas de la Coleccion como lo Serian Camisas,Gorras,Medias e Inclusive Vasos y Botellas como Regalia.
            Todas estos Articulos seran una de la Regalia al optener de la Coleccion las Cuales seran Unicas por que Seran Creadas por cada Compra de NFT y Ademas Vendran con Otra Regalia Digital que Se estara Publicando Luego de Vender los NFTs en Esta Pagina Oficial.
          </p>
          <p className="description">
            -En Esta Fase como Final las Regalias y Ventajas a Optener como Comprador de NFTs Exclusivos son mas Interesantes ya que no solo resivieran las Regalias Mensionadas anteriormente sino Tambien otro NFT Unico y solo Creado para Esta Coleccion Exclusiva el cual Traera  un Codigo Interno como pase
            a una subasta que se abrira en OpenSea el cual sera unos NFTs de cantidad muy Reducida los cuales se Venderan como Pases de Inversiones que se explicaran en la Segunda Fase. 

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
            -En esta Fase del Proyecto Queremos Abarcar las Inversiones, Como lo haremos?.
            Bueno En este caso Nosostros Como Compañia Nueva en el mercado Queremos Crear Cosas Que Beneficien tanto a Nuestros Compradores como al Desarrollo de la Empresa,
            Por eso la Mayoria del Capital Sera Invertidada a la Empresa, En Esta Segunda Fase vamos a crer NFTs con Acciones las cuales Sera muy Reducidas pero con Buen Margen de Ganacia.
            Ya que al Adquirir esta Accion NFTs sera Crear y Desarrollar en la compania un proyecto Fisico por ejemplo: Crear un Establecimiento Fisico de Comidas con Tematicas Relacionadas a la NFTs asi como metodos de pagos en Bitcon y Critomonedas.
            Todo esto Sera Planificado y avarcado en la  Compañia como los Accionitas que Adquirieron los NFTs de Este Tipo, Ademas Esto llevara un Documento legal y Firmado como sociadad, Donde ira Establecido el Pais donde se Creara dicha Inversion y se Firmaran las Ganacias con los Plazos de Años que Optendra por Esta Accion,
            Recuperando lo Invertido y Opteniedo una Ganacia.
          </p>
          <p className="description">
          -El Documento Legal Llevara el Respaldo con la leyes de acuerdo a pais donde se invertira y los Accionistas tendran que firmar el documento una vez  se compruebe el NFTs en nuestra pagina que sera desarrollada en la fase (1), ya que estos NFTs traeran un Metadato unico con ciertas caracteristias que  se validaran en dicha pagina y a su vez nos pondremos en contacto para formalizar esta inversion con el documento legal, donde se Empezara?, Se Publicara por este medio el dia de que suban los NFTs el Pais Natal de los Desarrolasdores asi como quines estan detras del Proyecto .
            Los Accionistas Sera Parte de todo el Proceso y Veran Cada Parte de Desarrollo del Proyecto, La Idea es Empezar en el Pais Natal de los Desarroladores del Proyecto NFTs y si todo sale como lo Planeado Expandirnos Dentro y Fuera del Pais. 
          </p>
          <p className="description">
            -Todo Esto Realizado en la Fase 1 y Fase 2 Demostrara Que los NFts Tiene un Alcanse Largo y Que esta en su Desarrollo, Ademas de demostrar que la compania tiene una gran vision a futuro. 

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
            -Esta Fase del Proyecto esta en proceso ya que se tomaran varias ideas tanto de los Desarroladores como los inversionistas del Proyecto, Se Crearan entre tres a cuatro ideas las cuales se Publicaran con todos los detalles bien planteados
            ademas la idea que llegue a quedar es la continuida de difentes fases que llevara la Empresa, esto sera bajo la calificacion en la pagina para ver las diferentes reacciones para evaluar cual sera la que se Desarrollara.
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
