import PopUp from '@/components/ProfessionalDashboard/popup';


type modalProps = {
  showModal : boolean;
  setShowModal: (showModal:boolean) => void
}

const Help = ({showModal, setShowModal}:modalProps) => {
  return (
    <div className="relative z-0 p-4"> {/* z-0 to ensure Help stays behind modal */}
      {/* Form fields */}
      <div className="flex flex-row gap-4 mt-6 h-[75px]">
        <div className="flex flex-col gap-2 w-full">
          <label>First name</label>
          <input
            type="text"
            name="fname"
            placeholder="daniel"
            className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label>Sur name</label>
          <input
            type="text"
            name="sname"
            placeholder="daniel"
            className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <label>Mobile Number</label>
        <input
          type="text"
          name="mobile"
          className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
        />
      </div>

      <div className="flex flex-col gap-2 mt-6">
        <label>Complaints :</label>
        <textarea
          className="w-full h-[150px] border border-gray-500 rounded-md p-2 text-sm resize-none"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      {/* Show popup */}
      <PopUp 
      msg="Message Delivered" 
      desc ="You have sucessfully sent a message to the help center" 
      isOpen={showModal} 
      onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Help;
