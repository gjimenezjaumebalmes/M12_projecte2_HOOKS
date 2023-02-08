import { Button, Result } from "./components/components.jsx";
import { useState } from "react";
import "./Styles/style.css";

function App() {
  const [showText, setShowText] = useState("show");

 const ShowHide = () => {
    setShowText(showText === "show" ? null : "show");
  };

  return (
    <div className="App">

      <Button const={ShowHide} name="Show/Hide" />
      <Result colors={ShowHide} text="El text es mostra" />

    </div>
  );
}

export default App;




 

