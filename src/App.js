import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ButtonMaker from "./buttonMaker"
import MultipleButtonMaker from "./multipleButtonMaker";

function App (props){
    let buttonNamesList = ["button1","button2","button3"];
    let buttonFuncsList =   null;
    return (
        <div>
            <div>Welcome to the App</div>
            <br>
            </br>
            <br>
            </br>
            <MultipleButtonMaker buttonNamesList={buttonNamesList} buttonFuncsList={buttonFuncsList}/>
        </div>
    )
}

export default App;
