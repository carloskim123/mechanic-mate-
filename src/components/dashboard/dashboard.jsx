import React, { useContext, useEffect } from 'react';
import AuthContext from '../authContext/authContext';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import CreateCustomer from '../createCustomer/createCustomer';
import './dashboard.css';
import ViewCustomers from '../viewCustomer/viewCustomers';

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
            <CreateCustomer />
            <ViewCustomers />
            {/* Rest of your dashboard content goes here */}
        </div>
    );
};

export default Dashboard;