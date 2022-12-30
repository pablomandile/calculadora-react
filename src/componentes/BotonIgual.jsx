import React from "react";
import '../css/Boton.css';

function BotonIgual(props) {
  return (
    <div className={`boton-contenedor doble`.trimEnd()}
      onClick={() => props.manejarClick(props.children)} >
      {props.children}
    </div>
  );
}

export default BotonIgual;