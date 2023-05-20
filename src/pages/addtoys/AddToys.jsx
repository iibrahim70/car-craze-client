import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import useTitle from '../../components/hooks/useTitle';

const AddToys = () => {
  useTitle('Add Toys'); 
  const {user} = useContext(AuthContext); 

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = newToys => {

    fetch('http://localhost:5000/toys', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(newToys)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          Toastify({
            text: "Your Toy Is Added Successfully",
            position: "center", 
            style: {
              background: "linear-gradient(to right, #1f5ebc, #0083d6, #00a1cb, #00b9a4, #2ecc71)",
            }
          }).showToast();
        }
      })
  };

  return (
    <div className='mt-[104px] mb-10 md:mt-[144px] md:mb-20'>
      <div className="shadow-xl p-10">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:gap-y-2'>
            <div className="mb-4">
              <label htmlFor="sellerName" className="block mb-1 font-medium">Seller Name</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('sellerName', { required: true })} />
              {errors.sellerName && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="sellerEmail" className="block mb-1 font-medium">Seller Email</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" defaultValue={user?.email} {...register('sellerEmail')} />
            </div>

            <div className="mb-4">
              <label htmlFor="sellerName" className="block mb-1 font-medium">Toy Name</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('toyName', { required: true })} />
              {errors.sellerName && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="picture" className="block mb-1 font-medium">Picture URL of the toy</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('picture', { required: true })} />
              {errors.picture && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block mb-1 font-medium">Price</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('price', { required: true, min: 0 })} />
              {errors.price && (
                <span className="text-red-500 text-sm">Please enter a valid price</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block mb-1 font-medium">Rating</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('rating', { required: true, min: 0, max: 5 })} />
              {errors.rating && (
                <span className="text-red-500 text-sm">Please enter a rating between 0 and 5</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="quantity" className="block mb-1 font-medium">Available Quantity</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('quantity', { required: true, min: 0 })} />
              {errors.quantity && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="subCategory" className="block mb-[7px] font-medium">Sub-category</label>
              <select className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('subCategory', { required: true })}>
                <option value="Math Toys">Sports Car</option>
                <option value="Language Toys">Mini Fire Truck</option>
                <option value="Science Toys">Police Car</option>
              </select>
              {errors.subCategory && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block mb-1 font-medium">Detail Description</label>
            <textarea rows="4" className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"{...register('description', { required: true })}></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <input className="btn w-full rounded-sm bg-[#2ECC71] text-[#F2F6FC] hover:bg-black capitalize text-base" type="submit" value="Add Toy" />

        </form>
      </div>
    </div>
  );
};

export default AddToys;



