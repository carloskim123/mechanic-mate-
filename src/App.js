import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/loginUser/loginUser';
import Dashboard from './components/dashboard/dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login onAuthentication={handleAuthentication} />}
        />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login onAuthentication={handleAuthentication} />} />
      </Routes>
    </Router>
  );
};

export default App;