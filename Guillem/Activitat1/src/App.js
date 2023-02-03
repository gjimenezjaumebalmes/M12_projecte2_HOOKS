import React, { useState } from "react";

export default function App() {
    const [showText, setShowText] = useState(false);
    return (
        <div align="center" className="App">
            <button onClick={() => setShowText(!showText)}>Show/Hide</button>
            {showText && <div>El text es mostra</div>}
        </div>
    );
}