import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ButtonMaker from "./buttonMaker"

function App (props){

    return (
        <div>
            <div>Welcome to the App</div>
            <br>
            </br>
            <br>
            </br>
            <ButtonMaker buttonName={"button1"}/>
        </div>
    )
}

export default App;
