import type { ReactNode } from "react";
import { useAppSelector } from "../../shared/lib/hooks";
import { NotFoundPage } from "../../pages/not-found";
import { useAuthInit } from "../../entities/user";
import { Loader } from "../../shared/ui/Loader";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading } = useAuthInit();
  const token = useAppSelector((state) => state.user.token);

  if (isLoading) {
    return <Loader />;
  }

  if (!token) {
    return <NotFoundPage />;
  }

  return <>{children}</>;
};
