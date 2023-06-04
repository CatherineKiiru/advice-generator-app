import "./App.css";
import Divider from "./assets/images/pattern-divider-desktop.svg";
import button from "./assets/images/icon-dice.svg";
import { useEffect, useState } from "react";


function App() {
 
  const [advice, setAdvice] = useState([])
  
  const fetchData = async ()  => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)
    setAdvice(data.slip)
  }

  useEffect(() => {
    fetchData
  }, [])
 
  return (
    <>
      <div className="wrapper">
        <h3 id="advice-number">Advice #{advice.id}</h3>
        <p id="advice-text">
          
          {advice.advice}
        </p>
        <img className="divider" src={Divider} alt="" />
      </div>
      <div className="button-container">
        <button onClick={fetchData} id="button">
          <img className="advice-button" src={button} alt="" />
        </button>
      </div>
    </>
  );
}

export default App;
