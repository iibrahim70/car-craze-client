import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import carAnimation from '../../assets/animation/car.json'; 
import Button from '../button/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 my-10 lg:my-0'>
      
      <div data-aos='fade-up' className="space-y-5 flex justify-center flex-col">
        <h1 className="text-3xl md:text-6xl font-bold">Discover Your <br/> <span className='text-[#2ECC71]'>Dream</span> Car</h1>
        <p className='text-justify md:w-2/3'>Browse through our wide selection of top-quality vehicles and find the perfect match for your needs and desires.</p>
        <Link to='/allcars'><Button text='View Cars' /></Link>
      </div>

      <div data-aos='fade-down' className="flex justify-center items-center">
        <Lottie animationData={carAnimation} loop={true} />
      </div>

    </section>
  );
};

export default Hero;