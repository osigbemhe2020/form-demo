import React from 'react'

const simple = {
      borderTop: "1px grey solid"
    };

type props = {
    task:string;
    date:string;
    cost:string;
}


const Transaction = ({task,date,cost}:props) =>{
    return(
        <div className='p-[16px]  flex justify-between gap[20px]' style={simple}>
            <div className='w-[200px]'>
                <h2 className="text-[14px] lg:text-[16px]"> {task} </h2>
                <p className="text-[12px] text-gray-400 mt-[10px]" >  {date} </p>
            </div>
            <div>
                <p className="text-[14px] lg:text-[16px]">{cost}</p>
            </div>
        </div>
    )
}

const Transactions= () => {
  return (
    <div className='bg-white'>
        <p className='mt-40px'>All transactions</p>
        <br/>
        <div >
            <Transaction 
              task="Fatima Bello-AC transactions"
              date="5th feb, 2025"
              cost ="#5000"
            />
            <Transaction 
              task="Fatima Bello-AC transactions"
              date="5th feb, 2025"
              cost ="#5000"
            />
            <Transaction 
              task="Fatima Bello-AC transactions"
              date="5th feb, 2025"
              cost ="#5000"
            />
            <Transaction 
              task="Fatima Bello-AC transactions"
              date="5th feb, 2025"
              cost ="#5000"
            />
            <Transaction 
              task="Fatima Bello-AC transactions"
              date="5th feb, 2025"
              cost ="#5000"
            />
        </div>
    </div>
  )
}

export default Transactions