import {createBrowserRouter} from "react-router-dom" 
import App from "../App"
// import Header from "../Components/Block/Header"
import Layout from "../Components/Block/Layout"
import Mercury from "../Pages/Mercury"
import Earth from "../Pages/Earh"
import Mars from "../Pages/Mars"
import Jupiter from "../Pages/jupiter"
import Saturn from "../Pages/Saturn"
import Uranus from "../Pages/Uranus"
import Neptune from "../Pages/Neptune"
import Venus from "../Pages/Venus"


export const mainRoute = createBrowserRouter ([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                // path:"app",  
                element:<App/>
            },
            {
                
                path:"mercury" , 
                element:<Mercury/>
            },
            {
               
                path:"earth" , 
                element:<Earth/>
            },
            {
              
                path:"mars" , 
                element:<Mars/>
            },
            {
               
                path:"jupiter" , 
                element:<Jupiter/>
            },
            {
            
                path:"saturn" , 
                element:<Saturn/>
            },
            {
              
                path:"uranus" , 
                element:<Uranus/>
            },
            {
               
                path:"neptune" , 
                element:<Neptune/>
            },
            {
               
                path:"venus" , 
                element:<Venus/>
            },
        ]
    }
])