import React from 'react'
import "./Work_card.scss"
const Work_card = (props) => {
    const {image,description,link} = props.data;
    var divImage = {
      backgroundImage : "url(" + image + ")" 
    };
  return (
    
    <a className='card' style={divImage} href={link} target='blank'>
        {/* <img className='work_img' src={image} /> */}
        <p className='work_discription'>{description} </p>
    </a>
  )
}

export default Work_card