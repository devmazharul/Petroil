import React, { Children } from 'react'

const Container = ({ children }) => {
  return (
    <div className='max-w-container mx-auto py-[15px] '>
      {children}
    </div>
  )
}

export default Container
