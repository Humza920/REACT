import React from "react";
import { useState } from "react";
import {
  addDailyWork,
  removeDailyWork,
  updateDailyWork,
} from "./Reducers/dailyworkslice";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const dailyWork = useSelector((state) => state.dailyWork);

  const handleadd = (e) => {
    e.preventDefault();
    dispatch(addDailyWork(input));
    setInput("");
  };

  const handleRemove = (id) => {
    dispatch(removeDailyWork(id));
  };

  const handleUpdate = (todo) => {
    dispatch(updateDailyWork({
      id: todo.id,
      title: prompt("Enter new title", todo.title),
    }));
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="ENTER TODO"
      />
      <button onClick={handleadd}>ADD</button>

      {dailyWork.map((todo) => {
        return (
          <div
            key={todo.id}
            className="flex justify-between my-4 p-4 bg-slate-600 items-center rounded-xl text-white"
          >
            <p>{todo.title}</p>

            <button
              className="bg-amber-900"
              onClick={() => {
                handleRemove(todo.id);
              }}
            >
              REMOVE
            </button>
            <button
              className="bg-amber-900"
              onClick={() => {
                handleUpdate(todo);
              }}
            >
              UPDATE
            </button>
          </div>
        );
      })}
    </>
  );
};

export default App;
