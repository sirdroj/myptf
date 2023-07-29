import React from 'react'
import "./Progressbar.scss"
const Progressbar = ({magnitude,title}) => {
  return (
    <div className='progressbar'>
        <h2>{title}</h2>
        <div className='bar'>
            <div className='progress' style={{width:magnitude}}></div>
            <div className='progress2'></div>
        </div>
    </div>
  )
}

export default Progressbar