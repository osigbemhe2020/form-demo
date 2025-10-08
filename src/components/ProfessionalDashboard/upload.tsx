import React from 'react'
import { FaUpload } from "react-icons/fa";


const simple = {
      border: "2px grey solid"
    };

const Upload = () => {
  return (
    <div>
        <div className='text-center py-[40px] rounded-[8px] ' style={simple}>
               <FaUpload className='w-[60px] h-[60px] mx-auto my-4 text-[#006A05] '/>
               <h4 className='font-semibold text-[16px]'>Click the icon to upload</h4>
               <p className=' text-[12px]'>Or drag and drop</p>
               <p className=' text-[12px]'>PDF,JPG or PNG(max. 25MB)</p>
        </div>
        <div className='mt-[30px]'>
          <div  className="flex flex-col gap-2 mt-6 mb-6">
            <label>Title</label>
            <input
              type="text"
              name="potfolio"
              className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
            />
          </div>
            <p className='mb-[30px]'>Description</p>
            <hr className='mb-[5px] border-gray-500'/>
           <textarea 
            name="message" 
            maxLength={500} 
            className="w-full h-[150px] border border-gray-300 rounded-md p-2 text-sm resize-none"
            placeholder="Type your message here..."
          >
            
          </textarea>

        </div>
    </div>
  )
}

export default Upload