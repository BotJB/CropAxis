import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='navbar'>
        <span className='logo'>CropAxis</span>
        <ul>
            <li className='nav-links'>About Us</li>
            <li className='nav-links'>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Nav