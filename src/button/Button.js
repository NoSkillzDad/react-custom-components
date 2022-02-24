import React from "react";
import './Button.css';

const Button = ( { buttonText, disabled, class_flip } ) => {

    function handleClick() {
        // document.querySelector('.flip-card-button').addEventListener('click', function () {
        document.querySelector('.flip-card-button .flip-card-inner').classList.toggle('flipped');
        // });
        // console.log(`You flipped me!`)
    }

    return (
        <button
            disabled={ disabled }
            type={"submit"}
            onClick={handleClick}
        >{ buttonText }</button>
    )
}

export default Button;