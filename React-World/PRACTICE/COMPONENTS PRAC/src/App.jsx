// import React , {useState} from 'react'
// import './App.css'
// const App = () => {

//   const [count , setcount] = useState(0)

// function add () {
//   setcount(count + 1)
// }

// function subtract () {a na karo — useState hook ki itni gehri detail batata hoon ke samajh ke dil garden ga
//   if (count > 0) {
  
//   setcount(count - 1)
//   }
//   else{
//     count
//   }
// }

//   return (
//     <>
//     <div>
//     <button onClick={add}>+</button>
//     {count}
//     <button onClick={subtract}>-</button>
//     </div>
//     </>
//   )
// }

// export default App




import React from 'react'

const App = () => {
  const [loader, setloader] = React.useState(null);
  const [data, setdata] = React.useState(null);




  return (
    <div>


    </div>
  )
}

export 


const [count, setCount] = React.useState([])


const useeffe = React.useEffect(() => {
  

  const [name, setName] = useState("Ali"); // ✅ primitive

  const [user, setUser] = useState({ name: "Ali", age: 22 }); // ✅ object  return () => {
    
  }
}, [])




// YE 
//
const [count, setCount] = React.useState([]); 
//  APPROACH FUNCTION KA KEY WORD BNA KAR HAI

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