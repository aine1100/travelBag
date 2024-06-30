import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HotelPage from './pages/hotel'
library.add(fas)

import './App.css'
import Home from './pages/home'
import AboutUs from './pages/about'
import ContactUs from './pages/contact'
import RegisterForm from './pages/register'
import LoginForm from './pages/login'
import Dashboard from './dashboard/dashboard'
import Bookings from './booking/booking'
import Places from './places/place'
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
  },{
    path:"/dashboard",
    element:<Dashboard/>
  },{
    path:"/booking",
    element:<Bookings/>
  },{
    path:"/place",
    element:<Places/>
  }
])
function App() {
return(
  <div>
  <RouterProvider router={routes}/>
  </div>
)  
}

export default App
