import Swal from "sweetalert2";

const useSwal = () => {
  const showSwal = (title, text, confirmButtonText, cancelButtonText) => {
    return Swal.fire({
      title: title || "Are you sure?",
      text: text || "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmButtonText || "Yes, delete it!",
      cancelButtonText: cancelButtonText || "Cancel",
    }).then((result) => {
      return result.isConfirmed;
    });
  };

  return {
    showSwal,
  };
};

export default useSwal;
