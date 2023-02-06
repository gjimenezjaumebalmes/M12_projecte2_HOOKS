import { useState } from "react";

export const Prueba = () => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  return (
    <>
      {/*Con un estado adicional le dicen cuando mostrarse o no*/}
      <button onClick={() => setMostrarComponente(!mostrarComponente)}>
        {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
        {mostrarComponente ? `Show/Hide` : `Show/Hide`}
      </button>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && <h1>El text es mostra</h1>}
      </div>
    </>
  );
};
