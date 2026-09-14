import { useLocation } from "react-router-dom";
import { LoginModal } from "../features/auth";
import { Header } from "../widgets/Header";
import { Main } from "../widgets/Main";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "../widgets/Sidebar";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <div className="p-1.25 font-montserrat bg-gray-100 dark:bg-gray-950">
        <Header />

        <div className="flex gap-1.25 relative">
          {isAdminRoute && <Sidebar />}

          <Main />
        </div>

        <LoginModal />
      </div>

      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
    </>
  );
}

export default App;
