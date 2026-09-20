import { useCreateCategoryForm } from "../model/useCreateCategoryForm";

export const CreateCategoryForm = () => {
  const { register, isLoading, errors, handleSubmit, onSubmit } = useCreateCategoryForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1.25 text-gray-800">
      <div className="flex flex-col">
        <label
          htmlFor="image-input"
          className="text-[14px] font-semibold group"
        >
          Image
          <div className="border-2 border-[#e5e7eb] text-[14px] flex justify-start items-center gap-1 font-medium duration-100 hover:border-indigo-100 group-focus:border-indigo-500 rounded-sm overflow-hidden">
            <div className="px-3.75 min-w-max py-0.75 bg-indigo-100 duration-75 text-[14px] font-medium flex justify-center items-center cursor-pointer hover:bg-indigo-300 active:scale-95">
              Upload image
            </div>
            <div className="text-[12px]">
              <span>Image not uploaded</span>
              {/* or */}
              {/* Name of image */}
            </div>
          </div>
        </label>
        <input
          type="file"
          accept="image/*"
          {...register("image")}
          id="image-input"
          className="outline-none border-2 text-[14px] font-medium duration-100 hidden placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-0.75 py-0.75"
        />
        <div className="min-h-2.5 leading-3">
          <span className="text-[12px] text-red-500 font-medium">
            {errors.image && errors.image.message as string}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="name-input" className="text-[14px] font-semibold">
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          id="name-input"
          autoComplete="name"
          placeholder="Enter the name"
          className="outline-none border-2 text-[14px] border-[#e5e7eb] font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
        />
        <div className="min-h-2.5 leading-3">
          <span className="text-[12px] text-red-500 font-medium">
            {errors.name && errors.name.message}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="description-textarea">Description</label>
        <textarea
          {...register("description")}
          placeholder="Enter the description"
          rows={5}
          id="description-textarea"
          className="outline-none w-full text-[14px] resize-none font-medium border-2 border-[#e5e7eb] duration-100 placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
        ></textarea>
        <div className="min-h-2.5 leading-3">
          <span className="text-[12px] text-red-500 font-medium">
            {errors.description && errors.description.message}
          </span>
        </div>
      </div>

      <hr className="border-[#e5e7eb]" />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-400 flex justify-center text-[14px] items-center gap-1 bg-blue-600 hover:bg-blue-700 active:scale-95 duration-150 text-white font-medium px-3.75 py-1 rounded-sm"
        >
          <span>{isLoading ? "Creating..." : "+ Create"}</span>
        </button>
      </div>
    </form>
  );
};
