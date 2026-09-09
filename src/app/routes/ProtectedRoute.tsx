import type { ReactNode } from "react";
import { useAppSelector } from "../../shared/lib/hooks";
import { NotFoundPage } from "../../pages/not-found";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAdmin = useAppSelector((state) => state.user.currentUser?.isAdmin);

  if (!isAdmin) {
    return <NotFoundPage />;
  }

  return <>{children}</>;
};
