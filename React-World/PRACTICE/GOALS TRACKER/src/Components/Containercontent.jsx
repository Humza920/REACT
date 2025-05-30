import React from "react";
import { useState } from "react";

const Containercontent = () => {
  const [goals, setgoals] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  function addGoals() {
    setgoals([...goals, inputValue]);
    setInputValue("");
  }

  return (
    <>
      <div id="content">
        <div id="header">
          <h1>GOAL TRACKER</h1>
          <div>
            <h2>Track your goals and stay motivated!</h2>
            <p>
              Set your goals, track your progress, and achieve success with our
              easy-to-use goal tracker.
            </p>
          </div>
        </div>

        <div id="inputnbuttonsec">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="ADD YOUR TODAY GOALS"
          />
          <button onClick={addGoals}>ADD GOAL</button>
        </div>

        <div id="goalsection">
          <h2>Today's Goals</h2>
          <ul>
            {goals.map((goal, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  key={index}
                >
                  <li key={index}>{goal}</li>
                  <button
                    onClick={(index) => {
                      const afterdeletegoal = goals.filter((goal, i) => {
                        console.log(i);
                        console.log(index);
                        
                        
                        console.log(index !== i);
                        
                        return index !== i;
                      });
                      console.log(afterdeletegoal);
                      
                      return setgoals(afterdeletegoal);
                    }}
                  >
                    DELETE-ME
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Containercontent;
