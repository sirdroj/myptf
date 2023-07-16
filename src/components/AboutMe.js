import React from 'react'
import Typed from 'react-typed'
import "./AboutMe.css"
const AboutMe = () => {
  return (
    <div className='about-div'>
        <p className='p1'>SOFTWERE DEVELOPER</p>
        <p className='p2'>Hello I am Aman Sharma &#60;He,Him/&#62; </p>
        <Typed className="p3" strings={["I ‘m currently learning to develop applications for Augmented Reality and Virtual Reality."]}
        typeSpeed={70} />
    </div>
  )
}

export default AboutMe