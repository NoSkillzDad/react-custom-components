# Flip React Components (Cards)

## Components

### FlipCardHover

Flips the card (div) on hover

### FlipCardClick

Flips the card (div) on click (anywhere inside the component)

### FlipCardButton

Flips the card (div) when clicking button

## Properties

id = Unique identifier. Will be added to the className. Must be defined for FlipCardClick and FlipCardButton

title_front = `<h1>` header for the front side of the card 

text_front = `<p>` Array of text for the front side of the card. Each element is a different <p> element. 

title_back = `<h1>` header for the back side of the card

text_back = `<p>` Array of text for the back side of the card. Each element is a different <p> element.

image_front = url reference for image to be used (front side). Should be used on its own (no title/text)

altText_front = alt property of an image (front card)

image_back = url reference for image to be used (back side). Should be used on its own (no title/text)

altText_back = alt property of an image (back card)

button_front_text = text for the front text button

button_back_text = text for the back text button

button_front_disabled = disables the front button (card won't flip) 

button_back_disabled = disables the back button (card won't flip back)

## Usage Example

### FlipCardHover

```
<FlipCardHover
id={"fc0"}
        text_front={["this is the front text"]}
        title_back={"John Doe"}
        text_back={["Architecht", "Programmer"]}
/>
```

### FlipCardClick

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