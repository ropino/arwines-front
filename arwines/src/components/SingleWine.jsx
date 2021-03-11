import React from "react";
import imagenes from "../assets/media/imagenes"
import style from "../styles/SingleProducts.module.css"



console.log("estamos en single")
export default function SingleProducts() {
  return (
    <div className={style.barra}>
    <p>BARRA</p>
  
   
    <div className={style.unico} >
       <img src={imagenes[0].Imagen} />
       <h3>{imagenes[0].Marca}</h3>
      <h3>Año: {imagenes[0].Año}</h3>
      <h3>Variedad de la Uva: {imagenes[0].Uva}</h3>
      <h3>Precio: {imagenes[0].Precio}</h3>
      <div>
      <a href="javascript:history.back()"> Volver Atrás</a>
      </div>
    </div>
    </div>
  );
}
