import './App.css';
import {FlipCardButton, FlipCardHover, FlipCardClick, Slider} from "./lib/components/Flipslip";

function App() {
    return (
        <div className="App">
            {/*FlipCards*/}
            <>
                <FlipCardHover
                    id={"fc0"}
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

                <FlipCardButton
                    id={"fc3"}
                    text_front={["this is the front text"]}
                    title_back={"John Doe"}
                    text_back={["Architecht", "Programmer"]}
                    button_front_text={"Flip front"}
                    button_back_text={"Flip back"}
                    // button_back_disabled={true}
                />

                <FlipCardHover
                    id={"fc11"}
                    // title_front={"Title"}
                    text_front={[]}
                    title_back={"Text back deleted"}
                    // text_back={["Architecht", "Programmer"]}
                    text_back={[]}
                >
                    <p>This is a custom section</p>
                </FlipCardHover>
            </>

            {/*SlideCards*/}
            <>
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
            </>

        </div>
    );
}

export default App;
