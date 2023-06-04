import "./App.css";
import Divider from "./assets/images/pattern-divider-desktop.svg";
import button from "./assets/images/icon-dice.svg";

function App() {
  


  return (
    <>
      <div className="wrapper">
        <h3 id="advice-title">Advice #117</h3>
        <p>
          {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."`}
        </p>
        <img className="divider" src={Divider} alt="" />
      </div>
      <div className="button-container">
        <button id="button">
          <img className="advice-button" src={button} alt="" />
        </button>
      </div>
    </>
  );
}

export default App;
