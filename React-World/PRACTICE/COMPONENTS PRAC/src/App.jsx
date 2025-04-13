import React , {useState} from 'react'

const App = () => {

  const [count , setcount] = useState(0)

function add () {
  setcount(count + 1)
}

function subtract () {
  if (count > 0) {
    setcount(count - 1)
  }
  else{
    count
  }
}

  return (
    <>
    <button onClick={add}>+</button>
    {count}
    <button onClick={subtract}>+</button>
    </>
  )
}

export default App











// YE WALI APPROACH FUNCTION KA KEY WORD BNA KAR HAI

// function App() {
//   return (
//     <>
//       <h1>
//         HELLO
//       </h1>
//     </>
//   );
// }

// YE WALI APPROACH VARIABLE MAI FUNCTION STORE KARA KAR HAI

// const App = () => {
//   return (
//     <>
//     <Card name="PRODUCT-1" text = "PERFECTION IN THIS PRODUCT"/>
//     <Card name="PRODUCT-2" text = "PERFECTION"/>
//     </>
//   )
// }

// export default App;

// DONO KAI RESULTS SAME HAI 