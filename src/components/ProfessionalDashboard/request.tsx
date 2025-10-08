const Request = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[732px] gap-8 h-[470px] ">
        <div className='leftblock'>
                         <p className="font-semibold">Personal</p>
                        <div  className="flex flex-col gap-2 mt-6">
                            <input
                                type="text"
                                name="birth"
                                className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
                                />
                        </div>
                        <div  className="flex flex-col gap-2 mt-6">
                            <label>Mobile Number</label>
                            <input
                                type="text"
                                name="birth"
                                className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
                                />
                        </div>
                        <div  className="flex flex-col gap-2 mt-4">
                            <input
                                type="text"
                                name="birth"
                                className="h-15 w-full border px-2 rounded-[8px] text-center text-border-gray-200 border-gray-200"
                                placeholder="Add note"
                                />
                        </div>
                    </div>
                    <div>
                        <p>contact</p>
                        
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
                                    name="fname"
                                    placeholder="daniel"
                                    className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
                                    />
                            </div>
                        </div>
                        <div  className="flex flex-col gap-2 mt-6">
                            <label>Mobile Number</label>
                            <input
                                type="text"
                                name="birth"
                                className="h-12 w-full border px-2 rounded-[8px] border-gray-500"
                                />
                        </div>
                    </div>
                </div>
  )
}

export default Request