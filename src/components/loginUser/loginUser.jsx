import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AuthContext from "../authContext/authContext";
import './loginUser.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { setAuth } = useContext(AuthContext)

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }) // Use email instead of username
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            navigate("/dashboard");
        } catch (error) {
            console.error("Login error:", error.message);
            alert(error.message);
        }
    };
    
    return (
        <div className="wrapper">
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <MdEmail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Sign In</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#" onClick={() => navigate("/register")}>Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
