import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ toys }) => {
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
          <Link to={`/toydetails/${_id}`} className="btn-primary">view details</Link>
        </th>
      </tr>
    </>
  );
};

export default AllToysTable;