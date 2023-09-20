import React from 'react'
import { purpleStar, purpleBg } from '../images/logo'

const Rules = () => {

    const container = 'flex flex-col-reverse md:flex-row justify-center items-center text-white p-10 text-center md:text-left'
    const purple_Bg = 'absolute -top-[120%] md:-top-[200%] -left-1/2 md:left-0 rounded-[100%] filter brightness-[.50] z-10'
    const imageSource = 'https://s3-alpha-sig.figma.com/img/0542/1f67/435623be1bd279e42923f1c7be3982a0?Expires=1696204800&Signature=UC20fA-IsnPyj1ONZzMTO12upRS9iERE6AnfQNMpCO9odqQMWo382jZDNcBixNZjjbjdVSSIPhqm5r6YANC8t7b3f2mg0~TQ2isXThAbIhVC3cuqPwcQD95Cr2o0KZWo~bTAf4b~BTBwjFp1PIK5ZuXg0TU0rCH~V~ts0P2-7I-1EyY9qV8x87iLyPFmAuxeyf-zc7ZyrU6DZ3WHdpXLBt7tgBPCVO7zJj2dZ80nKbriem1GJb5tVCx6Cm8xA6DW0Ux~Y~0rGiEPeNefWx~Iax4pnPPMrUh4giB2jRCd9kJDuw9XA2GIhZt-FPAlJPjAbFuGR1~pF5aRK0aM3lygnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    
  return (
    <section className={container}>
      <article className='relative flex flex-col gap-3 md:w-1/2 mt-10 md:mt-0'>
        <img
         src={purpleStar} 
         alt="purple star"
         className='absolute w-5 md:w-auto left-[90%]' 
         />
        <img
         src={purpleBg} 
         alt="purple background"
         className={purple_Bg} 
         />
        <p className='balance clash-display text-[20px] md:text-[32px] z-20'>
            Rules And <span className='text-secondary-color'>Guidelines</span>
        </p>
        <p className='montserrat leading-loose text-base z-20'>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
        </p>
      </article>

      <article className='relative md:w-1/2 p-10'>
        <img 
         src={purpleStar} 
         alt="purple star" 
         className='absolute w-5' 
         />
        <img
         src={imageSource} 
         alt="" 
         className='z-20'
         />
      </article>
    </section>
  )
}

export default Rules
