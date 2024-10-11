// function App() {

//   return (
//     <>
//     <h1>HONDA CIVIC</h1>
//     </>
//   )
// }



// export default App
import React, { useState } from 'react'

 const App = () => {
let [counter , setcounter] = useState(15)

const edit = () =>  {
  setcounter  (counter + 1)
  console.log(counter);
  if (counter>=20) {
    alert("Too long")
    setcounter(counter=20)
  } else {
    counter
  }
  
}

const remove = () => {
  setcounter (counter-1) 
  console.log(counter);
  if (counter<=1 ) {
    alert("negative")
    setcounter(counter=0)
  } else {
    counter
  }
}
  return (
    <>
<h1>Counter {counter}</h1>
<button onClick={edit}>Edit</button>
<button onClick={remove}>Delete</button>
    </>
)
  
}

export default App