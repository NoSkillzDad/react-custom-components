import React from "react";
import FButton from "./button/FButton.js";
import './button/FButton.css'
import './FlipCard.css';

const FlipCard = ({   id,
                      title_front, text_front, image_front, altText_front,
                      title_back, text_back, image_back, altText_back,
                      button_front_text, button_front_disabled,
                      button_back_text, button_back_disabled
                  }) => {

    const incButton = (button_text, id, disabled) => {
        // console.log({id});

        if (button_text) {
            return <FButton
                buttonText={button_text}
                disabled={disabled}
                id={id}
            />
        }
    }

    const cardContent = (image, altText, title, text, button_text, disabled, id) => {
        if (image) {
            return (<>
                    <img src={image} alt={altText} width={"100%"}/>
                    {incButton(button_text, id, disabled)}
                </>
            )
        } else {
            return (
                <>
                    <h2>{title}</h2>
                    {text.map(function (t) {
                        return <p>{t}</p>
                    })}
                    {incButton(button_text, id, disabled)}
                </>
            )
        }
    }

    return (

        <div className="flip-card-inner">
            <div className="flip-card-front">
                {cardContent(image_front, altText_front, title_front, text_front, button_front_text, button_front_disabled, id)}
            </div>
            <div className="flip-card-back">
                {cardContent(image_back, altText_back, title_back, text_back, button_back_text, button_back_disabled, id)}
            </div>
        </div>
    )
}

export default FlipCard;