import { useState } from "react";
import React, { Component }  from 'react';

export const Canvi= () => {

  const [colorText, setColorText] = useState('green');

  return (
    <div className="App">
      <button onClick={() => {
        setColorText(colorText === 'green' ? 'red':'green')
      }}>Canvi</button>
      <h1 style={{color: colorText}}>CANVI DE COLOR</h1>
    </div>
  );
}
