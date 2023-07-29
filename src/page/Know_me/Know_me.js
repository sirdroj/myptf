import React from 'react'
import { Bigphoto } from '../../components/bigphoto/Bigphoto'
import Paras from '../../components/aboutme/Paras'
import "./Know_me.scss"
import Hobbies from '../../components/hobbies/Hobbies'

const Know_me = () => {
  return (
    <div className='Know_me'>
      <h1>&lt;About me</h1>
      <Bigphoto />
      <Paras />    
      <Hobbies />
    </div>
  )
}

export default Know_me