
import Image from 'next/image';
import Users from "@/lib/ProfessionalData/user-data";

type props = {
  text: string;
  title: string;
  image: string; // ✅ now a string path
};

const pot = Users[0].portfolio;

const Work = ({image, title, text }: props) => {
  return (
      <div className="w-[140px]">
    <Image
      src={image}
      alt={title}
      width={140}
      height={140} 
      className="rounded-[10px]"/>
      <h2 className="mt-2 mb-1 font-semibold !text-[16px]">{title}</h2>
     <p className="text-sm text-gray-600">{text}</p>
     </div>
    
  );
};

const Portfolio = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-[19px] h-auto lg:h-[500px]">
      {pot.map((item, index) => (
        <Work
          key={index}
          image ={item.photo}
          title={item.title}
          text={item.description}
        />
      ))}
    </div>
  );
};


export default Portfolio;
