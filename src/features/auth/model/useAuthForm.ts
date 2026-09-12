import {
  useLoginMutation,
  useRegisterMutation,
} from "../../../entities/user/api/usersApi";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { closeLoginModal } from "../../../entities/modal";

import { authSchema, type AuthFormData } from "./authSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { setUserLoggedIn } from "../../../entities/user";
import { toast } from "react-toastify";
import { getErrorMessage } from "../../../shared/lib/utils";

export const useAuthForm = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isLoginModalOpen);

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const onClose = () => dispatch(closeLoginModal());

  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"login" | "signUp">("login");

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthFormData) => {
    if (mode === "signUp" && (!data.userName || data.userName.length < 3)) {
      return;
    }

    try {
      const response = await login(data).unwrap();
      dispatch(setUserLoggedIn(response));
      toast("You have successfully logged in");
      onClose();
      reset();
    } catch (error) {
      toast(getErrorMessage(error));
    }
  };

  return {
    registerField,
    handleSubmit,
    errors,
    reset,
    onClose,
    isOpen,
    onSubmit,
    showPassword,
    setShowPassword,
    mode,
    setMode,
    login,
    register,
    isLoginLoading,
    isRegisterLoading,
  };
};
