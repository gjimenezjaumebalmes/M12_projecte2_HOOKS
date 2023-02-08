import { Button, Result } from "./components/components.jsx";
import { useState } from "react";
import "./Styles/style.css";

function App() {
  const [showText, setShowText] = useState("show");

 const ShowHide = () => {
    setShowText(!showText);
  };

  return (
    <div className="App">

      <Button const={ShowHide} name="Show/Hide" />
      <Result  name={showText} text="El text es mostra" />

    </div>
  );
}

export default App;


/**
 * 
 * import './App.css';
import { useState } from 'react';

function App() {

  const [estat, setEstat] = useState(true);

  const ocultamostra = () => setEstat(!estat);

  return (
    <div>
      <button onClick={ocultaensenya()}>Show/hide</button>
      {estat && <p>El text es mostra</p>}
    </div>
  );
}

export default App;
 */

 

