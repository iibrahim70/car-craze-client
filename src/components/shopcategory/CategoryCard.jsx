import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({item}) => {
  const { _id, name, image, price, rating  } = item; 
  return (
    <div className="shadow-xl">
      <img className='h-[180px] w-full' src={image} alt="Toys" />
      <div className="ps-5 space-y-2">
        <h2 className="font-medium">{name}</h2>
        <p>Price: ${price}</p>
        <p>Ratings: {rating}</p>
        <div className="flex justify-end pr-5 pb-2">
          <Link to={`/car-details/${_id}`} className="btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;