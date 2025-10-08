import Users from "@/lib/ProfessionalData/user-data";

const about = Users[0].about;



const About = () => {
  return (
    <textarea 
  className="w-full h-[330px] p-3 border !border-gray-500"
  value={about} 
  readOnly />
  );
};

export default About;