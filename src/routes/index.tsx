import { createBrowserRouter } from "react-router-dom"
import Home from "../views/Home"
import Board from "../views/Board"
import BaseLayout from "../components/parent/BaseLayout"



const router =createBrowserRouter([
    {
        element:<BaseLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/board",
                element: <Board />
            }
        ]
    }
])

export default router