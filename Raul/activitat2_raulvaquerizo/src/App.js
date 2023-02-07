import './App.css';
import { useState } from "react";


function App() {
  var [num, setNum] = useState(1);

  const increaseNum = () =>{
    setNum(num + 1);
  }

  const decreaseNum = () =>{
    setNum(num - 1);
  }

  const resetNum = () =>{
    setNum(num = 0);
  }

  return (
    <div className="App">
     <button onClick={increaseNum}>Augmentar Numero</button>
     <button onClick={decreaseNum}>Disminuir Numero</button>
     <button onClick={resetNum}>reset Numero</button>
     <br></br>
     {num}
    </div>
  );
}

export default App;
