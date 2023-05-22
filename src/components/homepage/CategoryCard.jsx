import React from 'react';

const CategoryCard = ({category}) => {
  const { toyName, toyPicture, price, rating  } = category; 
  return (
    <div className="shadow-xl">
      <figure className='h-52'><img className='h-[90%] w-full' src={toyPicture} alt="Toys" /></figure>
      <div className="ps-5 space-y-2">
        <h2 className="">{toyName}</h2>
        <p>Price: ${price}</p>
        <p>Ratings: {rating}</p>
        <div className="flex justify-end pr-5 pb-2">
          <button className="btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;