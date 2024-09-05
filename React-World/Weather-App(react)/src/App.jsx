import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import { useEffect } from 'react'

const App = () => {
    const [weather, setweather] = useState(null)
    // const inputVal = useRef()
    // const weat = inputVal.current

    useEffect(()=>{
        axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${weat}&aqi=no`)
          .then((res)=>{
            console.log(res.data.location.country);
            setweather(res.data);
          })
          .catch((err)=>{
            console.log(err);
          })



          },[])
        

  return (
    <>
    <div>
        <h1>Weather.App</h1>
        <input id='weat' type="text" name="weather" placeholder='Enter City'/>
        <button type="button">Search</button>
    </div>
    </>
  )

  

}

export default App