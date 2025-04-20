import { Outlet } from 'react-router-dom'

import React from 'react'

export default function Layout() {
  return (
    <>
    <div>
      <h1 style={{width:"100%", backgroundColor:"green", color:"white"}}>Products Section</h1>
    </div>
    <Outlet/>
    <div>
      <h1 style={{width:"100%", backgroundColor:"green", color:"white"}}>Products Section Footer</h1>
    </div>
    </>
  )
}
