import React, { useState } from 'react';

const MyToysTable = ({ toys, handleDelete, handleUpdate }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toys;

  return (
    <>
      <tr>
        <td>
          <h4 className="font-bold">{sellerName}</h4>
        </td>

        <td>
          <h4 className="font-bold">{toyName}</h4>
        </td>

        <td>
          <h4 className="font-bold">{subCategory}</h4>
        </td>

        <td>
          <h4 className="font-bold">${price}</h4>
        </td>

        <td>
          <h4 className="font-bold">{quantity}</h4>
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










      







