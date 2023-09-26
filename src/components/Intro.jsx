import React from 'react'
import { introArrow, purpleStar } from '../images/logo'
import { bigBulb } from '../images/pictures'

const Intro = () => {

  const container = 'flex flex-col md:flex-row justify-center items-center text-white p-10 md:p-20 text-center md:text-left'

  return (
    <section id='intro' className={container} data-aos='zoom-in'>
      <article className='relative md:w-1/2 p-10'>
        <img src={purpleStar} alt="" className='absolute w-5' />
        <img src={bigBulb} alt="" />
        <img
         src={introArrow} alt=""
         className='absolute left-1/2 md:left-[80%] w-[20%] md:w-auto' 
         />
      </article>

      <article className='flex flex-col gap-3 md:w-1/2 mt-10 md:mt-0'>
        <img src={purpleStar} alt="" className='absolute w-5 md:w-auto left-[90%]' />
        <p className='balance clash-display text-[20px] md:text-[32px]'>
            Introduction to getlinked <span className='text-secondary-color'>tech Hackathon 1.0</span>
        </p>
        <p className='montserrat leading-loose text-base'>
          Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
        </p>
      </article>

    </section>
  )
}

export default Intro
