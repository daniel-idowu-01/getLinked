import React from 'react'
import { purpleBg } from '../images/logo'
import { position1, position2, position3 } from '../images/pictures'

const Rewards = () => {

    const awardImage = 'https://s3-alpha-sig.figma.com/img/6d26/0bee/51305b717b893b93f9a9003c68127309?Expires=1696204800&Signature=O71qbHAENksr649e63I7ZDY9xY-YM4hpkm9ZbJhi9IgibjJH8yCVIz9cNoQzs5Ua0WgAm~rQwlCb35jNTp63DjurQnPtAQ6qSr2gwM9u8h08sN8~QMe9-ZFb4FmUagyw5Lq4iDVD3MnrmTDE3ayVt6ZVz7AIprlI-SVQnCiCLr13OgfCEQrHCipwR7GmfA1c3slx2Sy9ewcEGg1L7Kvb3UdTLP5CFn1PewbrDbNT6WItPESojHKHdiKxaf76U74P5pIFmR1LZwVth-HmZt6ttCiUZGi7~SJrPb3NjFoGJflFQO2pUts~yi6D-FllTUXBUVDA3RlTQsqouScUyf4tsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

    const imagesContainerStyle = 'flex flex-col md:flex-row gap-3 md:gap-0 justify-evenly items-center text-white mt-10 md:mt-0'
    const titleContainerStyle = 'relative text-white text-center md:text-left md:w-1/2 md:left-1/2 pt-20 pb-0'

  return (
    <section>

        {/* div for the title and subtitle text */}
        <div className={titleContainerStyle}>
            <p className='balance clash-display text-[20px] md:text-[32px] z-20'>
            Prizes and <br />
            <span className='text-secondary-color'>Rewards</span>
            </p>
            <p className='montserrat leading-loose text-base z-20'>
                Highlight for the prizes or rewards for winners and for participants
            </p>
        </div>
        
        {/* div for the images */}
        <div className={imagesContainerStyle}>
            <article className='relative flex justify-center items-center md:w-[40%]'>
                <img 
                 src={purpleBg} alt="" 
                 className='absolute md:left-1/4 rounded-[100%] w-11/12 filter brightness-50' 
                 />
                <img src={awardImage} alt="" className='z-20' />
            </article>

            <article className='p-10 md:p-20 '>
                <div className='flex items-center w-1/2'>
                    <img src={position2} className='w-1/2 md:w-[55%]' alt="" />
                    <img src={position1} alt="" />
                    <img src={position3} className='w-1/2 md:w-[55%]' alt="" />
                </div>
            </article>
        </div>

      
    </section>
  )
}

export default Rewards
