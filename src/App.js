import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/loginUser/loginUser';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

const App = () => {
  // eslint-disable-next-line no-undef
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle authentication status
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

return (
  <Router>
    <div>
      {/* Render Header and Sidebar components for authenticated users */}
      {isAuthenticated && (
        <div>
          <Header />
          <Sidebar />
        </div>
      )}

      <Routes>
        {/* Define routes for Login and Dashboard */}
        <Route
          path="/"
          element={<Login onAuthentication={handleAuthentication} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
  );
};


export default App;