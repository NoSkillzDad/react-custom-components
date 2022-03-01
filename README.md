![npm (scoped)](https://img.shields.io/npm/v/@noskillzdad/flipslip)

# Flipslip React Components Library

## Install

`$ npm install flipslip`

## Use

`import {FlipCardButton, FlipCardHover, FlipCardClick, Slider} from "flipslip";`

This library include the following components:

```
<FlipCardHover />
<FlipCardClick />
<FlipCardButton />
<Slider />
```

### FlipCardHover

Flips the card (div) on hover

### FlipCardClick

Flips the card (div) on click (anywhere inside the component)

### FlipCardButton

Flips the card (div) when clicking button

### Slider

## Properties

### Flip Components

**id** = Unique identifier. Must be defined for FlipCardClick, FlipCardButton to work properly. It will be added to the `className`.

**title_front** = `<h1>` header for the front side of the card. Can be omitted.

**text_front** = `<p>` Array of text for the front side of the card. Each element is a different <p> element. Needs to be included even if left blank.

**title_back** = `<h1>` header for the back side of the card. Can be omitted.

**text_back** = `<p>` Array of text for the back side of the card. Each element is a different <p> element. Needs to be included even if left blank.

**image_front** = url reference for image to be used (front side). Should be used on its own (no title/text). Can be omitted.

**altText_front** = alt property of an image (front card). Needs to be included if `image_front` property is used.

**image_back** = url reference for image to be used (back side). Should be used on its own (no title/text). Can be omitted.

**altText_back** = alt property of an image (back card). Needs to be included if `image_front` property is used.

**button_front_text** = text for the front text button. Needs to be declared when using `FlipCardButton`.

**button_back_text** = text for the back text button Needs to be declared when using `FlipCardButton`.

**button_front_disabled** = disables the front button (card won't flip). Can be omitted. Takes `true` or `false` values. If true, the component won't "flip".

**button_back_disabled** = disables the back button (card won't flip back). Can be omitted. Takes `true` or `false` values. If true, the component won't "flip".

To add custom code (other than an image and basic text to your card) you need to place your JSX between the opening and closing tags of your component:

```
<FlipCardHover ...>
{/* Insert your custom JSX here */}
</FlipCardHover>
```

### Slider Component

**id** = Unique identifier. Must be declared for Slider to work properly. It will be added to the `id` property.


## Usage Example

### FlipCardHover

```
<FlipCardHover
id={"fc0"}
        text_front={["this is the front text"]}
        title_back={"John Doe"}
        text_back={["Architecht", "Programmer"]}
/>

<FlipCardHover
id={"myown01"}
        text_front={[]}
        title_back={"John Doe"}
        text_back={["Architecht", "Programmer"]}
/>
```

### <FlipCardClick />

```
 <FlipCardClick
        id={"fc1"}
        text_front={["this is the front text - click"]}
        title_back={"John Doe"}
        text_back={["Architecht", "Programmer"]}
 />
```

### FlipCardButton

```
<FlipCardButton
        id={"fc3"}
        text_front={["this is the front text"]}
        title_back={"John Doe"}
        text_back={["Architecht", "Programmer"]}
        button_front_text={"Flip front"}
        button_back_text={"Flip back"}
        // button_back_disabled={true}
/>
```

### Using custom content

```
 <FlipCardHover
        id={"fc11"}
        // title_front={"Title"}
        text_front={[]}
        title_back={"Text back deleted"}
        // text_back={["Architecht", "Programmer"]}
        text_back={[]}
        >
            <p>Your custom content here</p>
        </FlipCardHover>
```

### Slider

```
<Slider id={"slideset-up"}>
        <div>
            <h2>first card</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum facere nulla ratione
               repellendus.</p>
        </div>
        <div>
            <h2>second card</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum facere nulla ratione
               repellendus.</p>
        </div>
        <div>
            <h2>third card</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum facere nulla ratione
               repellendus.</p>
            </div>
</Slider>
```

## What's next?

- Add a "ZoomMe" component
- Add more control (through properties) to the Slider animation (transition speeds and time showing)

