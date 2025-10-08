import React from 'react'

type props = {
  date : string; 
  page :string;
};

const Header = ({date, page}:props) =>{
    return(
  <div className="w-full mb-10 flex flex-wrap justify-between">
        <p className="text-lg font-semibold text-[#006A05] mr-[40px]">{page}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    )
}
export default Header