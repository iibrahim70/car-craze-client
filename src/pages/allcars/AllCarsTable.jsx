import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const AllCarsTable = ({ cars }) => {
  const { _id, sellerName, name, category, price, quantity } = cars; 

  return (
    <>
      <tr className='font-medium'>
        
        <td><h4>{sellerName}</h4></td>
        <td><h4>{name}</h4></td>
        <td><h4 className='capitalize'>{category}</h4></td>
        <td><h4>${price}</h4></td>
        <td><h4>{quantity}</h4></td>

        <th>
          <Link to={`/car-details/${_id}`}><HiArrowNarrowRight className='w-6 h-6 cursor-pointer font-bold text-[#212121]'/></Link>
        </th>
        
      </tr>
    </>
  );
};

export default AllCarsTable;