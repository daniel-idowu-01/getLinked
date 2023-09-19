import React from 'react'
import { Header, Intro, Rules } from '../components'


const Home = () => {
  return (
    <div>
      <Header />
        <hr className='bg-black opacity-10' />
      <Intro />
        <hr className='bg-black opacity-10' />
      <Rules />
        <hr className='bg-black opacity-10' />
    </div>
  )
}

export default Home
