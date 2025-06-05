import { useState } from "react";
import "./App.css";

export default function Standard() {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inch, setInch] = useState("");
  const [bmi, setBmi] = useState(0);
  const [msg, setMsg] = useState("");
  const [gender, setGender] = useState("");

  const calBmi = (e) => {
    e.preventDefault();

    // let Ht = parseFloat(height);
    // let Ht = (parseFloat(feet) * 12 + parseFloat(inch)) ;
    // let Wt = parseFloat(weight);
    let totalInches = parseFloat(feet) * 12 + parseFloat(inch);
    let bmi = (parseFloat(weight) / (totalInches * totalInches)) * 703;
    // let bmi = (Wt / (Ht * Ht)) * 703;
    // let bmi = Wt / (Ht * Ht);
    if (totalInches === 0 || weight === 0) {
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
          <h2>Enter Your Standard Unit</h2>
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
              <label htmlFor="weight">Weight (lbs)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                placeholder="Enter your weight in pounds"
              />
            </div>
            <div className="height">
              <label htmlFor="height">Height (ft/in)</label>
              <span>
                <label htmlFor="height">Feet</label>

                <select
                  id="height"
                  name="height"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                <label htmlFor="inch">Inch</label>

                <select
                  id="inch"
                  name="inch"
                  value={inch}
                  onChange={(e) => setInch(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </span>
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
              <h3>
                Your Height : {feet}.{inch}
              </h3>
              <h3>Your Bmi : {bmi}</h3>
              <p>{msg}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
