import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
const Navbar = () => {
    return (
        <div className='w-full h-22 bg-[#FCFCFC] flex items-center justify-between px-6 border-b border-[#E5E5E5] overflow-hidden fixed'>
            <img className='w-[10%]' src="data:image/png;base64,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" alt="" />
            <div className='flex flex-col items-start justify-center gap-0.3 '>
                <h1 className='font-bold text-lg'>Delivery in 12 minutes</h1>
                <p>4VQG+69M, Lalanda Vihar Tilw...
                </p>
            </div>
            <input type="text" placeholder='Search...' className='w-[40%] flex items-start justify-start bg-[#F8F8F8] px-[20px] py-[13px] border border-[#E5E5E5] rounded-xl ' />
            <a href="" className='text-xl font-xl text-neutral-600'>Login</a>
            <button className='flex items-center justify-center gap-2 text-white font-medium text-[18px] px-[15px] py-[10px] bg-[#E5E5E5] rounded-lg'><BsCart2 /> My cart</button>
        </div>
    )
}

export default Navbar