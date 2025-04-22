import React from 'react'
import { Outlet , Link } from "react-router-dom";

const dashbored = () => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"center"}}>
        <h1>DASHBORED</h1>
        <ul>
            <li><Link to="/dashbored/views">Views</Link></li>
            <li><Link to="/dashbored/order">Order</Link></li>
            <li><Link to="/dashbored/transaction">Transaction</Link></li>
        </ul>
    </div>
    <Outlet/>
    </>

  )
}

export default dashbored