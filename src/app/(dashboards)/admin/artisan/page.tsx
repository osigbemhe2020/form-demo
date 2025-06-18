"use client";

import ActivatedIcon from "@/components/PageComponents/AdminDashboard/Icons/ActivatedIcon";
import DeactivatedIcon from "@/components/PageComponents/AdminDashboard/Icons/DeactivatedIcon";
import FilterIcon from "@/components/PageComponents/AdminDashboard/Icons/FilterIcon";
import React, { useState } from "react";

const users = [
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Deactivated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Deactivated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Activated",
  },
  {
    id: "#CCCCS45",
    date: "22/05/2025",
    name: "Joshua Livy",
    role: "Artisan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    status: "Deactivated",
  },
];

const filterOptions = ["This Week", "Last Week", "2 weeks ago", "3 weeks ago"];

const ArtisanDashboard = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">
        Artisan Account Oversight
      </h1>

      <div className="relative bg-white pb-6 rounded-xl overflow-x-auto">
        {/* Filter Dropdown */}
        <div className="flex items-center justify-end mr-5 mt-8 mb-4 md:mr-12">
          <div className="relative">
            <button
              className="flex items-center gap-1 cursor-pointer text-sm"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              Filter By <FilterIcon />
            </button>
            {filterOpen && (
              <div className="absolute mt-2 right-0 w-40 bg-white border-2 border-gray-400 shadow-lg rounded-lg text-sm">
                {filterOptions.map((opt, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 cursor-pointer last:border-b-0 border-b-2 border-gray-400"
                    onClick={() => setFilterOpen(false)}
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <table className="w-full text-left text-sm min-w-[640px] bg-white">
          <thead className="text-gray-700">
            <tr>
              <th className="py-3 px-4">User ID</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Name of Specialist</th>
              <th className="py-3 px-4">User status</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td className="py-3 px-4 whitespace-nowrap">{user.id}</td>
                <td className="py-3 px-4 whitespace-nowrap">{user.date}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.avatar}
                      alt="avatar"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="py-5 px-4 whitespace-nowrap flex items-center gap-2">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="17" height="17" rx="8.5" fill="black" />
                    <path
                      d="M8 3C9.38125 3 10.5 4.09389 10.5 5.44444C10.5 6.795 9.38125 7.88889 8 7.88889C6.61875 7.88889 5.5 6.795 5.5 5.44444C5.5 4.09389 6.61875 3 8 3ZM10.5 9.44111C10.5 10.0889 10.325 11.5983 9.13125 13.285L8.625 10.3333L9.2125 9.18444C8.825 9.14167 8.41875 9.11111 8 9.11111C7.58125 9.11111 7.175 9.14167 6.7875 9.18444L7.375 10.3333L6.86875 13.285C5.675 11.5983 5.5 10.0889 5.5 9.44111C4.00625 9.86889 3 10.6389 3 11.5556V14H13V11.5556C13 10.6389 12 9.86889 10.5 9.44111Z"
                      fill="white"
                    />
                  </svg>
                  <span>{user.role}</span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center justify-center gap-2 px-3 py-1 rounded-lg text-white text-xs font-medium ${
                      user.status === "Activated"
                        ? "bg-[#006A05]"
                        : "bg-[#B80405]"
                    }`}
                  >
                    {user.status === "Activated" ? (
                      <ActivatedIcon />
                    ) : (
                      <DeactivatedIcon />
                    )}
                    {user.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="bg-green-700 hover:bg-green-800 cursor-pointer text-white text-sm px-6 py-1.5 rounded-lg">
                    Activate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtisanDashboard;
