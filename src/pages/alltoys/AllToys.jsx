import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';
import useTitle from '../../components/hooks/useTitle';

const AllToys = () => {
  useTitle('All Toys'); 
  const toys = useLoaderData(); 
  return (
    <div className='mt-[104px] mb-10 md:mt-[144px] md:mb-20'>
      <h1>total toys {toys.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
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
              toys.map(toy => <AllToysTable key={toy._id} toy={toy}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;