import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const increment = () => {
        setCount1(count1 + 1);}
    const decrement = () =>{
        setCount1(count1-1);}
    const reset = () =>{
        setCount1(0);
    }
    return (
        <div align="center" className="App">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Augmentar edat
            </button><p></p>

            <h1>{count1}</h1>

            <button className='inc' onClick={increment}>Increment!</button>
            <button className='dec' onClick={decrement}>Decrement!</button>
            <button className='reset' onClick={reset}>Reset</button>

        </div>

    );
}



export default App;
