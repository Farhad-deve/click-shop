import { useLocation } from "react-router-dom";
import { LoginForm } from "../features/auth";
import { Header } from "../widgets/Header";
import { Main } from "../widgets/Main";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "../widgets/Sidebar";
import { Modal } from "../shared/ui/Modal";
import { useAppDispatch, useAppSelector } from "../shared/lib/hooks";
import { closeModal } from "../entities/modal";
import { DeleteProductConfirm } from "../features/delete-product";
import { DeleteCategoryConfirm } from "../features/delete-category";

function App() {
  const location = useLocation();
  const modalType = useAppSelector((state) => state.modal.type);
  const dispatch = useAppDispatch();
  const onClose = () => dispatch(closeModal());
  const isAdminRoute = location.pathname.startsWith("/admin/");

  return (
    <>
      <div className="p-1.25 font-montserrat bg-gray-100 dark:bg-gray-950">
        <Header />

        <div className="flex gap-1.25 relative">
          {isAdminRoute && <Sidebar />}

          <Main />
        </div>
      </div>

      <Modal isOpen={modalType !== null} onClose={onClose}>
        {modalType === "login" && <LoginForm />}
        {modalType === "deleteProduct" && <DeleteProductConfirm />}
        {modalType === "deleteCategory" && <DeleteCategoryConfirm />}
      </Modal>

      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
    </>
  );
}

export default App;
