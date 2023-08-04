import React, { useEffect } from 'react';
import sportsCar1 from '../../assets/sports car/1.jpg'
import sportsCar2 from '../../assets/sports car/2.jpg'
import sportsCar3 from '../../assets/sports car/3.jpg'
import sportsCar4 from '../../assets/sports car/4.jpg'
import miniTruck1 from '../../assets/mini truck/1.jpg'
import miniTruck2 from '../../assets/mini truck/2.jpg'
import miniTruck3 from '../../assets/mini truck/3.jpg'
import miniTruck4 from '../../assets/mini truck/4.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const PhotoGalary = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])
  
  return (
    <section className='flex items-center justify-center flex-col'>
      
      <div data-aos='fade-down' className='space-y-5 mb-5'>
        <h2 className='text-center text-4xl font-bold'>Memories in Motion</h2>
        <p className='text-justify lg:text-center'>Take a visual journey through our captivating photo gallery, <br className='hidden lg:flex' /> showcasing the finest collection of cars, scenic drives, and unforgettable moments. <br className='hidden lg:flex' /> Let these images ignite your passion for extraordinary automobiles and the thrill of the open road.</p>
      </div>

      {/* car galary section */}
      <div data-aos='fade-left' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-5 gap-10">
        <div className="space-y-2 text-center">
          <img src={sportsCar1} alt="" />
          <p>Ferrari 488 GTB</p>
        </div>
        <div className="space-y-2 text-center">
          <img src={sportsCar2} alt="" />
          <p>Porsche 911 GT3</p>
        </div>
        <div className="space-y-2 text-center">
          <img src={sportsCar3} alt="" />
          <p>Audi R8 Spyder</p>
        </div>
        <div className="space-y-2 text-center">
          <img src={sportsCar4} alt="" />
          <p>Lamborghini Aventador</p>
        </div>
      </div>

      {/* mini truck galary section */}
      <div data-aos='fade-right' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-2 text-center">
          <img src={miniTruck1} alt="" />
          <p>Blaze Buster</p>
        </div>
        <div className="space-y-2 text-center">
          <img src={miniTruck2} alt="" />
          <p>Spark Responder</p>
        </div>
        <div className="space-y-2 text-center">
          <img src={miniTruck3} alt="" />
          <p>Mini Inferno</p>
        </div>
        <div className="space-y-2 text-center">
          <img src={miniTruck4} alt="" />
          <p>Firefly</p>
        </div>
      </div>

    </section>
  );
};

export default PhotoGalary;