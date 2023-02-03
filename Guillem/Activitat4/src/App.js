import React, { useState } from "react";

export default function App() {
    const [colorText, setColorText] = useState('green');
    return (
        <div align="center" className="App">
            <button onClick={() => {
                setColorText(colorText === 'green'? 'red':'green')
            }}>Canvi
            </button>
            <h1 style={{color: colorText}}>CANVI DE COLOR</h1>
        </div>
    );
}