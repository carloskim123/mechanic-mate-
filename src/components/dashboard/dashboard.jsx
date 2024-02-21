import React from "react";
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Main from "../main/main";
import './dashboard.css';

const Dashboard = () => {
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