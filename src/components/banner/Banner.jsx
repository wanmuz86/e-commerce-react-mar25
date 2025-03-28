import React from 'react'
import './Banner.css'

const Banner = ({title, subtitle, image}) => {
  return (
    <div className='jumbotron text-center text-warning' style={{
      backgroundImage:`url(${image})`,
       backgroundSize:'cover' 
    }}>
        <h1 className='display-4'>{title}</h1>
        <p className='lead'>{subtitle}</p>
    </div>
  )
}

export default Banner