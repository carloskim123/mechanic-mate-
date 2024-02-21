import React from "react";
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            {/* Rest of your dashboard content goes here */}
        </div>
    );
};

export default Dashboard;