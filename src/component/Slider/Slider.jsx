import React from 'react';
import slider1 from '../../assets/img/slider-1.png';
import slider2 from '../../assets/img/slider-2.png';
import slider3 from '../../assets/img/slider-3.png';
import slider4 from '../../assets/img/slider-4.png';


const Slider = () => {
  return (
    <div className='flex justify-between'>
      <img src={slider1} alt="" />
      <img src={slider2} alt="" />
      <img src={slider3} alt="" />
      <img src={slider4} alt="" />
    </div>
  )
}

export default Slider
