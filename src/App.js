import './App.css';
// import './flip/FlipCardHover.css';
// import './flip/FlipCardClick.css';
// import './flip/FlipCardButton.css';
import FlipCardHover from "./flip/FlipCardHover.js";
import FlipCardClick from "./flip/FlipCardClick.js";
import FlipCardButton from "./flip/FlipCardButton.js";

function App() {
    return (
        <div className="App">

            <FlipCardHover
                text_front={["this is the front text"]}
                title_back={"John Doe"}
                text_back={["Architecht", "Programmer"]}
            />

            <FlipCardClick
                text_front={["this is the front text - click"]}
                title_back={"John Doe"}
                text_back={["Architecht", "Programmer"]}
            />

            {/*<FlipCardButton*/}
            {/*    text_front={["this is the front text"]}*/}
            {/*    title_back={"John Doe"}*/}
            {/*    text_back={["Architecht", "Programmer"]}*/}
            {/*    button_front_text={"Flip front"}*/}
            {/*    button_back_text={"Flip back"}*/}
            {/*    // button_back_disabled={true}*/}
            {/*/>*/}
        </div>
    );
}

export default App;
