import React from 'react'
import Container from '../../assets/Container/Container';


const About = () => {
  return (
    <div className='bg-[#F0F0F0] py-[136px]'>
    <Container>
        <div className='flex'>
          <p className='w-[362px] pt-[100px] pb-[99px] px-[75px] bg-[#F40404] font-bold text-[36px] text-white leading-[54px]'>Learn more about our company</p>
        <div className='bg-aboutImg bg-no-repeat bg-center pt-[168px] pb-[142px] px-[282px]'> 
        <a className='py-[13px] px-[30px] text-[#F40404] bg-white font-semibold text-base leading-[24px] cursor-pointer hover:bg-[rgb(0,0,0,60%)] border hover:border-2'>Learn More</a>
        </div>
        
       
        </div>
       
    </Container>
    </div>
  )
}

export default About
