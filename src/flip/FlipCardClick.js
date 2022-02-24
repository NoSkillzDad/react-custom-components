import React from "react";

const FlipCardClick = ( { buttonText, disabled } ) => {

    function handleClick() {
        // document.querySelector('.flip-card').addEventListener('click', function () {
            document.querySelector('.flip-card-inner').classList.toggle('flipped');
        // });
        // console.log(`You flipped me!`)
    }

    return (
        <div className="flip-card" onClick={handleClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p>This is the front side of my click card</p>
                </div>
                <div className="flip-card-back">
                    <h1>Jane Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCardClick;