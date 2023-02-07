import './App.css';
import { useState } from "react";



function App() {
  var [text, setHidden] = useState(false);

  const hideText = () =>{
    setHidden(s => !s)
  }

  return (
    <div className="App">
      <button onClick={hideText}>Show/Hide</button>
      {!text ? <p>Prueba texto</p>: null}
    </div>
  );
}

export default App;
