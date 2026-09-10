import { useState, type SubmitEvent } from "react";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../../entities/user/api/usersApi";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { closeLoginModal } from "../../../entities/modal";
import { toast } from "react-toastify";
import { setUserLoggedIn, setUserRegistered } from "../../../entities/user";
import { getErrorMessage, isValidEmail, isValidLength } from "../../../shared/lib/utils";

export const useAuthForm = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isLoginModalOpen);

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const [mode, setMode] = useState<"login" | "signUp">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onClose = () => dispatch(closeLoginModal());

  const validation = (email: string, password: string): boolean => {
    let isValid = true;

    if (!isValidEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (!isValidLength(password, 8, 20)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be 8-20 characters long",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    return isValid;
  };

  const handleLogin = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validation(email, password)) {
      return;
    }

    try {
      const response = await login({ email, password }).unwrap();
      if (!response) {
        return;
      }
      dispatch(setUserLoggedIn(response));
      toast.success("You have successfully logged in");
      onClose();
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  const handleSignUp = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validation(email, password)) return;
    if (!isValidLength(userName, 3, 20)) {
      setErrors((prev) => ({
        ...prev,
        userName: "User name must be 3-20 characters long",
      }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, userName: "" }));
    }

    try {
      const response = await register({ email, password, userName }).unwrap();
      if (!response) return;
      dispatch(setUserRegistered(response));
      toast.success("You have successfully registered");
      onClose();
      setEmail("");
      setPassword("");
      setUserName("");
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };


  return {
    email, setEmail,
    userName, setUserName,
    password, setPassword,
    errors, setErrors,
    mode, setMode,
    showPassword, setShowPassword,
    isLoginLoading, isRegisterLoading,
    handleLogin, handleSignUp,
    onClose, isOpen
  }
};
