import React, { useContext, useEffect } from 'react';
import AuthContext from '../authContext/authContext';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Main from "../main/main";
import './dashboard.css';

const Dashboard = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if(!auth) {
        navigate('/login')
      }
    },[])
    return (
        <div>
            <Header />
            <Sidebar />
            <Main />
            {/* Rest of your dashboard content goes here */}
        </div>
    );
};

export default Dashboard;