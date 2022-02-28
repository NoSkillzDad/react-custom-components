import React from "react";
import FlipCard from "./FlipCard";
import './FlipCardHover.css'

const FlipCardHover = ({   id,
                           title_front, text_front, image_front, altText_front,
                           title_back, text_back, image_back, altText_back, children
                       }) => {
    return (
        <div className="flip-card-hover">
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
            >
               {children}
            </FlipCard>
        </div>
    )
}

export default FlipCardHover;