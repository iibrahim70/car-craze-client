import React from 'react';

const AllToysTable = ({toy}) => {
  const { sellerName, subCategory, price, quantity } = toy; 

  return (
    <>
      <tr>

        <td>
          <h4 className="font-bold">{sellerName}</h4>
        </td>

        <td>
          <h4 className="font-bold">helo</h4>
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
          <button className="btn rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base">details</button>
        </th>

      </tr>
    </>
  );
};

export default AllToysTable;