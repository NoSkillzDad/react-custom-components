import React from "react";
import './FlipCard.css';
import './FlipCardButton.css';
import FlipCard from "./FlipCard.js";

const FlipCardClick = ({   id,
                           title_front, text_front, image_front, altText_front,
                           title_back, text_back, image_back, altText_back,
                           button_front_text, button_front_disabled,
                           button_back_text, button_back_disabled, children
                       }) => {

    const newId = id + ` flip-card-button`;

    return (
        // <div className="flip-card-button">
        <div className={newId}>
            <FlipCard
                id={id}
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
            >
                {children}
            </FlipCard>


        </div>
    )
}

export default FlipCardClick;