import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import carAnimation from '../../assets/animation/car.json'; 
import 'aos/dist/aos.css';
import Aos from 'aos';

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div data-aos='fade-up' className='mt-[104px] mb-10 md:mt-0 md:mb-0'>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mt-[48px]">
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-3xl md:text-6xl font-bold">Car <span className='text-[#2ECC71]'>Craze</span> - <br /> Toy Car Site</h1>
          <p className='text-justify md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet veritatis nobis libero nemo iure dolor.</p>
          <button className='btn-primary w-[35%] md:w-[22%]'>Find Toys</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Lottie animationData={carAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;