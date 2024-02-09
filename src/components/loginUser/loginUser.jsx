import React, { useState } from "react";
import { FaUser, FaLock,} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './loginUser.css';

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    const toggleRegister = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>{isRegistering ? 'Register' : 'SignIn'}</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon"/> 
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <MdEmail className="icon"/> 
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon"/> 
                </div>

                {isRegistering && (
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required />
                        <FaLock className="icon"/> 
                    </div>
                )}

                {!isRegistering && (
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                )}

                <button type="submit">{isRegistering ? 'Register' : 'SignIn'}</button>

                <div className="register-link">
                    <p>{isRegistering ? 'Already have an account?' : "Don't have an account?"} <a href="#" onClick={toggleRegister}>{isRegistering ? 'SignIn' : 'Register'}</a></p>                    
                </div>
            </form>
        </div>
    );     
};

export default Login;
