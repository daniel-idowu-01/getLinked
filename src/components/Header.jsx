import React from 'react'
import NavBar from './NavBar'
import HeaderContent from './HeaderContent'

const Header = () => {
  return (
    <div data-aos='zoom-in'>
      <NavBar />
      <hr className='bg-black opacity-10' />
      <HeaderContent />
    </div>
  )
}

export default Header

/* Consolas, 'Courier New', */
