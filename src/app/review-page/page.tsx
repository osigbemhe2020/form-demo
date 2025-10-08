import Review from "@/components/ProfessionalDashboard/review";
import TopBox from "@/components/ProfessionalDashboard/topbox";

const Page = () => {
  return (
<div className="ml-[-25px]">
    <h2 className="!ml-[40px] !my-[30px] text-[#006A05] text-[24px] font-medium">Profile Settings</h2>
      <TopBox /> 
      <Review/>
</div>
  );
};

export default Page;