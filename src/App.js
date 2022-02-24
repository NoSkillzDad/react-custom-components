import logo from './logo.svg';
import './App.css';
// import './FlipCard.css'
// import './FlipCardClick.css'
import './flip/FlipCardButton.css'
// import FlipCard from "./FlipCard";
// import FlipCardClick from "./FlipCardClick";
import FlipCardButton from "./flip/FlipCardButton.js";

function App() {
    return (
        <div className="App">
           {/*<FlipCard />*/}
           {/*<FlipCardClick />*/}
           <FlipCardButton
               buttonTextFront={"Flip me"}
               buttonTextBack={"Flip me again"}
           />
        </div>
    );
}

export default App;
