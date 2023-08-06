import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating'; 
import SmallButton from '../button/SmallButton';

const CategoryCard = ({ item }) => {
  const { _id, name, image, price, rating, category } = item;

  return (
    <div className="shadow-lg hover:bg-green-400">
      <img className="h-[180px] w-full" src={image} alt="Toys" />
      <div className="ps-5 pr-2 space-y-2 my-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{category}</p>
        
        <div className="flex items-center">
          <Rating
            className='text-[24px]'
            initialRating={rating}
            readonly 
            emptySymbol={<span className="text-gray-300">&#9734;</span>}
            fullSymbol={<span className="text-yellow-400">&#9733;</span>} 
          />
          <span className="ml-2">{rating}</span>
        </div>

        <div className='flex justify-between items-center'>
          <p className='text-lg font-semibold'>${price}</p>
          <Link to={`/car-details/${_id}`}>
            <SmallButton text="Details" />
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default CategoryCard;
