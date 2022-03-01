import React from "react";
import '../../lib/components/FButton.css';

const FButton = ({ buttonText, disabled, id } ) => {

    id = "." + id;

    function handleClick() {
        // document.querySelector('.flip-card-button').addEventListener('click', function () {
        // document.querySelector(`.flip-card-button .flip-card-inner` ).classList.toggle('flipped');
        document.querySelector(`${id} .flip-card-inner`).classList.toggle('flipped');
        // });
    }

    return (
        <button
            disabled={ disabled }
            type={"submit"}
            onClick={handleClick}
        >{ buttonText }</button>
    )
}

export default FButton;