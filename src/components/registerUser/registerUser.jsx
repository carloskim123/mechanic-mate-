/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//import AuthContext from "../authContext/authContext";
//import RegisterUser from '../registerUser/registerUser';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/;
const REGISTER_URL = "http://localhost:7107/api/admin/login";

const RegisterUser = () => {
    const navigate = useNavigate();
   
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accountCreated] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('');    
   

    useEffect(() => {
        setErrMsg('');
    }, [email, password, confirmPassword, setErrMsg])


    const handleRegistration = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setErrMsg('Passwords do not match');
            return;
        }

        if (!EMAIL_REGEX.test(email)) {
            setErrMsg('Invalid email');
            return;
        }

        if (!PASSWORD_REGEX.test(password)) {
            setErrMsg('Invalid password format');
            return;
        }

        try {
            const response = await fetch(REGISTER_URL, {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });
            const data = await response.json();
            console.log(data);
            console.log(data.accessToken);
            setSuccess(true);
             //clear state and controlled inputs
             setEmail('');
             setPassword('');
            } catch (error) {
                if (!error?.response) {
                    setErrMsg('No response from the server');
                } else if (error.response.status === 409) {
                    setErrMsg('Email already exists')
                } else {
                    setErrMsg('Registration failed');                
                }
            
            }        
    };
    useEffect(() => {
        if(accountCreated) {
            navigate("/login")
        }
    }, [accountCreated, navigate]);

    return (
        <div className="wrapper">
            {success && <p>Registration successful!</p>}
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
                </div>
            </form>
        </div>
    );
};

export default RegisterUser;    