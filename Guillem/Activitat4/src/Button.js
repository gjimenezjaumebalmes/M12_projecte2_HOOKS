import React from 'react';

const Button = () => {
    return(
        <button onClick={() => {
            setColorText(colorText == 'green' ? 'red' : 'green')
        }}>Canvi
        </button>
    );
}
export default Button;