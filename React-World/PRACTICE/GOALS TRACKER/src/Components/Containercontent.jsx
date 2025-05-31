import React from "react";
import { useState } from "react";

let count = 0;
const Containercontent = () => {
  const [goals, setgoals] = useState([]);
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  function addGoals() {
    // setgoals([...goals, inputValue]);
    setgoals([...goals , {goal: inputValue,id: count}]);
    setInputValue("");
    count++;
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
                  <li key={goal.id}>{goal.goal}</li>
                  <button
                    id={index}
                    onClick={(e) => {
                      const afterdeletegoal = goals.filter((x , i) => {
                        console.log(i);
                        console.log(index !== i);

                        return index !== i;
                      });
                      console.log(afterdeletegoal);

                      return setgoals(afterdeletegoal);
                    }}
                  >
                    DELETE-ME
                  </button>

                  <button type="button" onClick={()=>{
                    console.log(goal.id);
                    if (true) {
                      for (const update of goals) {
                        if (update.id === goal.id) {
                          console.log(update.id);
                          update.goal = prompt("Update your goal", update.goal);
                          setgoals([...goals]);
                          break;
                        }
                      }
                      
                    }
                  }}>CHANGE ME</button>
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
