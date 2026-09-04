import { Outlet, useNavigation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import LoadingPage from "../../../pages/LoadingPage";

export const Main = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <main className="bg-white dark:bg-gray-900 flex-1 rounded-md relative min-h-[calc(100vh-75px)] max-h-[calc(100vh-77px)] shadow-sm overflow-y-auto overflow-x-hidden mt-1.25">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      )}
    </main>
  );
};
