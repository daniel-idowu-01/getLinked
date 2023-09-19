import React from 'react'
import { light, bulb, chain, star, underline, spark, purpleBg } from '../images/logo'
import { headerImage } from '../images/pictures'

const HeaderContent = () => {
  return (
    <section className='px-[60px] pt-10'>
        {/* div for the text at the top of the header */}
        <div className='relative flex justify-end items-end'>
            <p className='italic text-white text-[20px] tracking-wide'>
                Igniting a Revolution in HR Innovation
            </p>
            <img src={underline} alt="" className='absolute top-7' />
        </div>
        
        {/* section for header content */}
        <section className='flex flex-col md:flex-row items-center'>
            {/* row for the header texts */}
            <div className='flex justify-center items-center'>
                <article className='flex flex-col gap-5 text-white pb-10'>

                    {/* div for the first header text */}
                    <div className='relative flex justify-start'>
                        <p className='clash-display text-[70px] leading-3'>
                            getlinked Tech
                        </p>
                        <img src={bulb} alt="" className='absolute left-[80%] -top-16' />
                    </div>

                    {/* div for the second header text */}
                    <div className='relative flex items-center'>
                        <p className='clash-display text-[70px] leading-3'>
                        Hackathon <span className=' text-secondary-color'>1.0</span>
                        </p>
                        <img src={chain} alt="" className='absolute left-[90%]' />
                        <img src={spark} alt="" className='absolute left-[107%]' />
                    </div>

                    <p className='montserrat'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    <button className='btn w-1/4'>Register</button>
                    <p className='unica-one text-6xl relative top-10'>
                        00<small className='text-xl'>H</small> 00<small className='text-xl'>M</small> 00<small className='text-xl'>S</small>
                    </p>
                </article>
                {/* <img src={purpleBg} alt="" className='absolute' /> */}
            </div>
            

            {/* row for the header image */}
            <article>
                <div className='relative flex justify-center items-center pt-10'>
                    <img src={headerImage} alt="" className='filter grayscale' />
                    <img src={light} alt="" className='absolute w-[90%]' />
                </div>
            </article>
        </section>
        
    </section>
  )
}

export default HeaderContent
