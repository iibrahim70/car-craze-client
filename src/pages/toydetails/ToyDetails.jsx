import React from 'react';
import useTitle from '../../components/hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
  useTitle('Toy Details');
  const toys = useLoaderData(); 
  const { sellerName, sellerEmail, toyName, toyPicture, price, rating, quantity, description } = toys; 
  return (
    <div className='container mt-[104px] mb-10 md:mt-[144px] md:mb-20'>
      <div className='flex items-center gap-10 mb-5'>
      <img className='w-[50%] h-full' src={toyPicture} alt="" />
      <div className='space-y-5'>
        <h1 className='font-bold text-xl'>{toyName}</h1>
          <div className='space-y-2 font-medium'>
            <p>Seller Name: {sellerName}</p>
            <p>Seller Email: {sellerEmail}</p>
            <p>Price: ${price}</p>
            <p>Rating: {rating}</p>
            <p>Availabe Quantity: {quantity}</p>
            <button className='btn-primary'>Order Now</button>
          </div>
      </div>
      </div>
      <p><span className='font-bold'>Product Description:</span> {description}</p>
    </div>
  );
};

export default ToyDetails;

