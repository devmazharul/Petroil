import React from 'react'
import Container from '../../assets/Container/Container'
import logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <div className='bg-[#F40404] py-[30px]'>
      <Container>
        <div className='flex justify-between'>
        <div>
        <img src={logo} alt="logo" />     
      </div>
      <div className='flex items-center gap-x-[72px]'>
        <ul className='flex gap-x-[47px] text-white  '>
            <li className='hover:text-red-400 cursor-pointer'>Home</li>
            <li className='hover:text-red-400 cursor-pointer'>About</li>
            <li className='hover:text-red-400 cursor-pointer'>Services</li>
            <li className='hover:text-red-400 cursor-pointer'>Gallery</li>
            <li className='hover:text-red-400 cursor-pointer'>Blog</li>
        </ul>
        <a className='text-white outline outline-2 px-[32px] py-[13px] cursor-pointer hover:outline-4'>CONTACT</a>
      </div>
        </div>

      </Container>
   
    </div>
  )
}

export default Navbar
