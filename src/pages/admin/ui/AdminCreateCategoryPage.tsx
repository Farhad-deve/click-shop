import { BiImage } from "react-icons/bi";
import { CreateCategoryForm } from "../../../features/create-category";

export const AdminCreateCategoryPage = () => {

  return (
    <div className="p-1.75">
      <div className="flex justify-center items-center">
        {/* This div or image */}
        <div className="w-62.5 h-45 text-gray-500 text-[20px] flex justify-center items-center border border-[#e5e7eb] rounded-sm">
          <BiImage />
        </div>
      </div>

      <CreateCategoryForm />
    </div>
  );
};
