import React from 'react'
import img1 from "../../others/images/workimgs/work1.jpg"
import img2 from "../../others/images/workimgs/leetcode.png"
import img3 from "../../others/images/workimgs/github.png"
import phonebookimg from "../../others/images/workimgs/phonebook.png"
import chat_appimg from "../../others/images/workimgs/chat-logo-4.png"
import Work_card from '../cards/Work_card'
import "./Work.css"
const Work = () => {
  return (
    <div className='Work'>
        <h1 className='work_heading'>&lt;Some of my Work</h1>
        <p className='h2'>----Developement</p>
      <div className='sec'>
        <Work_card data={{image:chat_appimg,description:"its an app where people can sign_up/login and chat in group",link:"https://vite-chatapp.vercel.app/"}} />
        <Work_card data={{image:phonebookimg,description:"now users can save there contacts and asses them from aniwhere through internet",link:"https://vite-chatapp.vercel.app/",link:"https://sirdroj.github.io/phonebook/"}} />
      </div>
        <p className='h2'>----Problem solvng</p>
      <div className='sec'>
        <Work_card data={{image:img2,description:"i solve leet code problems every day",link:"https://leetcode.com/droj/"}} />
        <Work_card data={{image:img3,description:"github is the place where i share my projects",link:"https://github.com/sirdroj"}} />
      </div>
        {/* <p className='h2'>----Programs</p>
      <div className='sec'>
        <Work_card data={{image:img1,description:"its my hardwork"}} />
        <Work_card data={{image:img1,description:"its my hardwork"}} />
      </div> */}
    </div>
  )
}

export default Work