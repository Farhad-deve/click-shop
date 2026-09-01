import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../../../Header";
// import { Sidebar } from "../../../Sidebar";
import { AnimatePresence } from "motion/react";
import LoadingPage from "../../../../pages/LoadingPage";

export const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="p-1.25 font-montserrat bg-gray-100">
      <Header />

      <div className="flex gap-1.25 relative">
        {/* <Sidebar /> */}

        <main className="bg-white flex-1 rounded-md relative min-h-[calc(100vh-77px)] max-h-[calc(100vh-77px)] shadow-sm overflow-y-auto overflow-x-hidden mt-1.25">
          {isLoading ? (
            <LoadingPage />
          ) : (
            <AnimatePresence mode="wait">
              <Outlet />
            </AnimatePresence>
          )}
        </main>
      </div>
    </div>
  );
};
