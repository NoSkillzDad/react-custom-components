import React from "react";
import Button from "../button/Button";
import '../button/Button.css';

const FlipCardClick = ({buttonTextFront, buttonTextBack, disabled}) => {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p>This is the front side of my click card</p>
                    <Button
                        buttonText={buttonTextFront}
                    />
                </div>
                <div className="flip-card-back">
                    <h1>Jane Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                    <Button
                        buttonText={buttonTextBack}
                    />
                </div>
            </div>
        </div>
    )
}

export default FlipCardClick;