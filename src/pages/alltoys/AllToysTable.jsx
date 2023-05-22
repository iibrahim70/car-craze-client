import React from 'react';

const AllToysTable = ({ toys }) => {
  const { sellerName, toyName, subCategory, price, quantity } = toys; 

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
          <button className="btn-primary">view details</button>
        </th>

      </tr>
    </>
  );
};

export default AllToysTable;