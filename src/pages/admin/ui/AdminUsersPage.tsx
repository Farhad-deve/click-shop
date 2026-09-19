import { CgCloseR } from "react-icons/cg"; 
import { IoIosCheckbox } from "react-icons/io"; 
import { CgArrowsExchange } from "react-icons/cg"; 
import { useGetAllUsersQuery } from "../../../entities/user/api/usersApi";
import { useState } from "react";
import { Loader } from "../../../shared/ui/Loader";


export const AdminUsersPage = () => {
  const { data: users, isLoading } = useGetAllUsersQuery();
  const [mobileColumn, setMobileColumn] = useState<"userName" | "email">("userName");

  if (isLoading) return <Loader />;

  return (
    <div className="p-1.75 overflow-x-auto">
      <table className="w-full rounded-sm overflow-hidden text-[12px] md:text-[14px]">
        <thead className="border border-blue-200">
          <tr className="bg-blue-100 text-gray-700">
            <th className="py-1 px-2 text-center border-r border-gray-300 w-10">
              #
            </th>
            <th className="py-1 px-2 text-left border-r border-gray-300 hidden sm:table-cell">
              Username
            </th>
            <th className="py-1 px-2 text-left border-r border-gray-300 hidden sm:table-cell">
              Email
            </th>
            <th className="py-1 px-2 text-left border-r border-gray-300 sm:hidden">
              <button type="button" onClick={() => setMobileColumn(mobileColumn === "userName" ? "email" : "userName")} className="flex items-center gap-2" aria-label="Toggle email and username">
                {mobileColumn === "userName" ? "Username" : "Email"}
                <CgArrowsExchange size={20} />
              </button>
            </th>
            <th className="py-1 px-2 text-center border-r border-gray-300">
              Active
            </th>
            <th className="py-1 px-2 text-center">
              Admin
            </th>
          </tr>
        </thead>

        <tbody className="border border-blue-200">
          {users?.map((user, index) => (
            <tr key={user._id} className="border-t border-gray-300 hover:bg-gray-50 cursor-pointer">
              <td className="py-1 font-medium text-center px-2 border-r border-gray-300 w-10">{index + 1}</td>
              <td className="py-1 font-medium px-2 border-r border-gray-300 hidden sm:table-cell">{user.userName}</td>
              <td className="py-1 font-medium px-2 border-r border-gray-300 hidden sm:table-cell">{user.email}</td>
              <td className="py-1 font-medium px-2 border-r border-gray-300 sm:hidden">
                {mobileColumn === "userName" ? user.userName : user.email}
              </td>
              <td className="py-1 font-medium px-2 text-center border-r border-gray-300">
                {user.isActive ? (
                  <div className="text-green-500 flex justify-center items-center text-[16px]">
                    <IoIosCheckbox />
                  </div>
                ) : (
                  <div className="text-red-500 flex justify-center items-center text-[16px]">
                    <CgCloseR />
                  </div>
                )}
              </td>
              <td className="py-1 font-medium px-2 text-center">
                {user.isAdmin ? (
                  <div className="text-green-500 flex justify-center items-center text-[16px]">
                    <IoIosCheckbox />
                  </div>
                ) : (
                  <div className="text-red-500 flex justify-center items-center text-[16px]">
                    <CgCloseR />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

