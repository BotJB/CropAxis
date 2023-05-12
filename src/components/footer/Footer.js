import React from 'react'
import './Footer.css'
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="socials">
        <h3 className='logo'>CropAxis</h3>
       <h4>Connect with Us</h4>
       <div className="icons">
        <EmailIcon  className='mail-icon' />
        <TwitterIcon className='mail-icon' />
       </div>
       
        </div>

    </div>
  )
}

export default Footer