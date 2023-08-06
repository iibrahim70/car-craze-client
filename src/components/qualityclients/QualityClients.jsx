import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const QualityClients = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className='mt-10 md:mt-20 grid md:grid-cols-2 gap-10 justify-between items-center'>
      <div data-aos='zoom-in-up' className='bg-red-200'>
        <img src="https://i.ibb.co/0GtP8Z1/full-length-confident-young-businesswoman-coming-out-her-vehicle-496169-1184.jpg" alt="" />
      </div>
      <div data-aos='zoom-in-down'>
        <h2 className='text-4xl md:text-4xl font-bold'>Explore Our Diverse Car Collection</h2>
        <div className='flex gap-5 mt-5'>
          <button className='inline-flex items-center justify-center capitalize lg:text-base lg:px-6 md:px-4 px-3 lg:py-3 py-2 mb-3 font-medium text-black transition hover:drop-shadow-2xl border-none shadow-xl md:mb-0 bg-[#2ECC71] hover:bg-green-500 duration-700'>Sports Car</button>
          <button className='btn-secondaryy'>Sedan</button>
          <button className='btn-secondaryy'>SUV</button>
        </div>
        <p className='mt-5'>Discover a wide range of cars, including sleek Sedans, versatile SUVs, and powerful Sports Cars. Whether you're looking for comfort, space, or adrenaline-pumping performance, our collection has the perfect ride to match your style and needs. Choose your dream car and hit the road in style and confidence.</p>
      </div>
    </div>
  );
};

export default QualityClients;


