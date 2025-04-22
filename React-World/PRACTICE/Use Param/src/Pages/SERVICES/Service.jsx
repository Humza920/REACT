import React from 'react'
import { useParams } from 'react-router-dom'
const Service = () => {
  const {id} = useParams()
  return (
    <h1 className=''>This is Service Page - {id}</h1>
  )
}

export default Service