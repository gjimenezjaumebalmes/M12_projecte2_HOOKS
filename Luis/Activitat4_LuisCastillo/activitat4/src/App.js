import { Button, Result } from "./Components/components.jsx";
import { useState } from "react";
import "./Styles/style.css";

function App() {
  const [colorText, setColorText] = useState("green");

  const ChangeColor = () => {
    setColorText(colorText === "green" ? "purple" : "green");
  };
  return (
    <div className="App">
      <Button const={ChangeColor} name="CHANGE COLOR" />
      <Result colors={colorText} text="CANVI DE COLOR" />
    </div>
  );
}

export default App;
