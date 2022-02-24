import React from "react";

const Button = ( { buttonText, disabled } ) => {

    function handleClick() {
        // document.querySelector('.flip-card').addEventListener('click', function () {
        document.querySelector('.flip-card-inner').classList.toggle('flipped');
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