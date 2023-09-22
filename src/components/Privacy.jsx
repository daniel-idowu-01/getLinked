import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { purpleStar } from '../images/logo'
import { lock } from '../images/pictures'

const Privacy = () => {

    const container = 'flex flex-col md:flex-row gap-20 md:gap-0 justify-center items-center text-white p-10 md:p-20 text-center md:text-left mb-10 md:mb-0'

    // section image url
    const imageSource = 'https://s3-alpha-sig.figma.com/img/6db9/36c6/c29a7f48697d2a5a69348e7d27a23b89?Expires=1696204800&Signature=bNxstTSEYXbZoBpwY1daRPhKxKT2QWcslEajrqcfM3PkXwQzsldJdVZMdFuDNGD0~OvSu0fMkW~B4w61OFHsHsU-xOBPxk4KGu5yJSoO~sWX8sZnErextViXDadeRA~JiVv14mGC8C3Zbcgd2wrcQ99WF2sO5PWiie3VNrr13n5ih485ZT318I4rgz8VgOXeuJelWcIKmR4K6baFO9SFd5TWgbKYQAvj8cL0BqLpA5u~LZpiaSdbKUE2B1yxZEiMieWWYbrUZWMf1hgZ1AB9nwRVcW2SscfUPWShC4SQOIuc6v05HxSnce9Mk45Ux6mMHhAonaddjBYxs3b5XKyJSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

  return (
    <section className={container}>

      {/* div for the first row */}
      <article className='relative flex flex-col items-center md:items-start gap-3 md:w-1/2 mt-10 md:mt-0'>
        <img src={purpleStar} alt="purple star" className='absolute w-5 md:w-auto left-[90%]' />
        <p className='clash-display text-[20px] md:text-[32px] z-20'>
            Privacy Policy And <br /> 
            <span className='text-secondary-color'>Terms</span>
        </p>
        <p className='montserrat leading-loose text-base z-20'>
            Last updated on September 12, 2023
        </p>
        <p className='montserrat leading-loose text-base z-20'>
            Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
        </p>

        {/* div for the content that contains the licencing standard license */}
        <div className='border border-secondary-color p-5 md:p-10 flex flex-col gap-5 rounded-md'>
            <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
            </p>
            <div className='flex flex-col gap-2'>
                <p className='text-secondary-color text-lg'>Licencing Policy</p>
                <p>Here are terms of our Standard License:</p>
            </div>

            <ul className='flex flex-col gap-5'>
                <li className='leading-loose'>
                    <div className='flex items-start gap-3'>
                        <AiOutlineCheckCircle
                         className='mt-2 block shrink-0 bg-green-600 text-white rounded-full border-none' 
                        /> 
                        <p>
                            The Standard License grants you a non-exclusive right to navigate and register for our event
                        </p>
                    </div>
                </li>
                <li className='leading-loose'>
                    <div className='flex items-start gap-3'>
                        <AiOutlineCheckCircle
                         className='mt-2 block shrink-0 bg-green-600 text-white rounded-full border-none' 
                        /> 
                        <p>
                            You are licensed to use the item available at any free sourcesites, for your project developement
                        </p>
                    </div>
                </li>
            </ul>

            <button className='btn mx-auto mt-5'>Read More</button>
        </div>
      </article>

        {/* div for the second row */}
      <article className='relative md:w-1/2 flex justify-center items-center'>
        <img src={purpleStar} alt="purple star" className='absolute w-5' />
        <img src={imageSource} alt="" className='w-[150%] relative top-16 md:top-32' />
        <img src={lock} alt="purple background" className='absolute w-3/5' />
      </article>

    </section>
  )
}

export default Privacy
