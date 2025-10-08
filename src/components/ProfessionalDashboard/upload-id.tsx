import React from 'react'
import { FaUpload } from "react-icons/fa";
import PopUp from './popup';

const simple = {
      border: "2px grey solid"
    };

  type modalProps = {
  showModal : boolean;
  setShowModal: (showModal:boolean) => void
}

const UploadId = ({showModal, setShowModal}:modalProps) => {
  return (
    <>
     <div className='text-center py-[40px] rounded-[8px]' style={simple}>
                   <FaUpload className='w-[60px] h-[60px] mx-auto my-4 text-[#006A05] '/>
                   <h4 className='font-semibold text-[16px]'>Click the icon to upload</h4>
                   <p className=' text-[12px]'>Or drag and drop</p>
                   <p className=' text-[12px]'>PDF,JPG or PNG(max. 25MB)</p>
            </div>
        <PopUp 
         msg="Upload Sucessfully" 
         desc ="You have sucessfully uploaded your ID" 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} />
      </>
  )
}

export default UploadId