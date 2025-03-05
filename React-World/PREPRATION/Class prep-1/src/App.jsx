import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

function UserAge (age) {
  return(
    <>
    <h1>My age is {age}</h1>
    </>
  )
}

  return (
    <>
  <h1>Hello{count}</h1>
  <button type="button">ADD</button>
    </>
  )
}

export default App
