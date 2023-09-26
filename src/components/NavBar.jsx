import React, {useState} from 'react'
import { Link } from 'react-router-dom'
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
            <Link to='/'>
                <img src={logo} alt='' loading='lazy'  className='w-2/3 hover:cursor-pointer' />
            </Link>
            <div className='text-white flex gap-14'>
                <a
                 href='/#timeline' 
                 className='hover:opacity-80 hover:cursor-pointer'>
                    Timeline
                </a>
                <a
                 href='/#intro' 
                 className='hover:opacity-80 hover:cursor-pointer'>
                    Overview
                </a>
                <a
                 href='/#faqs' 
                 className='hover:opacity-80 hover:cursor-pointer'>
                    FAQs
                </a>
                <Link 
                to='/contact'
                className='hover:opacity-80 hover:cursor-pointer'
                >
                    Contact
                </Link>
            </div>

            <Link to='/register'>
                <button className='btn'>
                    Register
                </button>
            </Link>
            
        </nav>

        {/* Mobile Navigation Bar */}
        <nav className={mobileNavBar}>
            <Link to='/'>
                <img src={logo} alt='' loading='lazy' className='w-2/3 hover:cursor-pointer' />
            </Link>
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
                <Link
                 to='/' 
                 onClick={() => setShowSideBar(false)}
                 className='hover:opacity-80 hover:cursor-pointer'>
                    Timeline
                </Link>
                <Link
                 to='/' 
                 onClick={() => setShowSideBar(false)}
                 className='hover:opacity-80 hover:cursor-pointer'>
                    Overview
                </Link>
                <Link
                 to='/' 
                 onClick={() => setShowSideBar(false)}
                 className='hover:opacity-80 hover:cursor-pointer'>
                    FAQs
                </Link>
                <Link 
                to='/contact'
                onClick={() => setShowSideBar(false)}
                className='hover:opacity-80 hover:cursor-pointer'
                >
                    Contact
                </Link>
                <Link to='/register'>

                <button className='btn w-1/2'>
                    Register
                </button>
            </Link>
        </section>
    </div>
  )
}

export default NavBar
