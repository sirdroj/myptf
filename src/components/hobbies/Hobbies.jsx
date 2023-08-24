import React from 'react'
import img1 from "./../../others/images/games/image2.png"
import img2 from "./../../others/images/games/image3.png"
import img3 from "./../../others/images/games/image4.png"
import img4 from "./../../others/images/games/image5.png"
import img5 from "./../../others/images/books/image 6.png"
import img6 from "./../../others/images/books/image 7.png"
import img7 from "./../../others/images/books/image 8.png"
import img8 from "./../../others/images/books/image 9.png"
import img9 from "./../../others/images/books/image 10.png"
import img10 from "./../../others/images/books/image 11.png"
import "./Hobbies.scss"
const Hobbies = () => {
  return (
    <div className='hobbies'>
        <h1>Here is what I do when I am not working --&gt; </h1>
        <div className='imgsec'>
            <h2>Arena</h2>
            <div className='imgs'>
                <img className='gimg' src={img1} />
                <img className='gimg' src={img2} />
                <img className='gimg' src={img3} />
                <img className='gimg' src={img4} />
            </div>
            {/* <h2>Wood Crafting</h2>
            <div className='imgs'>
                <img className='wcimg' src={img1} />
                <img className='wcimg' src={img2} />
                <img className='wcimg' src={img3} />
                <img className='wcimg' src={img4} />
            </div> */}
            <h2>My Favourite reads of all time</h2>
            <div className='imgs'>
                <img className='bkimg' src={img6} />
                <img className='bkimg' src={img7} />
                <img className='bkimg' src={img8} />
                <img className='bkimg' src={img9} />
                <img className='bkimg' src={img10} />
                <img className='bkimg' src={img5} />
            </div>
        </div>
    </div>
  )
}

export default Hobbies