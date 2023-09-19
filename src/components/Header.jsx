import React from 'react'
import NavBar from './NavBar'
import HeaderContent from './HeaderContent'

const Header = () => {
  return (
    <div className=''>
      <NavBar />
      <hr className='bg-black opacity-10' />
      <HeaderContent />
      <hr className='bg-black opacity-10' />
      <p className='h-20'>Hellooo</p>
    </div>
  )
}

export default Header
