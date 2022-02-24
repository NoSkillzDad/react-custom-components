import React from "react";
import Button from "../button/Button.js";
import '../button/Button.css'
import './FlipCard.css';

const FlipCard = ({
                      title_front, text_front, image_front, altText_front,
                      title_back, text_back, image_back, altText_back,
                      button_front_text, button_front_disabled,
                      button_back_text, button_back_disabled
                  }) => {

    const incButton = (button_text, disabled) => {
        if (button_text) {
            return <Button
                buttonText={button_text}
                disabled={disabled}
            />
        }
    }

    const cardContent = (image, altText, title, text, button_text, disabled) => {
        if (image) {
            return (<>
                    <img src={image} alt={altText}/>
                    {incButton(button_text, disabled)}
                </>
            )
        } else {
            return (
                <>
                    <h2>{title}</h2>
                    {text.map(function (t) {
                        return <p>{t}</p>
                    })}
                    {incButton(button_text, disabled)}
                </>
            )
        }
    }

    return (

        <div className="flip-card-inner">
            <div className="flip-card-front">
                {cardContent(image_front, altText_front, title_front, text_front, button_front_text, button_front_disabled)}
            </div>
            <div className="flip-card-back">
                {cardContent(image_back, altText_back, title_back, text_back, button_back_text, button_back_disabled)}
            </div>
        </div>
    )
}

export default FlipCard;