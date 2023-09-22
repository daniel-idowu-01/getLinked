import React, {useState} from 'react'
import { logo, menuBar, circle, x } from '../images/logo'

const NavBar = () => {

    const [showSideBar, setShowSideBar] = useState(false)
    const mobileNavBar = 'flex md:hidden justify-between items-center px-[40px] pt-8 pb-5'
    const desktopNavBar = 'hidden md:flex justify-between items-center px-[40px] md:px-20 pt-8 pb-5'
    const menuExitIcon = 'flex relative justify-center items-center cursor-pointer w-[6%] left-[95%] hover:scale-110'
    const mobileBarContainer = `${showSideBar ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed top-0 w-full h-screen p-10 bg-bg-color md:hidden text-white flex flex-col gap-10 z-50 transition-all`

  return (
    <div>
        {/* Desktop Navigation Bar */}
        <nav className={desktopNavBar}>
            <img src={logo} alt='' loading='lazy' className='w-[10%]' />
            <div className='text-white flex gap-14'>
                <a
                 href="javascript:void(0)" 
                 className='hover:opacity-80 hover:cursor-pointer'>
                    Timeline
                </a>
                <a 
                 href="javascript:void(0)" 
                 className='hover:opacity-80 hover:cursor-pointer'>
                    Overview
                </a>
                <a 
                href="javascript:void(0)" 
                className='hover:opacity-80 hover:cursor-pointer'>
                    FAQs
                </a>
                <a 
                href="javascript:void(0)" 
                className='hover:opacity-80 hover:cursor-pointer'>
                    Contact
                </a>
            </div>
            <button className='btn'>Register</button>
        </nav>

        {/* Mobile Navigation Bar */}
        <nav className={mobileNavBar}>
            <img src={logo} alt='' loading='lazy' className='w-1/3' />
            <img
             src={menuBar}
             alt='' loading='lazy'
             onClick={() => setShowSideBar(true)} 
             className='cursor-pointer w-[6%] hover:scale-110' />
        </nav>
        <section className={mobileBarContainer}>
            <div
             onClick={() => setShowSideBar(false)}
             className={menuExitIcon}>
                <img src={circle} alt="" loading='lazy' />
                <img src={x} alt="" loading='lazy' className='absolute' />
            </div>
                <a
                 href="javascript:void(0)" 
                 className='hover:opacity-80 hover:cursor-pointer'>
                    Timeline
                </a>
                <a 
                 href="javascript:void(0)" 
                 className='hover:opacity-80 hover:cursor-pointer'>
                    Overview
                </a>
                <a 
                href="javascript:void(0)" 
                className='hover:opacity-80 hover:cursor-pointer'>
                    FAQs
                </a>
                <a 
                href="javascript:void(0)" 
                className='hover:opacity-80 hover:cursor-pointer'>
                    Contact
                </a>
            <button className='btn w-1/2'>Register</button>
        </section>
    </div>
  )
}

export default NavBar
