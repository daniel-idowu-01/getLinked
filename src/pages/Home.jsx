import React from 'react'
import { Header, Intro, Rules, KeyAttributes,  FAQs, TimelineComp, Rewards, Partners } from '../components'


const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
        <hr className='bg-black opacity-30' />
      <Intro />
        <hr className='bg-black opacity-30' />
      <Rules />
        <hr className='bg-black opacity-30' />
      <KeyAttributes />
        <hr className='bg-black opacity-30' />
      <FAQs />
        <hr className='bg-black opacity-30' />
      <TimelineComp />
        <hr className='bg-black opacity-30' />
      <Rewards />
        <hr className='bg-black opacity-30' />
      <Partners />
    </div>
  )
}

export default Home
