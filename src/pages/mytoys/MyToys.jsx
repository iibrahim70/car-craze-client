import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../components/hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysTable from './MyToysTable';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import clsx from 'clsx';

const MyToys = () => {
  useTitle('My Toys'); 
  const {user} = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);   
  const [modalToy, setModalToy] = useState(null);   

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyToys(data))
  }, [myToys]); 

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

  const handleUpdate = id => {
    setIsOpen(true);
    const data = myToys.find(toy => toy._id === id);
    setModalToy(data);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (id, updatedToy) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedToy)
        })
          .then(res => {
            if (res.ok) {
              Swal.fire(
                'Updated!',
                'Your toy has been updated.',
                'success'
              );
              const updatedToys = myToys.map(toy => {
                if (toy._id === id) {
                  return {
                    ...toy,
                    price: updatedToy.price,
                    quantity: updatedToy.quantity,
                    description: updatedToy.description
                  };
                }
                return toy;
              });
              setMyToys(updatedToys);
            } else {
              Swal.fire(
                'Error',
                'Failed to update the toy.',
                'error'
              );
            }
          })
          .catch(error => {
            console.error(error);
            Swal.fire(
              'Error',
              'An error occurred while updating the toy.',
              'error'
            );
          });
      }
    });
  };

// ... rest of the code ...


  const handleClose = () => {
    setIsOpen(false);
  }

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
            <th></th>
          </tr>
        </thead>

        {/* table body */}
        <tbody>
          {
            myToys.map(toys => <MyToysTable key={toys._id} toys={toys} handleDelete={handleDelete} handleUpdate={handleUpdate} />)
          }
        </tbody>
      </table>

      <div onClick={handleClose} className={clsx('fixed w-full h-full top-0 right-0 bottom-0 left-0 z-[1000] bg-white/20 backdrop-blur-lg', isOpen?'opacity-100 visible' : 'opacity-0 invisible')}></div>

      <div className={clsx('fixed w-full md:w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-white shadow-xl z-[1001]', isOpen ? 'opacity-100 visible' : 'opacity-0 invisible')}>

        <button onClick={handleClose}>❌</button>
        <p>{modalToy?.toyName}</p>

        <form onSubmit={handleSubmit(onSubmit)} className='w-[70%] mx-auto'>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Price</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" defaultValue={modalToy?.price}{...register('price')} />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Available Quantity</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" type='text' defaultValue={modalToy?.quantity}{...register('quantity')} />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Detail Description</label>
            <textarea rows="4" className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" defaultValue={modalToy?.description}{...register('description')}></textarea>

          </div>

          <input className="btn w-full rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base" type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default MyToys;