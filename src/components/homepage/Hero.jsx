import React from 'react';
import Lottie from 'lottie-react';
import carAnimation from '../../assets/animation/car.json'; 

const Hero = () => {
  return (
    <div className='mt-[104px] mb-10 md:mt-[144px] md:mb-20'>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold">Car <span className='text-[#2ECC71]'>Craze</span> - <br /> Toy Car Site</h1>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Eveniet veritatis nobis <br /> libero nemo iure dolor.</p>
          <button className='w-[30%] md:w-[20%] btn rounded-sm border-[#2ECC71] bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base'>Find Toys</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Lottie animationData={carAnimation} loop={true} />
        </div>
      </section>
    </div>
  );
};

export default Hero;