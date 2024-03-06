/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AuthContext from "../authContext/authContext";
import RegisterUser from '../registerUser/registerUser';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const {  setAccountCreated, accountCreated } = useContext(AuthContext);

    const handleRegistration = async (event) => {
        event.preventDefault();
        try {
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match, Please try again')
            }
        
            // }
            RegisterUser(email, password, setAccountCreated);

        } catch (error) {
            // Handle any errors that occur during registration
            console.error("Registration error:", error.message);
            alert(error.message);
        }
    };

    useEffect(() => {
        if(accountCreated) {
            navigate("/login")
        }
    },[accountCreated])

    return (
        <div className="wrapper">
            <form onSubmit={handleRegistration}>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <MdEmail className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className="icon" />
                </div>
              
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        <FaLock className="icon" />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>

                <button type="submit">Register</button>

                <div className="register-link">
                    <p>Already have an account? <a href="#" onClick={() => navigate("/login")}>Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default Register;
