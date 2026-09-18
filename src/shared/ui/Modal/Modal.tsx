import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className={`${isOpen ? "block" : "hidden"} fixed z-20 inset-0 bg-black/35 backdrop-blur-[1px] py-5 items-center justify-center overflow-y-auto transition-all duration-250 font-montserrat`}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-125 w-[90%] z-30 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-max p-3.75 rounded-md shadow-sm border border-[#e5e7eb]"
        >
          <div>
            {children}
          </div>
        </motion.div>
      </div>
    </>
  );
};
