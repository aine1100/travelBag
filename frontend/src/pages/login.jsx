import  { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
    const [userValues, setUserValues] = useState({
        email: "",
        password: ""
    });

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(userValues);
        
        try {
            await axios.post("http://localhost:5000/login", userValues);
            console.log("Login successful");
            toast.success("Login successful", {
                onClose: () => setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 2000)
            });
        } catch (error) {
            console.error("Failed to login:", error);
            toast.error("Failed to login");
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setUserValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f8ff" }}>
            <h2 style={{ marginBottom: "20px", color: "#333" }}>Welcome to Travel Bag</h2>
            <ToastContainer />
            <form style={{ display: "flex", flexDirection: "column", width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }} onSubmit={handleSubmit}>
                <label htmlFor="email" style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>Enter your email</label>
                <input type="email" id="email" name="email" onChange={handleChange} style={{ width: "280px", height:"20px",marginLeft:"-2px",marginBottom: "15px", padding: "10px", fontSize: "14px", borderRadius: "5px", border: "1px solid #ccc" }} />

                <label htmlFor="password" style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>Enter your password</label>
                <input type="password" id="password" name="password" onChange={handleChange} style={{ width: "280px",height:"20px", marginBottom: "15px", padding: "10px", fontSize: "14px", borderRadius: "5px", border: "1px solid #ccc" }} />

                <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", color: "#fff", backgroundColor: "#007bff", border: "none", borderRadius: "5px", cursor: "pointer", alignSelf: "center" }}>Login</button>
            </form>
        </div>
    );
}
