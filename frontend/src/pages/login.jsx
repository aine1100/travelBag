import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import axios from "axios"
import  "react-toastify"
import { ToastContainer,toast } from "react-toastify"

export default function LoginForm(){
    const [uservalues,setUservalues]=useState({
        email:"",
        password:""
})
  async  function handleSubmit(e){
       e.preventDefault()
       console.log(uservalues)
       await axios.post("http://localhost:5000/login",uservalues)
       .then(()=>{
        console.log("login successfuly")
        toast.success("login successfully", {
            onClose: () => setTimeout(() => {
                window.location.href = "/";
            }, 200)})
        console.log(uservalues)
       })
       .catch((err)=>{
        toast.error("failed to login")
        console.log(err)
       })


    }
    function handleChange(event){
      const {name,value}=event.target
      setUservalues((newuser)=>({...newuser,[name]:value}))
    }
    return(
        <div style={{display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center"}}>
            <h2>Welcome to travel bag</h2>
            <ToastContainer/>
            <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email</label>
                <input type="email" id="email" name="email"  onChange={(e)=>handleChange(e)}/>
                <label htmlFor="password">Enter your password</label>
                <input type="text" id="password" name="password"  onChange={(e)=>handleChange(e)}/>
                <button type="submit" style={{marginLeft:"40px"}}>Login</button>
            </form>
        </div>
    )
}