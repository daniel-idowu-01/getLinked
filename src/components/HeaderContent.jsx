import React from 'react'
import { bulb, chain, star, underline, spark, purpleBg } from '../images/logo'

const HeaderContent = () => {

    // styles
    const headerTextContainer = 'flex flex-col justify-center items-center md:justify-normal md:items-start gap-5 text-white pb-10 z-30'
    const purpleBgStyle = 'absolute -top-[1%] md:top-0 rounded-[100%] md:rounded-none filter brightness-[.50] z-20 pointer-events-none'

    const imageSource = 'https://s3-alpha-sig.figma.com/img/2cea/d700/cfbd4eb06b68c33fac2a89295904df2c?Expires=1696809600&Signature=Ddgrzrcy6UQOirDSOMkOB8KZK1QmUpZl9kO4s7YcRprVCWySKiuTjX2Hoi-E42RPfO0-qd5wxtU1eBymblt0eQBSnkJT7pFn41cbch8ciXHbR7xuJXz-Qzv9t1nML3sfgmSpTUcOYJ-kJtsKGyptHJXE6DZhE2JWXuV2cBCSLXYnDKvtEporxRHsZOYGDsHa-dDS-iFdS8I2~OdZ2mZKJjHnvWYPjrbgD3mvPEUyaJ8yLLvQnzGCFxS3yFelVqkDQdyECb2oS~tcaqapZwIoNXtuaa75a2XTzPVEhjNOAcvOqasEBDpvw7SCA4GQJPyW5wLJfjjiqyBMMssH6flXGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

    const light = 'https://s3-alpha-sig.figma.com/img/396e/75fa/de110c53101d2c3b8d00dc3a9a731502?Expires=1696809600&Signature=mCEtbqly5Oskq0qWQKzD4PLUvVPhI6LWCLFq1dBFfWG0hu1cCNeN9xq3c3t-EVefUM3L5KvyYCdI8EUACK1v9JFLPHZQ1Tprd5tm-z7bgdOKjqZiCp~hJon6mjywcV9ekxH-alQdBFKMaCD38Ahl-pjSvNUvlSdJ3dlHEhfqHTkaKqStFpGUmo9WxwUahxMwSXhTuGCfbgZXTH45NUdjkANkwucEECVbOuB5uEA2ebf4mMLZYtNMl3AOIlHms6UzJg48~~xZQFz3aEFDNwpKoE3Jo1hEqSvzXSEmjgXvF3GwESIJ31YhqtTtflDYEtLlnUS0AMT5eUuyfdxpfQEgBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  return (
    <section className='px-[40px] md:px-[80px] pt-10'>
        {/* div for the text at the top of the header */}
        <div className='relative flex justify-end items-end z-30'>
            <p className='italic text-white text-base md:text-[20px] tracking-wide'>
                Igniting a Revolution in HR Innovation
            </p>
            <img src={underline} alt="" className='absolute top-7' />
        </div>
        
        {/* section for header content */}
        <section className='mt-20 md:mt-0 flex flex-col md:flex-row justify-center items-center'>
            {/* row for the header texts */}
            <div className='flex justify-center items-center'>
                <img src={star} alt="" className='absolute top-1/4 left-40 w-5 h-5 md:w-auto md:h-auto' />
                <article
                 className={headerTextContainer}>

                    {/* div for the first header text */}
                    <div className='relative flex justify-start'>
                        <p className='clash-display text-[35px] md:text-[70px] leading-3'>
                            getlinked Tech
                        </p>
                        <img src={bulb} alt="" className='absolute left-[80%] -top-10 md:-top-16 w-8 md:w-auto' />
                    </div>

                    {/* div for the second header text */}
                    <div className='relative flex items-center'>
                        <p className='clash-display text-[35px] md:text-[70px] leading-3'>
                        Hackathon <span className='text-secondary-color'>1.0</span>
                        </p>
                        <img src={chain} alt="" className='absolute left-[100%] w-8 md:w-auto' />
                        <img src={spark} alt="" className='absolute left-[112%] md:left-[120%] w-8 md:w-auto' />
                    </div>

                    <p className='montserrat text-center md:text-left'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    <button className='btn md:w-1/4'>Register</button>

                    <p className='unica-one text-6xl relative top-10'>
                        00<small className='text-xl'>H</small> 00<small className='text-xl'>M</small> 00<small className='text-xl'>S</small>
                    </p>
                </article>
                <img src={purpleBg} alt="" className={purpleBgStyle} />
            </div>
            

            {/* row for the header image */}
            <article className='md:w-1/2'>
                <div className='relative flex justify-center items-center pt-10'>
                    <img src={imageSource} loading='lazy' alt="" className='filter grayscale' />
                    <img src={light} loading='lazy' alt="" className='absolute w-[90%]' />
                </div>
            </article>
        </section>
        
    </section>
  )
}

export default HeaderContent
