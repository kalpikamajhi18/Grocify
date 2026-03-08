import React from 'react'
import { GrFormClock } from "react-icons/gr";

const Productcard = (props) => {
  return (
    <div className='w-[12em] h-[41vh] flex flex-col items-center px-4 pb-2 rounded-lg border border-[#E5E5E5] '>
      <img className=' w-[9 0%] hover:scale-[1.1]' src={props.data.img} alt="" />
      <div className='flex flex-col items-start justify-between h-full w-full'> 
       <div className='flex items-center justify-center px-1 py-0.5 bg-[#F8F8F8] rounded-md text-[10px] font-medium text-neutral-800'><GrFormClock className='text-neutral-600 text-[15px]'/>{props.data.time}</div>
       <h1 className='text-neutral-900 text-sm font-medium'>{props.data.desc}</h1>
       <p className='text-neutral-500 text-sm mt-4'>{props.data.quantity}</p>
       <div className='flex items-center justify-between w-full'>
        <h1 className='text-neutral-900 text-sm font-medium'>{props.data.price}</h1>
        <button className='px-[20px] py-[5px] rounded-md border border-[#318616] text-[#318616] font-medium hover:bg-[#318616] hover:text-white'>ADD</button>
        </div>
      </div>
    </div>
  )
}

export default Productcard