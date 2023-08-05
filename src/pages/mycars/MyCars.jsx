import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../components/hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import MyCarsTable from './MyCarsTable';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import clsx from 'clsx';
import axios from 'axios';

const MyCars = () => {
  useTitle('My Cars');
  const { user } = useContext(AuthContext);
  const [myCars, setMyCars] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalCar, setModalCar] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    fetch(`https://car-craze-server-omega.vercel.app/mycars?email=${user?.email}&sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => setMyCars(data));
  }, [user, sortOrder]);

  useEffect(() => {
    if (modalCar) {
      reset(modalCar);
    }
  }, [modalCar, reset]);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-craze-server-omega.vercel.app/mycars/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              const remaining = myCars.filter(cars => cars._id !== id);
              setMyCars(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    setIsOpen(true);
    const data = myCars.find((car) => car._id === id);
    setModalCar(data);
  };

  const onSubmit = updatedCar => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`https://car-craze-server-omega.vercel.app/mycars/${modalCar._id}`, updatedCar)
          .then((response) => {
            const updatedCount = response.data.modifiedCount;
            if (updatedCount === 1) {
              Swal.fire('Updated!', 'Your file has been updated.', 'success');
            } else if (updatedCount === 0) {
              Swal.fire('No Changes', 'No changes were made.', 'info');
            } else {
              Swal.fire('Error', 'An error occurred while updating the car', 'error');
            }

            const updatedCar = myCars.map(car => {
              if (car._id === modalCar._id) {
                return { ...car, ...updatedCar };
              }
              return car;
            });
            setMyCars(updatedCar);
            setIsOpen(false);
            reset(updatedCar);
          })
          .catch((error) => {
            console.error('Error updating car:', error);
            Swal.fire('Error', 'An error occurred while updating the car', 'error');
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  return (
    <div className="mt-[104px] mb-10 md:mt-[144px] md:mb-20">
      <div className="flex justify-end mb-5">
        <button className="btn-primary" onClick={handleSort}>
          Sort by Price {sortOrder === 'asc' ? '↓' : '↑'}
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className="table w-full z-0">
          {/* table header */}
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Car Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>

          {/* table body */}
          <tbody>
            {myCars.map((cars) => (
              <MyCarsTable key={cars._id} cars={cars} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            ))}
          </tbody>
        </table>
      </div>

      <div
        onClick={handleClose}
        className={clsx('fixed w-full h-full top-0 right-0 bottom-0 left-0 z-[1000] bg-white/20 backdrop-blur-lg', isOpen ? 'opacity-100 visible' : 'opacity-0 invisible')}>
      </div>

      <div
        className={clsx(
          'fixed w-full md:w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 bg-white shadow-xl z-[1001]',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}>

        <div className='flex justify-end'>
          <button onClick={handleClose}>❌</button>
        </div>

        <h2 className='font-bold my-2 text-center text-xl capitalize'>{modalCar?.carsName}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Price</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('price', { required: true })} />
            {errors.price && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Available Quantity</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('quantity', { required: true })} />
            {errors.quantity && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Detail Description</label>
            <textarea rows="4" className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('description', { required: true })}></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <input className="btn-primary w-full" type="submit" value="Update"/>
        </form>
      </div>
    </div>
  );
};

export default MyCars;
