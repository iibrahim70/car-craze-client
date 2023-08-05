import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({item}) => {
  const { _id, carName, carsPicture, price, rating  } = item; 
  return (
    <div className="shadow-xl">
      <figure className='h-52'><img className='h-[90%] w-full' src={carsPicture} alt="Toys" /></figure>
      <div className="ps-5 space-y-2">
        <h2 className="font-medium">{carName}</h2>
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