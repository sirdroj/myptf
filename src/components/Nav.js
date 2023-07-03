import React from 'react'
import './Nav.css';
export const Nav = () => {
  return (
    <div className='nav-div'>
      <nav className="gradient-border">
      <a className='nav-button'>Work</a>
      <a className='nav-button'>Know me</a>
      <a className='nav-button'>Reach me</a>
      <a className='nav-button'>Resume</a>
      </nav>
    </div>
  )
}
export default Nav