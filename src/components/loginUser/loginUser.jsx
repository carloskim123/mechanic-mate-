import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './loginUser.css';

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const toggleRegister = () => {
        setIsRegistering(!isRegistering);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
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
    
    const handleRegistration = async (event) => {
        event.preventDefault();
    
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
    
        try {
            const response = await fetch('/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password })
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={isRegistering ? handleRegistration : handleLogin}>
                <h1>{isRegistering ? 'Register' : 'Sign In'}</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className="icon"/>
                </div>
                {isRegistering && (
                    <div className="input-box">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <MdEmail className="icon"/>
                    </div>
                )}
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon"/>
                </div>
                {isRegistering && (
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <FaLock className="icon"/>
                    </div>
                )}
                {!isRegistering && (
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                )}
                <button type="submit">{isRegistering ? 'Register' : 'Sign In'}</button>
                <div className="register-link">
                    <p>{isRegistering ? 'Already have an account?' : "Don't have an account?"} <a href="#" onClick={toggleRegister}>{isRegistering ? 'Sign In' : 'Register'}</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
   