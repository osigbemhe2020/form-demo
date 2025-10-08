type props = {
  name : string;
  //holder: string;  
  label:string;
};

const InputRow = ({name,label}:props) =>{
    return(
      <div  className="flex flex-col gap-2 mt-6">
            <label>{label}</label>
            <input
              type="text"
              name={name}
              className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
            />
          </div>
    )
}

export default InputRow