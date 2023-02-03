import React from "react";
import './App.css';

const Grupo = () => {
  return (
    <div>
      <h1>Grupo E</h1>
    </div>
  )
}

const Person = () => {
  return (
    <div>
      <h1>Guillem Jimenez</h1>
      <h1>Luis Castillo</h1>
      <h1>Raul Vaquerizo</h1>
    </div>
    );
};



const TextInfo = () => {
  return(
    <div>
      <input type="date" id="date" name="date"/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
		<label>FECHA INICIO </label>
        <input type="date" id="date" name="date"/><p></p>
        <label>FECHA FIN </label>
        <input type="date" id="date" name="date"/><p></p>
        <label>FECHA ENTREGA </label>
        <input type="date" id="date" name="date"/>
     
    </div>
  );
}

export default App;
