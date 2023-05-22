import React, { useState } from 'react';

const MyToysTable = ({ toys, handleDelete, handleUpdate }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toys;

  return (
    <>
      <tr className='font-medium'>
        <td>
          <h4>{sellerName}</h4>
        </td>

        <td>
          <h4>{toyName}</h4>
        </td>

        <td>
          <h4 className='capitalize'>{subCategory}</h4>
        </td>

        <td>
          <h4>${price}</h4>
        </td>

        <td>
          <h4>{quantity}</h4>
        </td>

        <th>
          <button onClick={() => handleDelete(_id)} className="btn-primary">delete</button>
        </th>        
        
        <th>
          <button onClick={() => handleUpdate(_id)} className="btn-primary">update</button>
        </th>
      </tr>
    </>
  );
};

export default MyToysTable;










      







