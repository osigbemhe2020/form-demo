import AdminClientIcon from "@/components/PageComponents/AdminDashboard/Icons/AdminClientIcon";
import React from "react";
import { FaWrench } from "react-icons/fa6";
import ArtisanIcon from "../Icons/ArtisanIcon";

interface Job {
  id: number;
  title: string;
  client: string;
  artisan: string;
  dueDate: string;
  price: string;
  status: "In Progress" | "Completed" | "Pending";
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-[#070F6533] text-[#070F65]";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-1 border-b border-gray-400 mb-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex-1">
          <div className="flex  flex-row justify-between items-start gap-4 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <span
              className={`inline-flex px-3 py-2 rounded-full text-sm font-medium self-start ${getStatusColor(
                job.status
              )}`}
            >
              {job.status}
            </span>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-1 text-gray-600">
              <AdminClientIcon />
              <span className="text-sm">
                <span className="font-semibold">Client:</span> {job.client}
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <ArtisanIcon isStat={false} />
              <span className="text-sm">
                <span className="font-semibold">Artisan:</span> {job.artisan}
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-2">
            <p className="text-xs text-gray-500">
              <span className="font-medium">Due Date:</span> {job.dueDate}
            </p>
            <p className="text-2xl font-medium text-[#070F65] ">
              {job.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentJobs: React.FC = () => {
  const jobs: Job[] = [
    {
      id: 1,
      title: "Custom Dining Table",
      client: "Robert Johnson",
      artisan: "John, Carpenter",
      dueDate: "14th June, 2025",
      price: "#20,000",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Custom Dining Table",
      client: "Robert Johnson",
      artisan: "John, Carpenter",
      dueDate: "14th June, 2025",
      price: "#20,000",
      status: "In Progress",
    },
  ];

  return (
    <div className="mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-center mb-6 gap-2 pb-2 border-b border-gray-400">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#070F65]">
            Recent Jobs
          </h1>
          <button className="text-[#070F65] cursor-pointer font-medium text-sm sm:text-base">
            View all
          </button>
        </div>

        <div className="space-y-0">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
