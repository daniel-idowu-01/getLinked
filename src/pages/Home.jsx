import AOS from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from 'react'
import { Header, Intro, Rules, KeyAttributes,  FAQs, TimelineComp, Rewards, Partners, Privacy, Footer } from '../components'


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div className='home overflow-x-hidden relative top-0'>
      <Header />
        <hr className='bg-secondary-color opacity-30' />
      <Intro />
        <hr className='bg-secondary-color opacity-30' />
      <Rules />
        <hr className='bg-secondary-color opacity-30' />
      <KeyAttributes />
        <hr className='bg-secondary-color opacity-30' />
      <FAQs />
        <hr className='bg-secondary-color opacity-30' />
      <TimelineComp />
        <hr className='bg-secondary-color opacity-30' />
      <Rewards />
        <hr className='bg-secondary-color opacity-30' />
      <Partners />
        <hr className='bg-secondary-color opacity-30' />
      <Privacy />
        <hr className='bg-secondary-color opacity-30' />
      <Footer />
    </div>
  )
}

export default Home
