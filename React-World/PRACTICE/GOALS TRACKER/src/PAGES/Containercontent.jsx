import React from "react";
import { useState } from "react";
import { Checkbox } from "../components/ui/checkbox";
let count = 0;
const Containercontent = () => {
  const [goals, setgoals] = useState([]);
  const [inputValue, setInputValue] = useState("");
  // const [isChecked, setIsChecked] = useState(null);
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function toggle (val , goal){
    
    if (val === true ) {
      goal.isdone = true
      console.log(goal);
      setgoals([...goals])
      
    } else {
      goal.isdone = false
      console.log(goal);
      setgoals([...goals])
          
    }
  }

  function addGoals() {
    if (inputValue.trim() === "") return; // optional: empty input prevent
    setgoals([...goals, { goal: inputValue, id: count , isdone: false}]);
    setInputValue("");
    count++;
  }

  return (
    <>
      <div className="flex justify-center items-center h-[90vh]">
        <div id="content" className="max-w-3xl mx-auto p-6">
          <div id="header" className="flex justify-between">
            <h1 className="text-4xl font-bold mb-2 text-gray-800">
              GOAL TRACKER
            </h1>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-1 text-gray-600">
                Track your goals and stay motivated!
              </h2>
              <p className="text-gray-500">
                Set your goals, track your progress, and achieve success with
                our easy-to-use goal tracker.
              </p>
            </div>
          </div>

          <div id="inputnbuttonsec" className="flex gap-3 mb-8 mt-5">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add your today goals"
              className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              onClick={addGoals}
              className="bg-blue-600 text-white rounded-md px-5 py-2 hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              ADD GOAL
            </button>
          </div>

          <div id="goalsection">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Today's Goals
            </h2>

            {goals.length === 0 && (
              <p className="text-gray-400 italic">
                No goals added yet. Add your first goal above!
              </p>
            )}

            {goals.map((goal, index) => {
              return (
                <div
                  style={{ gap: "30px" }}
                  key={goal.id}
                  className="flex justify-between items-center mb-4 p-3 border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="flex-grow text-gray-800 text-lg" style={{ textDecoration: goal.isdone ? "line-through" : "none"}} >{goal.goal}</p>

                  <button
                    className="bg-red-700 text-white rounded-md px-4 py-2 hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    id={index}
                    onClick={() => {
                      const afterdeletegoal = goals.filter(
                        (_, i) => i !== index
                      );
                      setgoals(afterdeletegoal);
                    }}
                  >
                    DELETE
                  </button>

                  <button
                    type="button"
                    className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors duration-300 shadow-md"
                    onClick={() => {
                      for (const update of goals) {
                        if (update.id === goal.id) {
                          update.goal = prompt("Update your goal", update.goal);
                          setgoals([...goals]);
                          break;
                        }
                      }
                    }}
                  >
                    UPDATE
                  </button>

                  <p className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-md shadow-sm hover:bg-green-200 transition-colors duration-300 select-none cursor-default">
                    DONE{" "}
                    <Checkbox
                      onclickchange={(val) => {
                        // setIsChecked(val);
                        console.log(val);
                        toggle(val , goal)
                      }}
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Containercontent;
