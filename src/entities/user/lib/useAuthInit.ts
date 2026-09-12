import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import { useGetCurrentUserQuery } from "../api/usersApi";
import { setCurrentUser } from "../model/userSlice";

export const useAuthInit = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const { data: currentUser, isLoading } = useGetCurrentUserQuery(undefined, { skip: !token, });

  useEffect(() => {
    if (currentUser) {
      dispatch(setCurrentUser(currentUser));
    }
  }, [currentUser]);

  return { isLoading, token }
};
