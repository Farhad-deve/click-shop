import {
  useLoginMutation,
  useRegisterMutation,
} from "../../../entities/user/api/usersApi";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { closeLoginModal } from "../../../entities/modal";

import {
  loginSchema,
  signUpSchema,
  type LoginFormData,
  type SignUpFormData,
} from "./authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useAuthForm = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isLoginModalOpen);

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const onClose = () => dispatch(closeLoginModal());

  return {
    onClose, isOpen
  }
};

export const useAuthForm = (mode: "login" | "signUp") => {
  const schema = mode === "signUp" ? signUpSchema : loginSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData | SignUpFormData>({
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, errors, reset };
};
