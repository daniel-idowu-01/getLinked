import React from 'react'
import { logo, menuBar } from '../images/logo'

const NavBar = () => {
  return (
    <div>
        {/* Desktop Navigation Bar */}
        <nav className='hidden md:flex justify-between items-center px-[40px] pt-8 pb-5'>
            <img src={logo} alt='' loading='lazy' className='' />
            <div className='text-white flex gap-14'>
                <a href="">Timeline</a>
                <a href="">Overview</a>
                <a href="">FAQs</a>
                <a href="">Contact</a>
            </div>
            <button className='btn'>Register</button>
        </nav>

        {/* Mobile Navigation Bar */}
        <nav className='flex md:hidden justify-between items-center px-[40px] pt-8 pb-5'>
            <img src={logo} alt='' loading='lazy' className='' />
            <img src={menuBar} alt='' loading='lazy' className='cursor-pointer' />
        </nav>
    </div>
  )
}

export default NavBar
