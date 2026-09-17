import { BiX } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { closeModal } from "../../../entities/modal";
import { FaTrash } from "react-icons/fa";
import { useDeleteCategoryMutation } from "../../../entities/category/api/categoryApi";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../../shared/lib/utils";

export const DeleteCategoryConfirm = () => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector((state) => state.modal.categoryId);
  const [deleteCategory] = useDeleteCategoryMutation();
  const onClose = () => dispatch(closeModal());

  const handleDelete = async () => {
    if (!categoryId) return;
    try {
      await deleteCategory(categoryId).unwrap();
      toast.success("Product deleted");
      onClose();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Delete category</p>
        <button
          onClick={onClose}
          type="button"
          className="hover:bg-gray-300 active:scale-95 bg-gray-100 w-6.25 h-6.25 cursor-pointer rounded-sm flex justify-center items-center"
        >
          <BiX />
        </button>
      </div>

      <hr className="my-1.25 border-[#e5e7eb]" />

      <div>
        <p className="text-[14px] font-medium">
          Are you sure you want to delete this category?
        </p>
        <div className="flex justify-end gap-1.25 mt-2.5">
          <button
            type="button"
            onClick={onClose}
            className="text-[12px] font-semibold cursor-pointer flex justify-center  gap-1 items-center px-2.5 py-1 rounded-sm border border-blue-500 bg-blue-500 hover:bg-blue-600 hover:shadow-sm duration-75 active:scale-95 text-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="cursor-pointer text-[12px] font-semibold flex justify-center  gap-1 items-center px-2.5 py-1 rounded-sm border border-red-500 bg-red-500 hover:bg-red-600 hover:shadow-sm duration-75 active:scale-95 text-white"
          >
            <div className="flex justify-center items-center text-[14px]">
              <FaTrash />
            </div>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
