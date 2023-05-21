import React from 'react';

const MyToysTable = ({ toys, handleDelete }) => {
  const { _id, sellerName, subCategory, price, quantity } = toys;

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
          <button onClick={() => handleDelete(_id)} className="btn rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base">delete</button>
        </th>        
        
        <th>
          <button className="btn rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base">update</button>
        </th>

      </tr>
    </>
  );
};

export default MyToysTable;