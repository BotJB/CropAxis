import React from 'react'
import './hero.css'
const Hero = ({imageSrc}) => {
  return (
    <div className='hero'>
        <img src={imageSrc} alt="" />
        <div className="intro">
          <h3>Welcome to CropAxis</h3>
          <p>Where we make it possible for ypu to live your dreams</p>
          <button>Explore...</button>
        </div>
    </div>
  )
}

export default Hero