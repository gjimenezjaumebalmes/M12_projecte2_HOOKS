import { useState } from "react";

export const ChangeColor = () => {
  const [colorText, setColorText] = useState("green");

  return (
    <>
      <button
        onClick={() => {
          setColorText(colorText === "green" ? "purple" : "green");
        }}
      >
        CHANGE COLOR
      </button>
      <h1 style={{ color: colorText }}>CANVI DE COLOR</h1>
    </>
  );
};

/*
Ejemplo de codigo proporcionado por los profes

function App() {
  const [colorText, setColorText] = useState("green");

  return (
    <div className="App">
      <button
        onClick={() => {
          setColorText(colorText == "green" ? "purple" : "green");
        }}
      >
        Canvi
      </button>
      <h1 style={{ color: colorText }}>CANVI DE COLOR</h1>
    </div>
  );
}

*/
