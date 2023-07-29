import React from 'react'
import Progressbar from '../progressbar/Progressbar'
import mypic from "../../others/images/mypic.jpg"
import "./Bigphoto.scss"
export const Bigphoto = () => {
    var divImage = {
        backgroundImage : "url(" + mypic + ")" 
      };
  return (
    <div className='bigphoto' style={divImage}>
        <div className='skills'>
            <Progressbar magnitude={"40%"} title={"React"}/>
            <Progressbar magnitude={"40%"} title={"React"}/>
            <Progressbar magnitude={"40%"} title={"React"}/>
            <Progressbar magnitude={"40%"} title={"React"}/>
            <Progressbar magnitude={"40%"} title={"React"}/>
            <Progressbar magnitude={"40%"} title={"React"}/>
            <Progressbar magnitude={"40%"} title={"React"}/>
            <Progressbar magnitude={"40%"} title={"React"}/>
        </div>
    </div>
  )
}
