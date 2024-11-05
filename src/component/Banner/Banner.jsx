import React from 'react'
import Container from '../../assets/Container/Container'


const Banner = () => {
  return (
    <div className='relative bg-banner py-[257px] bg-no-repeat bg-cover bg-center  '> 
    <div className='bg-[rgba(0,0,0,60%)] top-0 left-0 w-full h-full absolute  '>
    </div>
     <Container className="z-[1]">
        <p className='text-[64px] w-[842px] pb-[31px] text-white'>We exist since 1975 on the oil and gas industry.</p>
        <a className='px-[40px] py-[13px] bg-[#F40404] text-white'>LEARN MORE</a>
     </Container>
   
    </div>
  )
}

export default Banner
