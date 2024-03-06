import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/loginUser/loginUser';
import Dashboard from './components/dashboard/dashboard';
import AuthContext from '../src/components/authContext/authContext';
import Cookies from 'js-cookie'
import Root from './components/root';
import Register from './components/registerUser/registerUser';

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
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
};

export default App;