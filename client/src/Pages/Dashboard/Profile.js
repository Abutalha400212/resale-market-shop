import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div class="bg-gray-100">
      <div class="w-full text-white bg-main-color">
        <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"></div>
      </div>

      <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
          <div class="w-full md:w-3/12 md:mx-2">
            <div class="bg-white p-3 border-t-4 border-green-400">
              <div class="image overflow-hidden">
                <img
                  class="h-auto w-full mx-auto"
                  src={user?.image_url}
                  alt=""
                />
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                {user?.name}
              </h1>

              <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {user?.additional?.about
                  ? user?.additional?.about
                  : "No Description"}
              </p>
              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto">
                    <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">{user?.createAt}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full md:w-9/12 mx-2 h-64">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">
                      {" "}
                      {user?.additional?.first_name
                        ? user?.additional?.first_name
                        : "-"}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">
                      {" "}
                      {user?.additional?.last_name
                        ? user?.additional?.last_name
                        : "-"}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">
                      {user?.additional?.gender
                        ? user?.additional?.gender
                        : "-"}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">
                      {" "}
                      {user?.additional?.phone ? user?.additional?.phone : "-"}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Current Address</div>
                    <div class="px-4 py-2">
                      {user?.additional?.address
                        ? user?.additional?.address
                        : "-"}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Permanant Address</div>
                    <div class="px-4 py-2">
                      {" "}
                      {user?.additional?.address
                        ? user?.additional?.address
                        : "-"}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email.</div>
                    <div class="px-4 py-2">
                      <a class="text-blue-800" href={`mailto:${user?.email}`}>
                        {user?.email}
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Birthday</div>
                    <div class="px-4 py-2">
                      {" "}
                      {user?.additional?.birthday
                        ? user?.additional?.birthday
                        : "-"}
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="flex justify-end">
              <Link
                className="btn btn-ghost rounded-none m-2"
                to={`/dashboard/profile/update_info?email=${user?.email}`}
              >
                Update Profile
              </Link>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
