import React from 'react'
import { LibertyAssured, LibertyPay, Winwise, Wisper, PayBox, Vuzual } from '../images/logo'

const Partners = () => {

    const gridItem = 'border-2 border-secondary-color h-full w-full p-3 md:p-5 md:px-10'

  return (
    <section className='pb-20' data-aos='zoom-in'>
        <article className='flex justify-center items-center'>
            <div className='md:w-1/2 text-center text-white p-20 pb-10'>
                <p className='clash-display text-[20px] md:text-[32px] z-20'>
                    Partners And Sponsors
                </p>
                <p className='montserrat leading-relaxed text-base z-20'>
                Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
                </p>
            </div>
        </article>
        
        <article className='w-2/3 md:w-1/2 mx-auto grid grid-cols-3 gap-5 md:p-20 place-items-center border border-secondary-color'>
            <img src={LibertyAssured} alt="" className={`${gridItem} border-t-0 border-l-0 border-r-0`} />
            <img src={LibertyPay} alt="" className={`${gridItem} border-y-0`} />
            <img src={Winwise} alt="" className={`${gridItem} border-t-0 border-x-0`} /> 
            <img src={Wisper} alt="" className={`${gridItem}  border-y-0 border-x-0`} />
            <img src={PayBox} alt="" className={`${gridItem}  border-y-0`} />
            <img src={Vuzual} alt="" className={`${gridItem}  border-y-0 border-x-0`} />
        </article>
        

    </section>
  )
}

export default Partners
