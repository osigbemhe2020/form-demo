import React from "react";

interface ArtisanProfile {
  id: number;
  name: string;
  service: string;
  rating: number;
  avatar: string;
  taskCompletionRate: number;
  uncompletedRate: number;
}

const ArtisanCard: React.FC<{ profile: ArtisanProfile }> = ({ profile }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const isFilled = index < rating;

      return (
        <span key={index} className="text-sm">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.08 11.7439L8 10.2639L9.92 11.7439L9.2 9.30393L11 8.02393H8.76L8 5.54393L7.24 8.02393H5L6.8 9.30393L6.08 11.7439ZM3.06 16.0239L4.92 9.94393L0 6.42393H6.08L8 0.0239258L9.92 6.42393H16L11.08 9.94393L12.94 16.0239L8 12.2639L3.06 16.0239Z"
              fill={isFilled ? "#FFB400" : "#D1D5DB"} // yellow if filled, gray if not
            />
          </svg>
        </span>
      );
    });
  };

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-medium text-gray-900">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.service}</p>
          <div className="flex items-center gap-1 mt-1">
            {renderStars(profile.rating)}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <span className="text-sm text-[#070F65]">
            Task Completion In Due Date
          </span>
          <div className="flex flex-row items-center gap-3">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#006A05] h-full rounded-full transition-all duration-300"
                style={{ width: `${profile.taskCompletionRate}%` }}
              ></div>
            </div>
            <span className="text-sm text-[#070F65]">
              {profile.taskCompletionRate}%
            </span>
          </div>
        </div>

        <div>
          <span className="text-sm text-[#070F65]">Uncompleted task</span>
          <div className="flex flex-row items-center gap-3">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-[#B80405] h-full rounded-full transition-all duration-300"
                style={{ width: `${profile.uncompletedRate}%` }}
              ></div>
            </div>
            <span className="text-sm text-[#070F65]">
              {profile.uncompletedRate}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PopularArtisansProfessional: React.FC = () => {
  const artisans: ArtisanProfile[] = [
    {
      id: 1,
      name: "Rachel Sam",
      service: "Laundry",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      taskCompletionRate: 80,
      uncompletedRate: 20,
    },
    {
      id: 2,
      name: "Rachel Sam",
      service: "Laundry",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      taskCompletionRate: 80,
      uncompletedRate: 20,
    },
    {
      id: 3,
      name: "Rachel Sam",
      service: "Laundry",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      taskCompletionRate: 80,
      uncompletedRate: 20,
    },
    {
      id: 4,
      name: "Rachel Sam",
      service: "Laundry",
      rating: 4,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      taskCompletionRate: 80,
      uncompletedRate: 20,
    },
  ];

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#070F65] mb-6 text-left">
          Popular Artisans/Professional
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} profile={artisan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularArtisansProfessional;
