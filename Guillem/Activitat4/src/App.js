import {useRef, useState} from "react"
import Button from "./Button";

function App() {

    const [colorText, setColorText] = useState('green');

    return(
        <div align="center" className="App">
            <Button></Button>
            <h1 style={{color: colorText}}>CANVI DE COLOR</h1>
        </div>
      );
}

export default App