import "./App.css";
import Divider from "./assets/images/pattern-divider-desktop.svg";
import button from "./assets/images/icon-dice.svg";


function App() {
  const adviceNumber = document.getElementById("advice-number");
  const adviceText = document.getElementById("advice-text");


  function showAdvice () {
    fetch ("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) =>data.slip)
    .then((data) => {
      adviceNumber.textContent = data.id;
      adviceText.textContent = data.advice;

    })
    .catch((error) => {
      alert(`Error ${error}`);
    })
  }

  return (
    <>
      <div className="wrapper">
        <h3 id="advice-number">Advice #117</h3>
        <p id="advice-text">
          {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."`}
        </p>
        <img className="divider" src={Divider} alt="" />
      </div>
      <div className="button-container">
        <button onClick={showAdvice} id="button">
          <img className="advice-button" src={button} alt="" />
        </button>
      </div>
    </>
  );
}

export default App;
