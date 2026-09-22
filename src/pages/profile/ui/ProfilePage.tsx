import { BiCheckDouble } from "react-icons/bi";
import {
  useGetAllOrdersQuery,
  useGetCurrentUserQuery,
} from "../../../entities/user/api/usersApi";
import { motion } from "motion/react";
import { MdOutlineHistory } from "react-icons/md";
import { Loader } from "../../../shared/ui/Loader";
import { useParams } from "react-router-dom";

export const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: allOrders, isLoading } = useGetAllOrdersQuery();
  const { data: currentUser, isLoading : isCurrentUserLoading } = useGetCurrentUserQuery();

  const userOrders = allOrders?.filter((order) => order.userId === id)
  const isUserActive = currentUser?.isActive;

  if (isLoading || isCurrentUserLoading) return <Loader />;

  return (
    <>
      <div className="p-1.5">
        <motion.div
          className="flex justify-between items-center gap-0.5 flex-col border-b border-[#e5e7eb] p-1.75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`flex-1 text-[14px] border rounded-sm py-1.25 flex-col w-full px-2.5 ${isUserActive ? "bg-green-100 border-green-200" : "bg-red-100 border-red-200"} font-medium flex justify-center items-center`}
          >
            <div className="flex justify-center items-center gap-1">
              <span>Account: </span>
              <span
                className={`${isUserActive ? "text-green-600" : "text-red-600"} font-semibold`}
              >
                {isUserActive ? (
                  <span className="flex items-center gap-1">
                    Verified
                    <BiCheckDouble size={20} />
                  </span>
                ) : (
                  "Not verified !"
                )}
              </span>
            </div>  
            {!isUserActive && (
              <p className="text-[12px] font-medium text-gray-600 text-center">An activation link has been sent to your email, click it to activate your account.</p>
            )}
          </div>

          <div className="flex-1 text-[14px] dark:text-white font-medium flex justify-start items-center gap-1">
            <span>User name: </span>
            <span className="font-semibold">{currentUser?.userName}</span>
          </div>

          <div className="flex-1 text-[14px] dark:text-white font-medium flex justify-start items-center gap-1">
            <span>Email: </span>
            <span className="font-semibold">{currentUser?.email}</span>
          </div>
        </motion.div>

        {/* Show empty div or show user orders */}
        <motion.div
          className="flex justify-center gap-2 items-center flex-col text-gray-500 min-h-[calc(100vh-200px)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-[30px]">
            <MdOutlineHistory />
          </div>
          <p className="text-[14px] font-medium">User order history is empty</p>
        </motion.div>

        
      </div>
    </>
  );
};
