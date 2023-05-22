import React, { useEffect, useState } from 'react';
import AllToysTable from './AllToysTable';
import useTitle from '../../components/hooks/useTitle';

const AllToys = () => {
  useTitle('All Toys'); 
  const [allToys, setAllToys] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:5000/toys?limit=20')
      .then(res => res.json())
      .then(data => setAllToys(data))
  }, [allToys]); 

  return (
    <div className='mt-[104px] mb-10 md:mt-[144px] md:mb-20'>
      <table className="table w-full z-0">
        {/* table header */} 
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>

        {/* table body */}
        <tbody>
          {
          allToys.map(toys => <AllToysTable key={toys._id} toys={toys}/>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;