import useTitle from "../hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import clsx from "clsx";
import Button from "../components/Button";
import useSwal from "../hooks/useSwal";
import MyCarsTable from "../components/MyCarsTable";

const MyCars = () => {
  useTitle("My Cars");
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [modalCar, setModalCar] = useState(null);
  const swal = useSwal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { isLoading, error, data, refetch } = useQuery(["myCars"], () =>
    axios
      .get(
        `https://car-craze-server-omega.vercel.app/mycars?email=${user?.email}`
      )
      .then((res) => res.data)
  );

  const handleDelete = (id) => {
    swal
      .showSwal("Are you sure?", "You won't be able to revert this!")
      .then((confirmed) => {
        if (confirmed) {
          axios
            .delete(`https://car-craze-server-omega.vercel.app/mycars/${id}`)
            .then((response) => {
              if (response.data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                refetch();
              }
            })
            .catch((error) => {
              console.error("Error deleting car:", error);
            });
        }
      });
  };

  const handleUpdate = (id) => {
    setIsOpen(true);
    const data = myCars.find((car) => car._id === id);
    setModalCar(data);
  };

  const onSubmit = (formData) => {
    try {
      swal
        .showSwal(
          "Are you sure?",
          "You won't be able to revert this!",
          "Update"
        )
        .then((confirmed) => {
          if (confirmed) {
            axios
              .put(
                `https://car-craze-server-omega.vercel.app/mycars/${modalCar._id}`,
                formData
              )
              .then((response) => {
                if (response.data.modifiedCount > 0) {
                  Swal.fire(
                    "Updated!",
                    "Your file has been updated.",
                    "success"
                  );
                  refetch();
                  handleClose();
                }
              });
          } else {
            handleClose();
          }
        });
    } catch (error) {
      console.error("Error updating car:", error);
      swal.showSwal(
        "Error",
        "An error occurred while updating the car",
        "error"
      );
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    reset();
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );

  return (
    <>
      {data.length > 0 ? (
        <div className="mt-[104px] lg:mt-[144px] mb-10 lg:mb-20 wrapper">
          <div className="overflow-x-auto">
            <table className="table w-full z-0">
              {/* table header */}
              <thead>
                <tr>
                  <th>Seller Name</th>
                  <th>Car Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {data.map((item) => (
                  <MyCarsTable
                    key={item._id}
                    cars={item}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div
            onClick={handleClose}
            className={clsx(
              "fixed w-full h-full top-0 right-0 bottom-0 left-0 z-[1000] bg-white/20 backdrop-blur-lg",
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          ></div>

          <div
            className={clsx(
              "fixed w-full md:w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-10 shadow-xl z-[1001] bg-white",
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          >
            <div className="flex justify-end">
              <button onClick={handleClose}>❌</button>
            </div>

            <h2 className="font-bold my-2 text-center text-xl capitalize">
              Update {modalCar?.name}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
              <div className="mb-4">
                <label className="block mb-1 font-medium">Price</label>
                <input
                  type="number"
                  defaultValue={modalCar?.price}
                  className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b bg-white"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Available Quantity
                </label>
                <input
                  type="number"
                  defaultValue={modalCar?.quantity}
                  className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b bg-white"
                  {...register("quantity", { required: true })}
                />
                {errors.quantity && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-medium">
                  Detail Description
                </label>
                <textarea
                  type="text"
                  rows="4"
                  defaultValue={modalCar?.description}
                  className="w-full border-b border-black py-2 px-3 focus:outline-none focus:border-b bg-white"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <Button size="full">Submit</Button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          No cars available.
        </div>
      )}
    </>
  );
};

export default MyCars;
