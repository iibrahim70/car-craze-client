import React, { useEffect, useState } from 'react';
import AllToysTable from './AllToysTable';
import useTitle from '../../components/hooks/useTitle';
import { useForm } from 'react-hook-form';

const AllToys = () => {
  useTitle('All Toys');
  const [allToys, setAllToys] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`https://car-craze-server-omega.vercel.app/serach-toys?limit=20&name=${data.searchQuery}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  useEffect(() => {
    fetch('https://car-craze-server-omega.vercel.app/toys?limit=20')
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  return (
    <div className="mt-[104px] mb-10 md:mt-[144px] md:mb-20">
      <div className='flex md:justify-end justify-center mb-5'>
        <form className='flex flex-col md:flex-row md:gap-2' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col md:flex-row gap-y-3'>
            <input
              className='border-b border-[#212121] py-1 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-1 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]'
              type="text"
              placeholder="Search by ToyName..."
              {...register('searchQuery')}
            />
            <button
              type="submit"
              className='inline-flex items-center justify-center capitalize lg:text-base lg:px-6 md:px-4 px-3 lg:py-3 py-2 md:mb-0 font-medium text-white transition hover:drop-shadow-2xl border-none shadow-md bg-[#2ECC71] hover:bg-green-500 duration-700'>
              Search
            </button>
          </div>
        </form>
      </div>



      <div className='overflow-x-auto'>
        <table className="table w-full z-0">
          {/* table header */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {allToys.map((toys) => (
              <AllToysTable key={toys._id} toys={toys} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
