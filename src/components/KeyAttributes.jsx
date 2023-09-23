import React from 'react'
import data from '../data/KeyAttributes.json'
import { purpleStar, purpleBg } from '../images/logo'

const KeyAttributes = () => {

    const container = 'flex flex-col md:flex-row justify-center items-center text-white p-10 md:p-20 text-center md:text-left'
    const purple_Bg = 'absolute top-1/2 left-0 rounded-[100%] filter brightness-[.50] z-10'

    // section image url
    const imageSource = 'https://s3-alpha-sig.figma.com/img/1d4e/0b71/a45a506fa0896ea1c741a01208c3ac2b?Expires=1696204800&Signature=jNUG~6E6-C9yGqR-4Flv1HyjhbDTfLbhe-LMtLAOktnrjxXtdkKdFB4CYRzYIixNEe3UtB0WDXW8GJhX2yweOyOghDzIcKM4FevDHrWl7i4n8Asn08xn1Qp-tMlHIWKU17tlnB7iZIz3QLqfxOQeUu5TP5N-E9l9RM9BupuCOP~V3YdLESr301zpzaiL3MXUZI2vXAMIhl7HwWoK9wOFSR3T3u5vYba~PUASrji5VFA1MndRPjDojVZ3iDXY5rmtICktX-kbQqf3togkSxEEFC-o0sloW4jZ8duNf-w6k6FlYA~sH3KDqSjua4HFO-CnC8pWr6eUnLMiCW2w5OjjwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

  return (
    <section className={container} data-aos='zoom-in'>
      {/* div for the first row */}
      <article className='relative md:w-1/2 p-10'>
        <img src={purpleStar} alt="purple star" className='absolute w-5' />
        <img src={imageSource} alt="" className='' />
        <img src={purpleBg} alt="purple background" className={purple_Bg} />
      </article>

      {/* div for the second row */}
      <article className='flex flex-col items-center md:items-start gap-3 md:w-1/2 mt-10 md:mt-0'>
        <img src={purpleStar} alt="purple star" className='absolute w-5 md:w-auto left-[90%]' />
        <p className='clash-display text-[20px] md:text-[32px] z-20'>
            Judging Criteria <br /> 
            <span className='text-secondary-color'>Key Attributes</span>
        </p>
        {/* Lists in the section */}
        {
          data.attributes.map((attribute, index) => (
            <p className='montserrat leading-loose text-base z-20' key={index}>
              <span className='text-lg text-secondary-color-2 font-semibold'>
                {attribute.title}
              </span>: 
              {attribute.text}.
            </p>
          ))
        }
        <button className='btn md:w-[30%] mt-5'>Read More</button>
      </article>
    </section>
  )
}

export default KeyAttributes

