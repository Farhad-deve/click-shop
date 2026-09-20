import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "../../../entities/category";
import { categorySchema, type categoryFormData } from "./categorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../../shared/lib/utils";

export const useCreateCategoryForm = () => {
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<categoryFormData>({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = async (data: categoryFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    try {
      await createCategory(formData).unwrap();
      toast.success("Category created");
      reset();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return { register, handleSubmit, errors, isLoading, onSubmit };
};
