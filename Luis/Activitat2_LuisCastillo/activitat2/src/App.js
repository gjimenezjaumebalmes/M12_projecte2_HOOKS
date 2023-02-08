import { Button, Result, Text } from "./components/components.jsx";
import { useState } from "react";
import "./Styles/style.css";

function App() {

  const [edad, setedadt] = useState(0);

  const SumEdat = () => {
    setedadt(edad + 1);
  };

  const [number, setNumber] = useState(0);
  const sumNumber = () => {
    setNumber(number + 1);
  };
  const restNumber = () => {
    setNumber(number - 1);
  };
  const resetNumber = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <div>
        <Text text="Boton 1" />
        <Button funcio={SumEdat} name="Augmentar edadt" />
        <Result number={edad} />
      </div>

      <div>
        <Text text="Boton 2" />
        <Button funcio={sumNumber} name="Increase" />
        <Button funcio={restNumber} name="Decrease" />
        <Button funcio={resetNumber} name="Reset" />
      </div>
      <Result number={number} />
    </div>
  );
}

export default App;
