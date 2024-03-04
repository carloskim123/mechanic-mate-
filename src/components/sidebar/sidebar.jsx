import React, { useState } from 'react'
import { BsPeopleFill } from 'react-icons/bs'
import { IoPersonAddSharp, IoCarSportSharp, IoAddSharp } from "react-icons/io5";
import { GiMechanicGarage } from "react-icons/gi";
import { FaUserPlus, FaEye } from "react-icons/fa"; 
import { FiLogOut } from "react-icons/fi";
import '../header/header.css';

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [showCarsDropdown, setShowCarsDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <GiMechanicGarage  className='icon_header'/> Mechanic mate
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onMouseEnter={() => setShowCustomerDropdown(true)} onMouseLeave={() => setShowCustomerDropdown(false)}>
                <a href="">
                    <BsPeopleFill className='icon'/> Customer 
                </a> 
                {showCustomerDropdown && (
                  <ul className='dropdown'>
                    <li><a href=""><FaUserPlus className='icon'/> Create Customer</a></li>
                    <li><a href=""><FaEye className='icon'/> View Customer</a></li>
                  </ul>
                )}
            </li>
            <li className='sidebar-list-item' onMouseEnter={() => setShowCarsDropdown(true)} onMouseLeave={() => setShowCarsDropdown(false)}>
                <a href="">
                    <IoPersonAddSharp className='icon'/> Cars
                </a>
                {showCarsDropdown && (
                  <ul className='dropdown'>
                    <li><a href=""><IoCarSportSharp className='icon'/> Create Cars</a></li>
                    <li><a href=""><FaEye className='icon'/> View Cars</a></li>
                  </ul>
                )}
            </li>
            <li className='sidebar-list-item' onMouseEnter={() => setShowServiceDropdown(true)} onMouseLeave={() => setShowServiceDropdown(false)}>
                <a href="">
                    <BsPeopleFill className='icon'/> Service
                </a>
                {showServiceDropdown && (
                  <ul className='dropdown'>
                    <li><a href=""><IoAddSharp className='icon'/> Create New Service</a></li>
                  </ul>
                )}
            </li>
            <li className='sidebar-list-item'> 
                <a href=''><FiLogOut className='icon'/> Logout</a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;