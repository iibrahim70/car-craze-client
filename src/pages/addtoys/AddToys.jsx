import React from 'react';
import { useForm } from "react-hook-form";


const AddToys = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='mt-[104px] mb-10 md:mt-[144px] md:mb-20'>
      <div className="max-w-xl mx-auto shadow-lg p-10 min-h-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-4">
            <label htmlFor="picture" className="block mb-1 font-medium">Picture URL of the toy</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:ring" {...register('picture', { required: true })}/>
            {errors.picture && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="sellerName" className="block mb-1 font-medium">Seller Name</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:ring"{...register('sellerName', { required: true })} />
            {errors.sellerName && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="sellerEmail" className="block mb-1 font-medium">Seller Email</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:ring"{...register('sellerEmail', { required: true })} />
            {errors.sellerEmail && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="subCategory" className="block mb-1 font-medium">Sub-category</label>
            <select className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:ring"{...register('subCategory', { required: true })}>
              <option value="">Select a sub-category</option>
              <option value="Math Toys">Math Toys</option>
              <option value="Language Toys">Language Toys</option>
              <option value="Science Toys">Science Toys</option>
            </select>
            {errors.subCategory && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-1 font-medium">Price</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:ring"{...register('price', { required: true, min: 0 })} />
              {errors.price && (
                <span className="text-red-500 text-sm">Please enter a valid price</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block mb-1 font-medium">Rating</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:ring"{...register('rating', { required: true, min: 0, max: 5 })} />
              {errors.rating && (
                <span className="text-red-500 text-sm">Please enter a rating between 0 and 5</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="quantity" className="block mb-1 font-medium">Available Quantity</label>
              <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:ring"{...register('quantity', { required: true, min: 0 })} />
              {errors.quantity && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block mb-1 font-medium">Detail Description</label>
            <textarea rows="4" className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:ring"{...register('description', { required: true })}></textarea>
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