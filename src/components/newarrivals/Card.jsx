import React from 'react';
import { BsFillFuelPumpFill, BsFillPeopleFill, BsGear } from 'react-icons/bs';
import SmallButton from '../button/SmallButton';

const Card = ({ car }) => {
  return (
    <div className='rounded p-4 mb-4 shadow-lg hover:scale-110 transition-transform transform'>
      <h2 className='text-xl font-bold mb-2'>{car.name}</h2>
      <p>{car.category}</p>
      <div className='my-4'>
        <img
          src={car.image}
          alt={car.name}
          className='h-[180px] w-full'
        />
      </div>
      <div className='flex items-center justify-between mb-4'>
        <p className='flex items-center gap-2'><BsFillFuelPumpFill/> {car.mileage}</p>
        <p className='flex items-center gap-2'><BsGear/> {car.transmission}</p>
        <p className='flex items-center gap-2'><BsFillPeopleFill/> {car.seats}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-lg font-semibold'>${car.price}</p>
        <SmallButton text='Buy Now' />
      </div>
    </div>
  );
};

export default Card;
