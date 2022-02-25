import './App.css';
// import './flip/FlipCardHover.css';
// import './flip/FlipCardClick.css';
// import './flip/FlipCardButton.css';
import FlipCardHover from "./flip/FlipCardHover.js";
import FlipCardClick from "./flip/FlipCardClick.js";
import FlipCardButton from "./flip/FlipCardButton.js";
import FlipCard from "./flip/FlipCard";

function App() {
    return (
        <div className="App">

            <FlipCardHover
                id={"fc0"}
                text_front={["this is the front text"]}
                title_back={"John Doe"}
                text_back={["Architecht", "Programmer"]}
            />

            <FlipCardHover
                id={"fc10"}
                text_front={["this is the front text"]}
                title_back={"John Doe"}
                text_back={["Architecht", "Programmer"]}
            />

            <FlipCardClick
                id={"fc1"}
                text_front={["this is the front text - click"]}
                title_back={"John Doe"}
                text_back={["Architecht", "Programmer"]}
            />
            <FlipCardClick
                id={"fc2"}
                text_front={["this is the front text - click"]}
                title_back={"John Doe"}
                text_back={["Architecht", "Programmer"]}
            />

            <FlipCardButton
                id={"fc3"}
                text_front={["this is the front text"]}
                title_back={"John Doe"}
                text_back={["Architecht", "Programmer"]}
                button_front_text={"Flip front"}
                button_back_text={"Flip back"}
                // button_back_disabled={true}
            />

            <FlipCardButton
                id={"fc4"}
                text_front={["this is the front text"]}
                title_back={"John Doe"}
                text_back={["Architecht", "Programmer"]}
                button_front_text={"Flip front"}
                button_back_text={"Flip back"}
                // button_back_disabled={true}
            />
        </div>
    );
}

export default App;
