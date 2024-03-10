import React, { useContext, useEffect } from 'react';
import AuthContext from '../authContext/authContext';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import CreateCustomer from '../createCustomer/createCustomer';
import './dashboard.css';
import ViewCustomers from '../viewCustomer/viewCustomers';
import CreateCars from '../createCars/createCars';
import ViewCars from '../viewCars/viewCars';
import CreateServiceDetails from '../createService/createServiceDetails';
import ViewServiceDetails from '../viewSeviceDetails/viewServiceDetails';
import DeleteServiceDetails from '../deleteServiceDetails/deleteServiceDetails';
import UpdateServiceDetails from '../updateServiceDetails/updateServiceDetails';

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
            <CreateCars />
            <ViewCars />
            <CreateServiceDetails />
            <ViewServiceDetails />
            <DeleteServiceDetails />
            <UpdateServiceDetails />
            
        </div>
    );
};

export default Dashboard;