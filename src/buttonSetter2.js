import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App (props){
    const [ counter, setCounter ] = useState(0)

    return (
        <div>
            <div>Welcome to the App</div>
            <br>
            </br>
            <br>
            </br>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>
                plus
            </button>
            <button onClick={() => setCounter(0)}>
                zero
            </button>
        </div>
    )
}

export default App;
