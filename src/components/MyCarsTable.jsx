import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const MyCarsTable = ({ item, handleDelete, handleUpdate }) => {
  return (
    <>
      <tr>
        <td>{item?.sellerName}</td>
        <td>{item?.name}</td>
        <td>{item?.category}</td>
        <td>${item?.price}</td>
        <td>{item?.quantity}</td>

        <td>
          <MdDelete
            onClick={() => handleDelete(item?._id)}
            className="w-6 h-6 cursor-pointer"
          />
        </td>

        <td>
          <FaRegEdit
            onClick={() => handleUpdate(item?._id)}
            className="w-5 h-5 cursor-pointer"
          />
        </td>
      </tr>
    </>
  );
};

export default MyCarsTable;
