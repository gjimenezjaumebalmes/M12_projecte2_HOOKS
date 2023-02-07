import "./Style/style.css";
import { useState } from "react";
import { ComponentResultat, Button } from "./Components/Boto";

function App() {
  //setAge és modificada i, per tant, el valor de useState s’actualitza i obliga a renderitzar App.js.
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
        {/* btn, truca a la funció i li suma una unitat a la variable age, modificant el valor de setAge */}
        <Button funcio={sumNumber} name="Increase" />
        <Button funcio={restNumber} name="Decrease" />
        <Button funcio={resetNumber} name="Reset" />
      </div>
      <ComponentResultat number={number} />
    </div>
  );
}
export default App;
