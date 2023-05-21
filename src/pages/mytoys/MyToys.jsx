import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../components/hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTable from './MyToysTable';
import Swal from 'sweetalert2';

const MyToys = () => {
  useTitle('My Toys'); 
  const {user} = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);  

  const url = `http://localhost:5000/mytoys?email=${user?.email}`; 

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }, [])

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = myToys.filter(toys => toys._id !== id);
              setMyToys(remaining);
              }
            });
        }
      });
    }

  return (
    <div className='mt-[104px] mb-10 md:mt-[144px] md:mb-20'>
      <h1>total toys {myToys.length}</h1>
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
            <th></th>
          </tr>
        </thead>

        {/* table body */}
        <tbody>
          {
            myToys.map(toys => <MyToysTable key={toys._id} toys={toys} handleDelete={handleDelete} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;