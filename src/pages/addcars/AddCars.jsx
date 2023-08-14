import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import "toastify-js/src/toastify.css";
import useTitle from "../../components/hooks/useTitle";
import axios from "axios";
import Button from "../../components/button/Button";
import useToast from "../../hooks/useToast";

const AddCars = () => {
  useTitle("Add Cars");
  const { user } = useContext(AuthContext);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (cars) => {
    axios
      .post("https://car-craze-server-omega.vercel.app/cars", cars)
      .then((response) => {
        console.log(response.data);
        if (response.data.insertedId) {
          showToast("Your Toy Is Added Successfully!");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error adding car:", error);
      });
  };

  return (
    <section className="mt-[104px] mb-10 lg:mt-[144px] lg:mb-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-xl p-10 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-10 xl:gap-x-20">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Seller Name</label>
            <input
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
              defaultValue={user?.displayName}
              {...register("sellerName", { required: true })}
            />
            {errors.sellerName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Seller Email</label>
            <input
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
              defaultValue={user?.email}
              {...register("sellerEmail", { required: true })}
            />
            {errors.sellerEmail && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Car Name</label>
            <input
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">
              Picture URL of the Car
            </label>
            <input
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Price</label>
            <input
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
              {...register("price", { required: true, min: 0 })}
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                Please enter a valid price
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Rating</label>
            <input
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
              {...register("rating", { required: true, min: 0, max: 6 })}
            />
            {errors.rating && (
              <span className="text-red-500 text-sm">
                Please enter a rating between 0 and 5
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Available Quantity</label>
            <input
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
              {...register("quantity", { required: true, min: 0 })}
            />
            {errors.quantity && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1.5 font-medium">Category</label>
            <select
              className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
              {...register("category", { required: true })}
            >
              <option value="Sports Car">Sports Car</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Detail Description</label>
          <textarea
            rows="4"
            className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b]"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <Button text="Add Car" />
      </form>
    </section>
  );
};

export default AddCars;
