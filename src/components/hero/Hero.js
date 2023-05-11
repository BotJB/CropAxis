import React from 'react'
import './hero.css'
const Hero = ({imageSrc}) => {
  return (
    <div className='hero'>
        <img src={imageSrc} alt="" />
        <h1 className='hero_title'>Title</h1>
    </div>
  )
}

export default Hero