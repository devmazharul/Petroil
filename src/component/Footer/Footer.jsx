import React from 'react'
import Container from '../../assets/Container/Container';
import footerLogo from '../../assets/img/footerLogo.png';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume, FaLocationDot, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import iso from '../../assets/img/cert1.png';
import liquid from '../../assets/img/cert2.png';

const Footer = () => {
  return (
    <div className='pt-[149px] pb-[170px] bg-[#1F1F1F] '>
      <Container>
        <div className='flex justify-between'>
        <div className='w-[334px]'>
        <img src={footerLogo} alt="" className='mb-[33px]' />
        <div className='flex text-white items-center mb-[15px]'>
          <MdOutlineMarkEmailUnread className='text-[20px] mr-[5px]' />
          <h2>mail@yourcompany.com</h2>
        </div>
        <div className='flex text-white items-center mb-[15px]'>
          <FaPhoneVolume className='text-[20px] mr-[5px]' />
          <h2>+896 120 5889 (Toll free)</h2>
        </div>
        <div className='flex text-white items-center mb-[34px]'>
          <FaLocationDot className='text-[20px] mr-[5px]' />
          <h2>101 Baker Street, New York, USA, 12345</h2>
        </div>
        <div className='flex text-white text-[16px] gap-[12px] '>
          <FaFacebookF  className=' rounded-full bg-[#F40404] cursor-pointer'/>
          <FaTwitter className='rounded-full bg-[#F40404] cursor-pointer '/>
          <FaLinkedinIn className='rounded-full bg-[#F40404] cursor-pointer'/>
          <IoLogoInstagram className='rounded-full bg-[#F40404] cursor-pointer'/>
        </div>
        </div>
        
        <div className='text-white'>
          <ul>
           <h2 className='font-bold text-base leading-[24px] mb-[21px]'>Company</h2>
            <li className='font-normal text-[14px] leading-[21px] mb-[15px]'>Home</li>
            <li className='font-normal text-[14px] leading-[21px] mb-[15px]'>About</li>
            <li className='font-normal text-[14px] leading-[21px] mb-[15px]'>Services</li>
            <li className='font-normal text-[14px] leading-[21px] mb-[15px]'>Gallery</li>
          </ul>
        </div>

        <div className='text-white'>
          <ul>
           <h2 className='font-bold text-base leading-[24px] mb-[21px]'>Others</h2>
            <li className='font-normal text-[14px] leading-[21px] mb-[15px]'>Blog</li>
            <li className='font-normal text-[14px] leading-[21px] mb-[15px]'>Contact</li>
            <li className='font-normal text-[14px] leading-[21px] mb-[15px]'>Terms & Conditions</li>
            <li className='font-normal text-[14px] leading-[21px] mb-[15px]'>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h2 className='font-bold text-base leading-[24px] text-white'>Certificate</h2>
          <div className='flex gap-[5px] mt-[21px]'>
          <img src={iso} alt="" />
          <img src={liquid} alt="" />
          </div>

         
        </div>

       
        </div>
       
       

      </Container>
    </div>
  )
}

export default Footer
