import React from 'react'
import Mblogo from '../assets/MB-Logo.png'
import { IoIosSearch } from "react-icons/io";
const Header = () => {
    return (
        <header>
            <div className="h-inner container">
                <div className="logo">
                    <img src={Mblogo} alt="" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="search">
                    <input className='search-rec' type="text" placeholder='Search' />
                    <a href="#" target="_blank"><IoIosSearch className='search-icon' /></a>
                    <input className='search-chk' type="checkbox" name="" id="" />
                </div>
            </div>
        </header>
    )
}

export default Header