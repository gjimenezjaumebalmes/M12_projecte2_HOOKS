import {useRef, useState} from "react"
import Button from "./Button";
import './App.css';

function App() {
    const [colorText, setColorText] = useState('green');
    return (
        <div className="App">
            <Button></Button>
        </div>
    );
}
export default App;
