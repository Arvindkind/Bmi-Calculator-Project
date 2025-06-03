import "src/App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [msg, setMsg] = useState("");

  const calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter you Height and Weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMsg("You are under weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMsg("You are nice");
      } else {
        setMsg("You are over weight");
      }
    }
  };

  const relode = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="container">
        <form onSubmit={calBmi}>
          <div className="weight">
            <label htmlFor="weight">Weight (ibl)</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="height">
            <label htmlFor="height"> Height (IN)</label>
            <input
              type="number"
              id="height"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Submit
            </button>
            <button className="btn" type="submit" onClick={relode}>
              Relode
            </button>
          </div>
          <div className="mag">
            <h3>Your Bmi : {bmi}</h3>
            <p>{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
