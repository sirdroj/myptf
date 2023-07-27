import React from 'react'
import "./Work_card.css"
const Work_card = (props) => {
    const {image,discriptiom } = props.data;
  return (
    
    <div className='card'>
        {/* <img className='work_img' src={image} /> */}
        <p className='work_discription'>{discriptiom} asdasjhasaksjhfkjshf</p>
    </div>
  )
}

export default Work_card