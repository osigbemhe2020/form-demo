import React from 'react'

const Project = () => {
  return (
    <div className="bg-white w-full sm:w-[366px] px-2 sm:px-[35px] pt-[40px] pb-[60px]">
  <h2 className="mb-[34px] text-[18px] lg:text-[20px] text-gray-600">Project Preferences</h2>
                <input
                    type="radio"
                    id="optionA"
                    name="options"
                    value="both"
                    className="w-[20px] h-[20px] accent-green-500"
                />
                <label htmlFor="option1" className="ml-2 text-gray-700 text-[14px] lg:text-[16px]">
                    Short term and long term
                </label><br/><br/>
                <input
                    type="radio"
                    id="optionB"
                    name="options"
                    value="short"
                    className="w-[20px] h-[20px] accent-green-500"
                />
                <label htmlFor="option1" className="ml-2 text-gray-700 text-[14px] lg:text-[16px]">
                    Short term
                </label><br/><br/>
                <input
                    type="radio"
                    id="optionC"
                    name="options"
                    value="Lomg"
                    className="w-[20px] h-[20px] accent-green-500"
                />
                <label htmlFor="option1" className="ml-2 text-gray-700 text-[14px] lg:text-[16px]">
                   Long term
                </label><br/><br/>
   </div>
  )
}

export default Project