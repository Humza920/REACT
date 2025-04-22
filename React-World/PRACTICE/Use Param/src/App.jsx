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
    },
    {
      path:"*",
      element:<div>404 Not Found</div>
    },
    {
      path:"/services/:id",
      element:<Services />
    }
  ])
  return <RouterProvider router={routing} />
}

export default App