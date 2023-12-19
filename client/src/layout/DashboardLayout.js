import { IoMdHome } from "react-icons/io";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { DashboardItems } from "../constant/dashboard.items";
const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const items =
    user.role === "admin"
      ? DashboardItems.adminItems
      : user.role === "seller"
      ? DashboardItems.sellerItems
      : DashboardItems.userItems;

  return (
    // <div className="drawer">
    //   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //   <div className="drawer-content flex flex-col">
    //     <div className="flex-none lg:hidden">
    //       <label
    //         htmlFor="my-drawer-3"
    //         aria-label="open sidebar"
    //         className="btn btn-square btn-ghost"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           className="inline-block w-6 h-6 stroke-current"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h16M4 18h16"
    //           ></path>
    //         </svg>
    //       </label>
    //     </div>
    //     <div className="hidden md:grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
    //       <div class="relative bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out">
    //         <div class="space-y-6 md:space-y-10 mt-10">
    //           <h1 class="font-bold text-4xl text-center md:hidden">
    //             D<span class="text-teal-600">.</span>
    //           </h1>
    //           <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
    //             Dashboard
    //             <span class="text-teal-600">.</span>
    //           </h1>
    //           <div id="profile" class="flex flex-col text-center items-center">
    //             <div className="avatar online mb-2">
    //               <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-1">
    //                 <img src={user?.image_url} alt="" />
    //               </div>
    //             </div>
    //             <div>
    //               <h2 class="font-medium text-xs md:text-sm  text-teal-500">
    //                 {user.name}
    //               </h2>
    //               <p class="text-xs text-gray-500 ">{user.role}</p>
    //             </div>
    //           </div>
    //           <div class="menu w-56 gap-y-1">
    //             {items.map((item, i) => (
    //               <Link
    //                 key={i}
    //                 to={item.href}
    //                 class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
    //               >
    //                 {item.icon}
    //                 <span class="">{item.label}</span>
    //               </Link>
    //             ))}
    //           </div>
    //           <div class="menu w-56 md:absolute md:bottom-3 bottom-0 left-2 right-0 ">
    //             <Link
    //               to="/"
    //               class="text-sm font-medium text-gray-700 py-2 px-3 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
    //             >
    //               <IoMdHome className="inline-block text-xl mr-1" />
    //               <span class="">Back To Home</span>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>{" "}
    //     </div>{" "}
    //     <div className="lg:col-span-3">
    //       <Outlet />
    //     </div>
    //   </div>{" "}
    //   <div className="drawer-side">
    //     <label
    //       htmlFor="my-drawer-3"
    //       aria-label="close sidebar"
    //       className="drawer-overlay"
    //     ></label>
    //     <ul className="menu p-4 w-80 min-h-full bg-base-200">
    //       <div class="space-y-6 md:space-y-10 mt-10">
    //         <h1 class="font-bold text-4xl text-center md:hidden">
    //           D<span class="text-teal-600">.</span>
    //         </h1>
    //         <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
    //           Dashboard
    //           <span class="text-teal-600">.</span>
    //         </h1>
    //         <div id="profile" class="flex flex-col text-center items-center">
    //           <div className="avatar online mb-2">
    //             <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-1">
    //               <img src={user?.image_url} alt="" />
    //             </div>
    //           </div>
    //           <div>
    //             <h2 class="font-medium text-xs md:text-sm  text-teal-500">
    //               {user.name}
    //             </h2>
    //             <p class="text-xs text-gray-500 ">{user.role}</p>
    //           </div>
    //         </div>
    //         <div class="menu w-56 gap-y-1">
    //           {items.map((item, i) => (
    //             <Link
    //               key={i}
    //               to={item.href}
    //               class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
    //             >
    //               {item.icon}
    //               <span class="">{item.label}</span>
    //             </Link>
    //           ))}
    //         </div>
    //         <div class="menu w-56 md:absolute md:bottom-3 bottom-0 left-2 right-0 ">
    //           <Link
    //             to="/"
    //             class="text-sm font-medium text-gray-700 py-2 px-3 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
    //           >
    //             <IoMdHome className="inline-block text-xl mr-1" />
    //             <span class="">Back To Home</span>
    //           </Link>
    //         </div>
    //       </div>
    //     </ul>
    //   </div>
    // </div>
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center relative">
        <label
          htmlFor="my-drawer-2"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost absolute left-0 top-0 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>

        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div class="relative menu bg-white shadow-xl h-screen md:block border border-r-2 px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out">
          <div class="space-y-6 md:space-y-10 mt-10">
            <h1 class="font-bold text-4xl text-center md:hidden">
              D<span class="text-teal-600">.</span>
            </h1>
            <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
              Dashboard
              <span class="text-teal-600">.</span>
            </h1>
            <div id="profile" class="flex flex-col text-center items-center">
              <div className="avatar online mb-2">
                <div className="w-12 rounded-full ring ring-success ring-offset-base-100 ring-offset-1">
                  <img src={user?.image_url} alt="" />
                </div>
              </div>
              <div>
                <h2 class="font-medium text-xs md:text-sm  text-teal-500">
                  {user.name}
                </h2>
                <p class="text-xs text-gray-500 ">{user.role}</p>
              </div>
            </div>
            <div class="menu w-56 gap-y-1">
              {items.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                >
                  {item.icon}
                  <span class="">{item.label}</span>
                </Link>
              ))}
            </div>
            <div class="menu w-56 md:absolute md:bottom-3 bottom-0 left-2 right-0 ">
              <Link
                to="/"
                class="text-sm font-medium text-gray-700 py-2 px-3 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <IoMdHome className="inline-block text-xl mr-1" />
                <span class="">Back To Home</span>
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default DashboardLayout;
