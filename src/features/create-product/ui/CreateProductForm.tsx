import { BiImage } from "react-icons/bi";
import { useCreateProductForm } from "../model/useCreateProductForm";
import { useGetCategoriesQuery } from "../../../entities/category";

export const CreateProductForm = () => {
  const {
    register,
    isLoading,
    errors,
    handleSubmit,
    onSubmit,
    imagePreview,
    imageName,
  } = useCreateProductForm();
  const { data: categories } = useGetCategoriesQuery();

  return (
    <div>
      <div className="flex justify-center items-center">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview image"
            className="h-45 p-1.25 object-contain border rounded-sm border-[#e5e7eb] dark:border-indigo-600"
          />
        ) : (
          <div className="w-62.5 h-45 text-gray-500 text-[20px] flex justify-center items-center border border-[#e5e7eb] dark:border-indigo-600 rounded-sm">
            <BiImage />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1.25 text-gray-800">
        <div className="flex flex-col">
          <label
            htmlFor="image-input"
            className="text-[14px] font-semibold group dark:text-white"
          >
            Image
            <div className="border-2 border-[#e5e7eb] dark:border-indigo-600 text-[14px] flex justify-start items-center gap-1 font-medium duration-100 hover:border-indigo-100 dark:hover:border-indigo-400 group-focus:border-indigo-500 rounded-sm overflow-hidden">
              <div className="px-3.75 min-w-max py-0.75 bg-indigo-100 dark:text-black duration-75 text-[14px] font-medium flex justify-center items-center cursor-pointer hover:bg-indigo-300 dark:hover:bg-indigo-600 dark:hover:text-white active:scale-95">
                Upload image
              </div>
              <div className="text-[12px]">
                {imageName ? (
                  <span>{imageName}</span>
                ) : (
                  <span>Image not uploaded</span>
                )}
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
          <label htmlFor="name-input" className="text-[14px] font-semibold dark:text-white">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            id="name-input"
            autoComplete="name"
            placeholder="Enter the name"
            className="outline-none border-2 text-[14px] dark:text-white border-[#e5e7eb] dark:border-indigo-600 font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 dark:hover:border-indigo-400 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
          />
          <div className="min-h-2.5 leading-3">
            <span className="text-[12px] text-red-500 font-medium">
              {errors.name && errors.name.message}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description-textarea" className="text-[14px] font-semibold dark:text-white">Description</label>
          <textarea
            {...register("description")}
            placeholder="Enter the description"
            rows={5}
            id="description-textarea"
            className="outline-none w-full text-[14px] dark:text-white resize-none font-medium border-2 border-[#e5e7eb] dark:border-indigo-600 duration-100 placeholder:text-[14px] hover:border-indigo-100 dark:hover:border-indigo-400 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
          ></textarea>
          <div className="min-h-2.5 leading-3">
            <span className="text-[12px] text-red-500 font-medium">
              {errors.description && errors.description.message}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="price-input" className="text-[14px] font-semibold dark:text-white">
            Price
          </label>
          <input
            type="number"
            id="price-input"
            {...register("price", { valueAsNumber: true })}
            className="outline-none border-2 border-[#e5e7eb] dark:border-indigo-600 text-[14px] dark:text-white font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 dark:hover:border-indigo-400 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
            placeholder="Enter the price"
          />
          <div className="min-h-2.5 leading-3">
            <span className="text-[12px] text-red-500 font-medium">
              {errors.price && errors.price.message}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="rating-input" className="text-[14px] font-semibold dark:text-white">
            Rating
          </label>
          <input
            type="number"
            id="rating-input"
            {...register("rate", { valueAsNumber: true })}
            className="outline-none border-2 border-[#e5e7eb] dark:border-indigo-600 text-[14px] dark:text-white font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 dark:hover:border-indigo-400 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
            placeholder="Enter the rating"
          />
          <div className="min-h-2.5 leading-3">
            <span className="text-[12px] text-red-500 font-medium">
              {errors.rate && errors.rate?.message}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="category-input" className="text-[14px] font-semibold dark:text-white">
            Categories
          </label>
          <select id="category-input" {...register("categoryId")} className="outline-none border-2 border-[#e5e7eb] dark:border-indigo-600 text-[14px] font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 dark:hover:border-indigo-400 focus:border-indigo-500 rounded-sm px-1.75 py-0.75">
            <option value="" className="dark:text-white">---</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <div className="min-h-2.5 leading-3">
            <span className="text-[12px] text-red-500 font-medium">
              {errors.categoryId && errors.categoryId.message}
            </span>
          </div>
        </div>

        <hr className="border-[#e5e7eb] dark:border-indigo-600" />

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
    </div>
  );
};
