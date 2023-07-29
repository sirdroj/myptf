import React from 'react'
import './Nav.css';
export const Nav = ({setp}) => {
  return (
    <div className='nav-div'>
      <nav className="gradient-border">
      <a className='nav-button' onClick={()=>{setp(true)}}>Home</a>
      <a className='nav-button' onClick={()=>{setp(false)}}>Know me</a>
      <a className='nav-button'>Reach me</a>
      <a className='nav-button'>Resume</a>
      </nav>
    </div>
  )
}
export default Nav