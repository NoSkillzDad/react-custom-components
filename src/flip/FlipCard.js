import React from "react";
import FButton from "./button/FButton.js";
import '../lib/components/FButton.css'
import '../lib/components/FlipCard.css';

const FlipCard = ({   id, title_front, text_front, image_front, altText_front, title_back, text_back, image_back, altText_back, button_front_text, button_front_disabled, button_back_text, button_back_disabled, children}) => {

    const incButton = (button_text, id, disabled) => {

        if (button_text) {
            return <FButton
                buttonText={button_text}
                disabled={disabled}
                id={id}
            />
        }
    }

    const renderMe = (property) => {
        return (property !== undefined && property)
    }

    const renderText = (textArray) => {

        return (
            textArray.map(text => (
                    <p key={text}>{text}</p>
                ))
        );
    }

    const cardContent = (image, altText, title, text, button_text, disabled, id, child) => {

        if (image) {
            return (<>
                    <img src={image} alt={altText} width={"100%"}/>
                    {incButton(button_text, id, disabled)}
                </>
            )
        } else {
            return (
                <>
                    {renderMe(<h2>{title}</h2>)}
                    {renderText(text)}
                    {/*{text.map(function (t) {*/}
                    {/*    return <p>{t}</p>*/}
                    {/*})}*/}
                    {child}
                    {incButton(button_text, id, disabled)}
                </>
            )
        }
    }

    return (
        <div className="flip-card-inner">
            <div className="flip-card-front">
                {cardContent(image_front, altText_front, title_front, text_front, button_front_text, button_front_disabled, id, children)}
            </div>
            <div className="flip-card-back">
                {cardContent(image_back, altText_back, title_back, text_back, button_back_text, button_back_disabled, id)}
            </div>
        </div>
    )
}

export default FlipCard;