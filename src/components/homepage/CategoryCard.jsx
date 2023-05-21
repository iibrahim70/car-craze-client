import React from 'react';

const CategoryCard = ({category}) => {
  const { toyName, toyPicture, price  } = category; 
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure><img className='h-[90%] w-full' src={toyPicture} alt="Toys" /></figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;