import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

let route=createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/about",
        element:<h1>this is abput page</h1>

    }
])
export default route