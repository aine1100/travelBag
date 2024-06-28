import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HotelPage from './pages/hotel'
library.add(fas)

import './App.css'
import Home from './pages/home'
import AboutUs from './pages/about'
import ContactUs from './pages/contact'
import RegisterForm from './pages/register'
import LoginForm from './pages/login'
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  },
  {
    path:"/hotel",
    element:<HotelPage/>
  },
  {
    path:"/contact",
    element:<ContactUs/>
  },{
    path:"/register",
    element:<RegisterForm/>
  }
  ,
  {
    path:"/login",
    element:<LoginForm/>
  }
])
function App() {
  console.log("error")
return(
  <div>
  <RouterProvider router={routes}/>
  </div>
)  
}

export default App