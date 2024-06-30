import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function RegisterForm() {
    const [uservalues, setUservalues] = useState({
        username: "",
        email: "",
        password: ""
    });

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(uservalues);
        await axios.post("http://localhost:5000/register", uservalues)
            .then(() => {
                console.log("user successfully registered");
                toast.success("Registered successfully", {
                    onClose: () => setTimeout(() => {
                        window.location.href = "/login";
                    }, 2000)
                });
                console.log(uservalues);
            })
            .catch((err) => {
                toast.error(err)
                console.log(err);
                toast.error("Failed to register");
            });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setUservalues((newuser) => ({ ...newuser, [name]: value }));
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f8ff" }}>
            <h2 style={{ marginBottom: "20px", color: "#333" }}>Welcome to Travel Bag</h2>
            <ToastContainer />
            <form style={{ display: "flex", flexDirection: "column", width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }} onSubmit={handleSubmit}>
                <label htmlFor="username" style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>Enter your username</label>
                <input type="text" id="username" name="username" onChange={handleChange} style={{ marginLeft:"-2px",width:"280px", height:"20px",marginBottom: "15px", padding: "10px", fontSize: "14px", borderRadius: "5px", border: "1px solid #ccc" }} />
                
                <label htmlFor="email" style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>Enter your email</label>
                <input type="email" id="email" name="email" onChange={handleChange} style={{marginLeft:"-2px",width:"280px", marginBottom: "15px",height:"20px", padding: "10px", fontSize: "14px", borderRadius: "5px", border: "1px solid #ccc" }} />
                
                <label htmlFor="password" style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>Enter your password</label>
                <input type="password" id="password" name="password" onChange={handleChange} style={{ width:"280px",height:"20px",marginBottom: "15px", padding: "10px", fontSize: "14px", borderRadius: "5px", border: "1px solid #ccc" }} />
                
                <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", color: "#fff", backgroundColor: "#007bff", border: "none", borderRadius: "5px", cursor: "pointer", alignSelf: "center" }}>Register</button>
            </form>
        </div>
    );
}
