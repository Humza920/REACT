import React, { useState } from "react";

const Appp = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  return (
    <>
      <h1 style={{ textAlign: "center" }}>STEP 1</h1>
      <form style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: "25px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <label htmlFor="name">YOUR NAME</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="Enter your name"
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <label htmlFor="age">YOUR AGE</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => {
                setage(e.target.value);
              }}
              placeholder="Enter your age"
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (name==="" || age==="") {
                alert("plz fill in a field")
              } else {
                let info = {
                    name:name,
                    age:age
                }
                console.log(info);
                setname("")
                setage("")
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Appp;
