import { useState } from "react";
import React, { Component }  from 'react';

const Button = () => {
    return (
        <div className="App">
            <button onClick={() => {
                setColorText(colorText === 'green' ? 'red':'green')
            }}>Canvi</button>
            <h1 style={{color: colorText}}>CANVI DE COLOR</h1>
        </div>
    );
}

export default Button;