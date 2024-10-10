import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

function Car() {
  return(
  <>
  <h1>HONDA </h1>
  </>
  )
}

const variable1 =(
<h1><a href="https://github.com/Humza920" target='blank'>Humza 920</a></h1>
)

const reactElement = React.createElement(
  "a",
  {href: "https://github.com/Humza920", target: "blank"},
  "Humza 920"
) 

createRoot(document.getElementById('root')).render(
  // reactElement
  // variable1
  // <App />
  // <Car />

)
