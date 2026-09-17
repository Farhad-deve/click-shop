import type { ReactNode } from "react";
import { useAppSelector } from "../../shared/lib/hooks";
import { NotFoundPage } from "../../pages/not-found";
import { useAuthInit } from "../../entities/user";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  useAuthInit();
  const token = useAppSelector((state) => state.user.token);

  if (!token) {
    return <NotFoundPage />;
  }

  return <>{children}</>;
};
