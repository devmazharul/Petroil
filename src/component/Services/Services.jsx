import React from 'react';
import Service from '../Service/Service';


const Services = () => {
    return (
        <>
            <div className='flex justify-between mt-[28px] items-center'>
                <div className='ml-[390px] mr-[53px]'>
                    <h2 className='font-bold text-[64px] leading-[96px] w-[509px]'>Our Services</h2>
                    <p className='font-medium text-base leading-[24px] text-[#6C6C6C] w-[405px] '> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                {/* <div className='bg-service1 bg-cover bg-no-repeat bg-cente w-full h-full'>
                    <div className='bg-[rgba(0,0,0,60%)] pt-[147px] pb-[139px]'>
                        <h2 className='font-bold text-[36px] leading-[54px] text-white pl-[116px]'>Modern natural oil and gas refineries.</h2>
                        <div className='mt-[19px] ml-[116px]'>
                            <a className='py-[14px] px-[30px] bg-[#F40404] text-white hover:bg-transparent hover:border-2' href="">Learn More</a>
                        </div>
                    </div>
                </div> 
                </div>
                <div className='flex'>
                <div className='bg-service2 bg-cover bg-no-repeat bg-cente w-full h-full'>
                    <div className='bg-[rgba(0,0,0,60%)] pt-[147px] pb-[139px]'>
                        <h2 className='font-bold text-[36px] leading-[54px] text-white pl-[116px]'>Supply of national industries.</h2>
                        <div className='mt-[19px] ml-[116px]'>
                            <a className='py-[14px] px-[30px] bg-[#F40404] text-white hover:bg-red-900 ' href="">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='bg-service3 bg-cover bg-no-repeat bg-cente w-full h-full'>
                    <div className='bg-[rgba(0,0,0,60%)] pt-[147px] pb-[139px]'>
                        <h2 className='font-bold text-[36px] leading-[54px] text-white pl-[116px]'>National fuel distribution and supply.</h2>
                        <div className='mt-[19px] ml-[116px]'>
                            <a className='py-[14px] px-[30px] bg-[#F40404] text-white  hover:bg-transparent hover:border-2 hover:rounded-[10px]' href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div> */}

                <Service>
                    <div className='bg-service1 bg-cover bg-no-repeat bg-cente w-full h-full'>
                        <h2>Modern natural oil and gas refineries.</h2>
                    </div>
                </Service>
            </div>
            <div className='flex'>
                <Service>
                    <div className='bg-service2 bg-cover bg-no-repeat bg-cente w-full h-full'>
                        <h2>Supply of national industries.</h2>
                    </div>
                </Service>
                <Service>
                    <div className='bg-service3 bg-cover bg-no-repeat bg-cente w-full h-full'>
                        <h2>National fuel distribution and supply.</h2>
                    </div>
                </Service>
            </div>
        </>
    )
}

export default Services
