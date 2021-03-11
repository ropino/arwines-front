import React from "react";
import { Link } from "react-router-dom";
import imagenes from "../assets/media/imagenes";
import style from "../styles/Products.module.css";
export default () => {
  return (
    <div>
      <div className={style.barra}></div>
      <div className={style.titulo}>
        <h1>VINOS</h1>
      </div>
      <div className={style.centrado}>
        <div className={style.wrapper}>
          {imagenes.map((imagen) => (
            <div>
              <Link to={`/products/${imagen.id}`} className={style.style}>
                <div key={imagen.id} className="col-xs-4">
                  <img src={imagen.Imagen} />
                  <div className={style.centrado}>
                    <div>
                      <p> {imagen.Marca} </p>
                      <p>Año: {imagen.Año} </p>
                      <p>Precio: {imagen.Precio} </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

