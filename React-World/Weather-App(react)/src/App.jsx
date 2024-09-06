import React from 'react'
import axios from 'axios'
import { useState , useRef} from 'react'
import { useEffect } from 'react'

const App = () => {
  const val = useRef();
  const [Weather, setWeather] = useState([])
  const [City, setCity] = useState('')

  const searchBtn = (e)=>{
    e.preventDefault()
    setCity (val.current.value)

  } 
        useEffect(()=>{
          axios(`https://api.weatherapi.com/v1/current.json?key=470dc57fa01f47e3823105240240509&q=${City}&aqi=no`)
          .then(response => {
            console.log(response.data);
            })
            .catch(error => {
              console.error(error);
              });
        },[])
        


  return (
    <>
    <h1>Weather.Net</h1>
    <form>
      <input ref={val} type="text" name="city" placeholder="Enter City"/>
      <button type="submit">Search</button>
      </form>
    </>
  )

  

}

export default App