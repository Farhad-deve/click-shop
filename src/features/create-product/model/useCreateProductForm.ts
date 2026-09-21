import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../../entities/product/api/productApi";
import { productSchema, type productFormData } from "./productSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../../shared/lib/utils";

export const useCreateProductForm = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<productFormData>({
    resolver: zodResolver(productSchema),
  });

  const imageFiles = watch("image");
  const imagePreview = imageFiles?.[0]
    ? URL.createObjectURL(imageFiles[0])
    : null;
  const imageName = imageFiles?.[0] ? imageFiles[0].name : null;

  const onSubmit = async (data: productFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    formData.append("price", data.price.toString());
    formData.append("rate", data.rate.toString());
    formData.append("categoryId", data.categoryId);

    try {
      await createProduct(formData).unwrap();
      toast.success("Product created");
      reset();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    onSubmit,
    imagePreview,
    imageName,
  };
};
