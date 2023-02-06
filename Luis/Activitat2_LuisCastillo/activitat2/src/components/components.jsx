import React, { useState } from "react";

//Parte a del ejercicio 2
export function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Augmentar edat</button>
      <p>{count}</p>
    </div>
  );
}

//Parte b del ejercicio2
export function Button1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p> {count}</p>
    </div>
  );
}

/*
Ejemplo de la funcion para el apartado a
 export function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
*/
