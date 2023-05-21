import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';
import useTitle from '../../components/hooks/useTitle';

const AllToys = () => {
  useTitle('All Toys'); 
  const allToys = useLoaderData(); 
  return (
    <div className='mt-[104px] mb-10 md:mt-[144px] md:mb-20'>
      <h1>total toys {allToys.length}</h1>
        <table className="table w-full z-0">
          {/* table header */} 
          <thead>
            <tr>
              <th className='text-white'>Seller Name</th>
              <th className='text-white'>Toy Name</th>
              <th className='text-white'>Sub Category</th>
              <th className='text-white'>Price</th>
              <th className='text-white'>Quantity</th>
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