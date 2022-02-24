import React from "react";
import './FlipCard';
import './FlipCardClick.css';
import FlipCard from "./FlipCard";

const FlipCardClick = ({
                           title_front, text_front, image_front, altText_front,
                           title_back, text_back, image_back, altText_back
                           // button_front_text, button_front_disabled,
                           // button_back_text, button_back_disabled
                       }) => {

    function handleClick() {
        // document.querySelector('.flip-card').addEventListener('click', function () {
        document.querySelector('.flip-card-click .flip-card-inner').classList.toggle('flipped');
        // });
        // console.log(`You flipped me!`)
    }

    return (
        <div className="flip-card-click" onClick={ handleClick }>
            <FlipCard
                title_front={title_front}
                text_front={text_front}
                title_back={title_back}
                text_back={text_back}
                image_front={image_front}
                altText_front={altText_front}
                image_back={image_back}
                altText_back={altText_back}
            />
        </div>
    )
}

export default FlipCardClick;