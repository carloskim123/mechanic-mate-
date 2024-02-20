import React from 'react'
import 
{ BsFillGrid3X3GapFill, BsPeopleFill, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { IoPersonAddSharp } from "react-icons/io5";
 import { GiMechanicGarage } from "react-icons/gi";
 import { FaFileInvoiceDollar } from "react-icons/fa6";
 import '../header/header.css';

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <GiMechanicGarage  className='icon_header'/> Mechanic mate
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaFileInvoiceDollar className='icon'/> Create Invoice
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoPersonAddSharp className='icon'/> New Customer
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>           
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;