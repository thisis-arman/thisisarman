
import {
  createBrowserRouter,
  
} from "react-router";
import MainHome from "../pages/home";

export const route = createBrowserRouter([
    
    {

        path:"/",
        element:<MainHome/>
}
])