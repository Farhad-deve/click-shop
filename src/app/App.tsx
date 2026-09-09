import { useAuthInit } from "../entities/user";
import { LoginModal } from "../features/auth";
import { Header } from "../widgets/Header";
// import { Sidebar } from '../widgets/Sidebar';
import { Main } from "../widgets/Main";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  useAuthInit();

  return (
    <>
      <div className="p-1.25 font-montserrat bg-gray-100 dark:bg-gray-950">
        <Header />

        <div className="flex gap-1.25 relative">
          {/* <Sidebar /> */}

          <Main />
        </div>

        <LoginModal />
      </div>

      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
    </>
  );
}

export default App;
