import React from "react";
import './FlipCard.css';
import './FlipCardButton.css';
import './FlipCardClick.css';
import './FlipCardHover.css'
import './Slider.css';
import './FButton.css';
// import FlipCard from "./FlipCard.js";
// import FButton from "./button/FButton";

const FButton = ({ buttonText, disabled, id } ) => {

    id = "." + id;

    function handleClick() {
        // document.querySelector('.flip-orig-card-button').addEventListener('click', function () {
        // document.querySelector(`.flip-orig-card-button .flip-orig-card-inner` ).classList.toggle('flipped');
        document.querySelector(`${id} .flip-card-inner`).classList.toggle('flipped');
        // });
    }

    return (
        <button
            disabled={ disabled }
            type={"submit"}
            onClick={handleClick}
        >{ buttonText }</button>
    )
}

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

export const FlipCardButton = ({   id,
                           title_front, text_front, image_front, altText_front,
                           title_back, text_back, image_back, altText_back,
                           button_front_text, button_front_disabled,
                           button_back_text, button_back_disabled, children
                       }) => {

    const newId = id + ` flip-card-button`;

    return (
        // <div className="flip-orig-card-button">
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

export const FlipCardClick = ({   id,
                           title_front, text_front, image_front, altText_front,
                           title_back, text_back, image_back, altText_back, children
                           // button_front_text, button_front_disabled,
                           // button_back_text, button_back_disabled
                       }) => {

    const newId = id + ` flip-card-click`;

    function handleClick() {

        let nId = "." + id;

        // document.querySelector('.flip-orig-card').addEventListener('click', function () {
        // document.querySelector('.flip-orig-card-click .flip-orig-card-inner').classList.toggle('flipped');
        document.querySelector(`${nId} .flip-card-inner`).classList.toggle('flipped');
        // });
        // console.log(`You flipped me!`)
    }

    return (
        <div className={newId} onClick={ handleClick }>
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

export const FlipCardHover = ({   id,
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

export const Slider = ( {id, children} ) => {

    // const newId = id + ` flip-orig-card-button`;

    return (
        <div className={"mySlider"} id={id}>
            {children}
        </div>

    )
}
