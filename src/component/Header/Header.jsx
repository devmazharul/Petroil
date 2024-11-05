import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import Container from '../../assets/Container/Container';
const Header = () => {
    return (
        <div className="bg-black text-white  border-[#FFB800] border-b-[5px]">
          <Container>
          <div className='flex justify-between'>
                    <div className='flex gap-x-[50px]'>
                        <div className="relative flex items-center gap-x-1.5 after:absolute after:content-[''] after:w-[2px] after:h-[16px] after:bg-white after:top-[20%] after:right-[-22px] ">
                            <FaEnvelope className='text-[20px]' />
                            <p>mail@yourcompany.com</p>
                        </div>
                        <div className='flex items-center gap-x-1.5' >
                            <FaPhoneVolume className='text-[20px]' />
                            <p>+896 120 5889 (Toll free)</p>
                        </div>
                    </div>
                    <div className='flex gap-[19px] cursor-pointer' >
                    <FaFacebookF />
                    <FaTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                    </div>
                </div>
          </Container>
        </div>
    )
}

export default Header
