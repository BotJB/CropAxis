import React from 'react'
import './Slider.css'
import { useInView } from 'react-intersection-observer';
const Slider = ({imgSrc,title,subtitle,flipped}) => {
    const {ref,inView}=useInView({
        threshold:0
    })
    const renderContent=()=>{
        if(flipped){
            return <>
            <img className="slider-image" src={imgSrc} alt="Slider image" />
            <div className='slider-text'>
                <h1 className='slider-title'>{title}</h1>
                <p>{subtitle}</p>
            </div>
            </>
        }
        else{
            return <>
            <div className='slider-text'>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
            <img className="slider-image" src={imgSrc} alt="Slider image" />
            </>
        }
    }
  return (
    <div className={inView?'slider slider-zoom':'slider'} ref={ref}>
        {renderContent()}
    </div>
  )
}

export default Slider