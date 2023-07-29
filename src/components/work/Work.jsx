import React from 'react'
import img1 from "../../others/images/workimgs/work1.jpg"
import Work_card from '../cards/Work_card'
import "./Work.css"
const Work = () => {
  return (
    <div className='Work'>
        <h1 className='work_heading'>&lt;Some of my Work</h1>
        <p className='h2'>----Developement</p>
      <div className='sec'>
        <Work_card data={{image:img1,description:"its my hardwork"}} />
        <Work_card data={{image:img1,description:"its my hardwork"}} />
      </div>
        <p className='h2'>----Problem solvng</p>
      <div className='sec'>
        <Work_card data={{image:img1,description:"its my hardwork"}} />
        <Work_card data={{image:img1,description:"its my hardwork"}} />
      </div>
        <p className='h2'>----Programs</p>
      <div className='sec'>
        <Work_card data={{image:img1,description:"its my hardwork"}} />
        <Work_card data={{image:img1,description:"its my hardwork"}} />
      </div>
    </div>
  )
}

export default Work