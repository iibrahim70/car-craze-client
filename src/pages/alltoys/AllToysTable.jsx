import React from 'react';

const AllToysTable = ({ toys }) => {
  const { sellerName, toyName, subCategory, price, quantity } = toys; 

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
          <button className="btn rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base">view details</button>
        </th>

      </tr>
    </>
  );
};

export default AllToysTable;