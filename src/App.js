import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/loginUser/loginUser';
import Dashboard from './components/dashboard/dashboard';
import AuthContext from '../src/components/authContext/authContext';
import Cookies from 'js-cookie'
import Root from './components/root';
import Register from './components/registerUser/registerUser';
import CreateCustomer from './components/createCustomer/createCustomer';
import ViewCustomers from './components/viewCustomer/viewCustomers';
import CreateCars from './components/createCars/createCars';
import ViewCars from './components/viewCars/viewCars';
import CreateServiceDetails from './components/createService/createServiceDetails';
import ViewServiceDetails from './components/viewSeviceDetails/viewServiceDetails';
import UpdateServiceDetails from './components/updateServiceDetails/updateServiceDetails';
import DeleteServiceDetails from './components/deleteServiceDetails/deleteServiceDetails';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("token");
    if (user) {
      setAuth(true)
    }
  }
  useEffect(() => {
    readCookie();
  }, [])

  return (
    <AuthContext.Provider value={{ auth, setAuth, setAccountCreated, accountCreated }}>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/create-customer' element={<CreateCustomer />} />
          <Route path='/view-customer' element={<ViewCustomers />} />
          <Route path='/create-cars' element={<CreateCars />} />
          <Route path='/view-cars' element={<ViewCars />} />
          <Route path='/create-service' element={<CreateServiceDetails />} />
          <Route path='/view-service' element={<ViewServiceDetails />} />
          <Route path='/update-service' element={<UpdateServiceDetails />} />
          <Route path='/delete-service' element={<DeleteServiceDetails />} />

        </Routes>
      </Router>
    </AuthContext.Provider>
  )
};

export default App;