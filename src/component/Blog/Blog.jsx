import React from 'react'
import Container from '../../assets/Container/Container';
import { MdKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
    return (
        <div className='bg-[#F0F0F0] py-[110px]'>
            <Container>
                <div className='flex justify-between'>
                    <div className='bg-blogImg1 bg-no-repeat bg-cover bg-center w-[339px] '>
                        <div className='bg-[rgb(0,0,0,60%)] pt-[75px] pb-[55px]'>
                            <p className='font-bold text-[24px] text-white leading-[36px] px-[45px] pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <a href="" className='py-[10px] px-[22px] text-white bg-[rgb(240,240,240,50%)] ml-[45px] hover:bg-[#F40404]'>Read more</a>
                        </div>
                    </div>
                    <div className='bg-blogImg2 bg-no-repeat bg-cover bg-center w-[339px] '>
                        <div className='bg-[rgb(0,0,0,60%)] pt-[75px] pb-[55px]'>
                            <p className='font-bold text-[24px] text-white leading-[36px] px-[45px] pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <a href="" className='py-[10px] px-[22px] text-white bg-[rgb(240,240,240,50%)] ml-[45px] hover:bg-[#F40404]'>Read more</a>
                        </div>
                    </div>
                    <div className='bg-blogImg3 bg-no-repeat bg-cover bg-center w-[339px] '>
                        <div className='bg-[rgb(0,0,0,60%)] pt-[75px] pb-[55px]'>
                            <p className='font-bold text-[24px] text-white leading-[36px] px-[45px] pb-[52px]'> lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                            <a href="" className='py-[10px] px-[22px] text-white bg-[rgb(240,240,240,50%)] ml-[45px] hover:bg-[#F40404] hover:border-2'>Read more</a>
                        </div>
                    </div>

                </div>
                <div className='flex mt-[29px] ml-[930px]'>
                    <p className=' font-bold text-base '>MORE FROM THE BLLOG</p>
                    <MdKeyboardArrowRight className='text-[25px]' />
                </div>


            </Container>

        </div>
    )
}

export default Blog
