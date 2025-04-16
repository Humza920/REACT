// import React , {useState} from 'react'
// import './App.css'
// const App = () => {

//   const [count , setcount] = useState(0)

// function add () {
//   setcount(count + 1)
// }

// function subtract () {
//   if (count > 0) {
//   
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


// YE APPROACH FUNCTION KA KEY WORD BNA KAR HAI

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

import React from 'react'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Home from "./Pages/HOME/Home.jsx"
import About from "./Pages/ABOUT/About.jsx"
import Services from "./Pages/SERVICES/Service.jsx"


const App = () => {
  const routing = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/services",
      element:<Services />
    }
  ])
  return <RouterProvider router={routing} />
}

export default App