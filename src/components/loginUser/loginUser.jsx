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
            // Send login request to backend server
            const response = await fetch('/login', { // Change '/' to '/login' for login endpoint
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Authentication successful, redirect to dashboard
                navigate("/dashboard");
            } else {
                // Authentication failed, display error message
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed. Please try again.");
            }
        } catch (error) {
            // Handle any errors that occur during login
            console.error("Login error:", error.message);
            alert(error.message);
        }
    };


    const handleRegistration = async (event) => {
        event.preventDefault();
        try {
            // Send registration request to backend server
            const response = await fetch('/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password })
            });

            if (response.ok) {
                // Registration successful, redirect to login page
                navigate("/login");
            } else {
                // Registration failed, display error message
                const errorData = await response.json();
                throw new Error(errorData.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            // Handle any errors that occur during registration
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
