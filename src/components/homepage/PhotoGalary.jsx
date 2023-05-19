import React from 'react';
import sportsCar1 from '../../assets/sports car/1.jpg'
import sportsCar2 from '../../assets/sports car/2.jpg'
import sportsCar3 from '../../assets/sports car/3.jpg'
import sportsCar4 from '../../assets/sports car/4.jpg'
import miniTruck1 from '../../assets/mini truck/1.jpg'

const PhotoGalary = () => {
  return (
    <div className='mb-20'>
      <h2 className='text-center text-4xl md:text-4xl font-bold'>Photo Galary</h2>
      <p className='text-center mt-5 mb-10 border-y border-[#212121] py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className='hidden md:flex'/> Ab pariatur praesentium illo, accusamus iure mollitia <br className='hidden md:flex' /> ipsum reprehenderit expedita veritatis cum.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* car galary section */}
        <div className="space-y-2 text-center">
          <img className='md:h-60' src={sportsCar1} alt="" />
          <p>Ferrari 488 GTB</p>
        </div>
        <div className="space-y-2 text-center">
          <img className='md:h-60' src={sportsCar2} alt="" />
          <p>Porsche 911 GT3</p>
        </div>
        <div className="space-y-2 text-center">
          <img className='md:h-60' src={sportsCar3} alt="" />
          <p>Audi R8 Spyder</p>
        </div>
        <div className="space-y-2 text-center">
          <img className='md:h-60' src={sportsCar4} alt="" />
          <p>Lamborghini Aventador</p>
        </div>

        {/* mini truck galary section */}
        <div className="space-y-2 text-center">
          <img className='md:h-60' src={miniTruck1} alt="" />
          <p>Blaze Buster</p>
        </div>
        <div className="space-y-2 text-center">
          <img className='md:h-60' src={sportsCar1} alt="" />
          <p>Ferrari 488 GTB</p>
        </div>
        <div className="space-y-2 text-center">
          <img className='md:h-60' src={sportsCar3} alt="" />
          <p>Audi R8 Spyder</p>
        </div>
        <div className="space-y-2 text-center">
          <img className='md:h-60' src={sportsCar4} alt="" />
          <p>Lamborghini Aventador</p>
        </div>
        
      </div>
    </div>
  );
};

export default PhotoGalary;