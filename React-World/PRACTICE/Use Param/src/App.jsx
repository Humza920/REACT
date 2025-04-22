import React from 'react'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Home from "./Pages/HOME/Home.jsx"
import About from "./Pages/ABOUT/About.jsx"
import Services from "./Pages/SERVICES/Service.jsx"
import Dashbored from "./Pages/DASHBORED/dashbored.jsx"
import Order from "./Pages/DASHBORED/order.jsx"
import Views from "./Pages/DASHBORED/views.jsx"
import Tansaction from "./Pages/DASHBORED/transaction.jsx"


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
    },
    {
      path:"*",
      element:<div>404 Not Found</div>
    },
    {
      path:"/services/:id",
      element:<Services />
    },
    {
      path:"dashbored",
      element:<Dashbored />,
      children:[
        {
          path:"order",
          element:<Order />
        },
        {
          path:"transaction",
          element:<Tansaction />
        },
        {
          path:"views",
          element:<Views />
        }
      ]
    }
  ])
  return <RouterProvider router={routing} />
}

export default App











// import React , {useEffect , useState} from 'react'

// const App = () => {
//   let [count , setCount] = useState(0)
//   let [type ,settype] = useState("hello")
  
//     useEffect(() => {
//       settype (type + "e")
//       alert(type)
      
//     } , [count])

//       return (
//         <>
//     <div>{type}</div>
//     <div>
//       <button type="button" onClick={()=>{setCount(count + 1)}}>ADD</button>
//       {count}
//       <button type="button" onClick={()=>{setCount(count - 1)}}>REMOVE</button>
//     </div>
//     </>
//   )
// }


// export default App