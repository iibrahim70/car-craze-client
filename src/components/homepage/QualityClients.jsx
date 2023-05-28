import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const QualityClients = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className='mb-10 md:mb-20 grid md:grid-cols-2 gap-x-10 justify-between items-center'>
      <div data-aos='zoom-in-up' className='bg-red-200'>
        <img src="https://i.ibb.co/0GtP8Z1/full-length-confident-young-businesswoman-coming-out-her-vehicle-496169-1184.jpg" alt="" />
      </div>
      <div data-aos='zoom-in-down'>
        <h2 className='text-4xl md:text-4xl font-bold'>Only Quality For Clients</h2>
        <div className='flex gap-5 mt-5'>
          <button className='inline-flex items-center justify-center capitalize lg:text-base lg:px-6 md:px-4 px-3 lg:py-3 py-2 mb-3 font-medium text-black transition hover:drop-shadow-2xl border-none shadow-xl md:mb-0 bg-[#2ECC71] hover:bg-green-500 duration-700'>Luxury</button>
          <button className='btn-secondaryy'>Comfort</button>
          <button className='btn-secondaryy'>Prestige</button>
        </div>
        <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto cupiditate aliquid error sequi nesciunt? Tenetur sunt harum a ut repellendus vitae rerum alias repellat incidunt, adipisci amet ea beatae unde labore veniam laudantium! Itaque culpa quos incidunt rem aliquam velit iure officiis cumque voluptatibus eos nihil similique architecto, at quo.</p>
      </div>
    </div>
  );
};

export default QualityClients;


