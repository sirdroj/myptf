import React from 'react'
import "./Hellow.scss"
import Typed from 'react-typed';
const Hellow = () => {
  return (
    <div className='hellow'>
        <div className='hellow_text'>Hellow</div>
        {/* <p className='p1'>Coding is the purpose of my Existence.</p> */}
        <p className='p1'><Typed
                    strings={['Coding is the purpose of my Existence.']}
                    typeSpeed={60}
                /></p>
        <p className='p2'>I am MAKAUT Pass out looking to solve problems for millions in 0-1/0 lines of code.</p>
        <p className='p3'>I believe anything if thought through is possible, I am not afraid to turn <span style={{"color":"white"}}> Since fiction</span> to reality. &gt;</p>
    </div>
  )
}

export default Hellow