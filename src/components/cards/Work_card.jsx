import React from 'react'
import "./Work_card.scss"
const Work_card = (props) => {
    const {image,description} = props.data;
    var divImage = {
      backgroundImage : "url(" + image + ")" 
    };
  return (
    
    <div className='card' style={divImage}>
        {/* <img className='work_img' src={image} /> */}
        <p className='work_discription'>{description} </p>
    </div>
  )
}

export default Work_card