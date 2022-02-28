import React from "react";
import './slide-styles.css';

const Slider = ( {id, children} ) => {

    // const newId = id + ` flip-card-button`;

    return (
        <div className={"mySlider"} id={id}>
            {children}
        </div>

    )
}

export default Slider;