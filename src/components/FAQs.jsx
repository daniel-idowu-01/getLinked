import React from 'react'
import '../index.css'
import faqData from '../data/FAQs.json'
import Faq from "react-faq-component";
import { purpleStar, purpleBg, questionMark } from '../images/logo'

const FAQs = () => {

    const container = 'flex flex-col md:flex-row gap-20 md:gap-0 justify-center items-center text-white p-10 md:p-20 text-center md:text-left'
    const purple_Bg = 'absolute -top-[120%] md:-top-[200%] -left-1/2 md:left-0 rounded-[100%] filter brightness-[.50] z-10'

    // section image url 
    const imageSource = 'https://s3-alpha-sig.figma.com/img/accf/5ac3/adacada305608b5b37ec7cef7fd76949?Expires=1696204800&Signature=LIP9W7ooPPMOp~VQEjLyY-N3dwp8IMGItohiLBpwbKIU3UKLdFiBH1mbCtaWo6zoLHtC4Pd~Z1B3qnSgjJxtsnwz6ffa6RypLhWHXxtEiPYIdfyqTExtduFEveJx0p5zhz6VrRt1B7hfvtWmAcNR2vBUDLIKtnbHE-CDFGTBk2GAbjPWtL3FHuhXkliVtA5HNUJzNIjD23v9QhnRAqrgklnp38~-g-0OEYTrJNpsoAGs5CWorL9Isew6AtNPUpb7kqIS-1VBSaP~j4FtuOFCThMJa9FezsvDrTsPXm16tsRZjccXP6ljejW7SSQkuQR5pZoA529DqBJI-1DTQQ9FPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'


    // faq styles and configuration 
    const styles = {
      bgColor: '#150E28',
      titleTextColor: "#fff",
      rowTitleColor: "#fff",
      rowContentColor: '#fff',
      arrowColor: "#fff"
  };

  const config = {
    expandIcon: "+",
    collapseIcon: "-",
};

  return (
    <section className={container}>
      {/* div for the first row */}
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
           Frequently Asked <br />
           <span className='text-secondary-color'>Questions</span>
        </p>
        <p className='montserrat leading-loose text-base z-20'>
            We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
        </p>

        {/* FAQ questions */}
        <div className='faq-style-wrapper'>
          <Faq
                data={faqData}
                styles={styles}
                config={config}
            />
        </div>
          
      </article>

      {/* div for the first row */}
      <article className='relative md:w-1/2 p-10'>
        <img 
         src={purpleStar} 
         alt="purple star" 
         className='absolute w-5' 
         />

         <div className='absolute flex gap-24'>
          <img src={questionMark} alt='' className='relative ' />
          <img src={questionMark} alt='' className='relative -top-20' />
          <img src={questionMark} alt='' className='relative' />
         </div>
         
        <img
         src={imageSource} 
         alt="" 
         className='relative z-20'
         />
      </article>
    </section>
  )
}

export default FAQs
