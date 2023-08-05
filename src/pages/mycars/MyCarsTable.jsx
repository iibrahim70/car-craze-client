import React from 'react';
import { MdDelete } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

const MyCarsTable = ({ cars, handleDelete, handleUpdate }) => {
  const { _id, sellerName, carsName, subCategory, price, quantity } = cars;

  return (
    <>
      <tr className='font-medium'>
        <td><h4>{sellerName}</h4></td>
        <td><h4>{carsName}</h4></td>
        <td><h4 className='capitalize'>{subCategory}</h4></td>
        <td><h4>${price}</h4></td>
        <td><h4>{quantity}</h4></td>

        <th>
          <MdDelete onClick={() => handleDelete(_id)} className='w-6 h-6 cursor-pointer'/>
        </th>        
        
        <th>
          <FaRegEdit onClick={() => handleUpdate(_id)} className="w-5 h-5 cursor-pointer"/>
        </th>
      </tr>
    </>
  );
};

export default MyCarsTable;










      







