import type { ReactNode } from "react";
import { useAppSelector } from "../../shared/lib/hooks";
import { NotFoundPage } from "../../pages/not-found";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const role = useAppSelector((state) => state.user.role);

  if (role !== "admin") {
    return <NotFoundPage />;
  }

  return <>{children}</>;
};
