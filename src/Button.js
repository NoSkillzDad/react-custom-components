import React from "react";

const Button = ( { buttonText, disabled } ) => {

    function handleClick() {
        console.log(`You pressed ${buttonText}.`)
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