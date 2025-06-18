import ArtisanIcon from "@/components/PageComponents/AdminDashboard/Icons/ArtisanIcon";
import GroupIcon from "@/components/PageComponents/AdminDashboard/Icons/GroupIcon";
import JobsIcon from "@/components/PageComponents/AdminDashboard/Icons/JobsIcon";
import MoneyIcon from "@/components/PageComponents/AdminDashboard/Icons/MoneyIcon";
import PopularArtisansProfessional from "@/components/PageComponents/AdminDashboard/PopularArtisansProfessional/PopularArtisansProfessional";
import RecentJobs from "@/components/PageComponents/AdminDashboard/RecentJobs/RecentJobs";
import StatCard from "@/components/PageComponents/AdminDashboard/StatCard";

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[20px] font-medium text-[#070F65]">
          Welcome Chris. Here’s what’s happening in KonnectU today.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl mb-6">
        <StatCard
          icon={<ArtisanIcon isStat={true} />}
          title="Total Artisans"
          value="1,247"
          change="12.5%"
          changeType="up"
          footer="+46 this week"
        />
        <StatCard
          icon={<JobsIcon />}
          title="Active Jobs"
          value="482"
          change="8.2%"
          changeType="down"
          footer="-12 this week"
        />
        <StatCard
          icon={<GroupIcon />}
          title="Total Clients"
          value="3,565"
          change="12.5%"
          changeType="up"
          footer="+46 this week"
        />
        <StatCard
          icon={<MoneyIcon />}
          title="Total Revenue"
          value="1,247"
          change="2.1%"
          changeType="down"
          footer="+2,300 this week"
        />
      </div>
      <PopularArtisansProfessional />
      <RecentJobs />
    </div>
  );
};

export default AdminDashboard;
