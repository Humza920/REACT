import React from 'react'
import { Outlet , Link } from "react-router-dom";

const dashbored = () => {
  return (
    <div style={{display:"flex"}}>
    <div style={{display:"flex", flexDirection:"column", width:"350px", height:"100vh", backgroundColor:"#f0f0f0"}}>
        <h1 style={{textAlign:"center"}}>DASHBORED</h1>
        <ul style={{listStyleType:"none", padding:"", color:"black", display:"flex", flexDirection:"column" ,justifyContent: "flex-start", alignItems: "flex-start" ,gap:"20px"}}>
            <button><li><Link to="/dashbored/views">Views</Link></li></button>
            <button><li><Link to="/dashbored/order">Order</Link></li></button>
            <button> <li><Link to="/dashbored/transaction">Transaction</Link></li></button>
        </ul>
    </div>
    <Outlet/>
    </div>

  )
}

export default dashbored