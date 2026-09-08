import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Modal } from "../../../shared/ui/Modal";
import { BiX } from "react-icons/bi";

import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { closeLoginModal } from "../../../entities/modal";
import { useState } from "react";

export const LoginModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isLoginModalOpen)
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"login" | "signUp">("signUp")

  const onClose = () => dispatch(closeLoginModal());

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between items-center">
        <p className="font-semibold">
          {mode === "signUp" ? "Create account" : "Login"}
        </p>
        <button
          onClick={onClose}
          type="button"
          className="hover:bg-gray-300 active:scale-95 bg-gray-100 w-6.25 h-6.25 rounded-sm flex justify-center items-center"
        >
          <BiX />
        </button>
      </div>

      <hr className="my-1.25 border-[#e5e7eb]" />

      <div>
        <form className="flex flex-col gap-1.25 text-gray-800">
          {mode === "signUp" && (
            <div className="flex flex-col">
              <label htmlFor="name-input" className="text-[14px] font-medium">
                Your name
              </label>
              <input type="text" name="userName" id="name-input" autoComplete="username" placeholder="Enter the name"
                className="outline-none border-2 border-[#e5e7eb] text-[14px] font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
              />
              <p className="min-h-2.5 leading-3">
                {/* Error message goes here */}
              </p>
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="email-input" className="text-[14px] font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email-input"
              autoComplete="email"
              placeholder="Enter the email"
              className="outline-none border-2 border-[#e5e7eb] text-[14px] font-medium duration-100 placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
            />
            <p className="min-h-2.5 leading-3">
              {/* Error message goes here */}
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="password-input" className="text-[14px] font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password-input"
                placeholder="Enter the password"
                autoComplete="current-password"
                className="outline-none w-full text-[14px] font-medium border-2 border-[#e5e7eb] duration-100 placeholder:text-[14px] hover:border-indigo-100 focus:border-indigo-500 rounded-sm px-1.75 py-0.75"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-0 right-2 bottom-0 text-gray-600"
              >
                {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
              </button>
            </div>
            <p className="min-h-2.5 leading-3">
              {/* Error message goes here */}
            </p>
          </div>

          <hr className="border-[#e5e7eb]" />

          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="cursor-pointer flex justify-center items-center gap-1 bg-indigo-600 w-full hover:bg-indigo-700 active:scale-95 duration-150 text-white font-medium px-2.5 py-1.25 rounded-sm"
          >
            <span>
              {mode === "signUp" ? "Create account" : "Login"}
            </span>
          </button>

          <div className="flex justify-center gap-1 text-[14px]">
            <span>
              {mode === "signUp" ? "Already have an account?" : "Don't have an account?"}
            </span>
            <span
              className="font-medium cursor-pointer hover:text-indigo-600 hover:underline text-indigo-500"
              onClick={() => setMode(mode === "signUp" ? "login" : "signUp")}
            >
              {mode === "signUp" ? "Login now!" : "Sign up now!"}
            </span>
          </div>
        </form>
      </div>
    </Modal>
  );
};
