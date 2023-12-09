import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Addcodian from "../../Addcodian/Addcodian";
import Home from "../../Home/Home";



const routes =createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },{
                path:"/acc",
                element:<Addcodian></Addcodian>
            }
        ]
    }
])
export default routes;