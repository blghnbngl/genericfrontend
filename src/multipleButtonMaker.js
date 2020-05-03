import React from 'react'
import ButtonMaker from "./buttonMaker";

const MultipleButtonMaker = (props) => {
    let buttonNames = props.buttonNamesList;
    let funcs = props.buttonFuncsList;

    return (

        <div>
                {buttonNames.map((bName) =>
                    <ButtonMaker key={bName.id} buttonName={bName} />
                )}
        </div>
    )
}

export default MultipleButtonMaker