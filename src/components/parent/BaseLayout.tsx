import { Outlet } from "react-router"
import Navbar from "../NavBar"
import React from "react"


const BaseLayout =()=>{
return (
    <React.Fragment>

    <Navbar/>
    <Outlet/>
    </React.Fragment>
)
}

export default BaseLayout