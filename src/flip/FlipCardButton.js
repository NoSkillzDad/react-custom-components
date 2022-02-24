import React from "react";
import './FlipCard.css';
import './FlipCardButton.css';
import FlipCard from "./FlipCard.js";

const FlipCardClick = ({
                           title_front, text_front, image_front, altText_front,
                           title_back, text_back, image_back, altText_back,
                           button_front_text, button_front_disabled,
                           button_back_text, button_back_disabled
                       }) => {

    return (
        <div className="flip-card-button">
            <FlipCard
                title_front={title_front}
                text_front={text_front}
                title_back={title_back}
                text_back={text_back}
                image_front={image_front}
                altText_front={altText_front}
                image_back={image_back}
                altText_back={altText_back}
                button_front_text={button_front_text}
                button_back_text={button_back_text}
                button_front_disabled={button_front_disabled}
                button_back_disabled={button_back_disabled}
            />
        </div>
    )
}

export default FlipCardClick;