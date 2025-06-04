import { useState } from "react";
import "./App.css";

export default function Metric() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [msg, setMsg] = useState("");
  const [gender, setGender] = useState("");

  const calBmi = (e) => {
    e.preventDefault();

    // let Ht = parseFloat(height);
    let Ht = parseFloat(height) / 100;
    let Wt = parseFloat(weight);
    // let bmi = (Wt / (Ht * Ht)) * 703;
    let bmi = Wt / (Ht * Ht);
    if (Ht === 0 || Wt === 0) {
      alert("Please enter you Height and Weight");
    } else if (isNaN(bmi)) {
      setBmi(0);
    } else {
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
    <>
      <div className="App">
        <h1>
          {" "}
          Bmi calclulator
          <span role="img" aria-label="bmi">
            🏋️‍♂️
          </span>
        </h1>
        <div className="container">
          <h2>Enter Your Metric Unit</h2>
          <form onSubmit={calBmi}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="unit"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="unit"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Female
              </label>
            </div>
            <div className="weight">
              <label htmlFor="weight">Weight (KG)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="height">
              <label htmlFor="height"> Height (CM)</label>
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
              <button className="btn" onClick={relode}>
                Relode
              </button>
            </div>
            <div className="mag">
              <h3>Your Gender : {gender}</h3>
              <h3>Your Bmi : {bmi}</h3>
              <p>{msg}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
