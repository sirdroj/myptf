import React from 'react'
import Profession from '../../components/profession name/Profession'
import Hellow from '../../components/hellow/Hellow'
import Work from '../../components/work/Work'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <Hellow />
      <Work />
    </div>
  )
}

export default Home