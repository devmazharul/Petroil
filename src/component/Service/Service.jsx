import React, { Children } from 'react'

const Service = ({ children }) => {
  return (
    <div>
        <div className='bg-[rgba(0,0,0,60%)] pt-[147px] pb-[139px]'>
          <h2 className='font-bold text-[36px] leading-[54px] text-white pl-[116px]'>{children}</h2>
          <div className='mt-[19px] ml-[116px]'>
            <a className='py-[14px] px-[30px] bg-[#F40404] text-white  hover:bg-transparent hover:border-2 hover:rounded-[10px]' href="">Learn More</a>
          </div>
        </div>  
    </div>
  )
}

export default Service
