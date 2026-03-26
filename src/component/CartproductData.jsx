import React, { useEffect, useState } from 'react'
import { FaMinus } from 'react-icons/fa6'
import { MdAdd } from 'react-icons/md'

const CartproductData = (props) => {

    const [data, setData] = useState(props.data)

    useEffect(() => {
        setData(props.data)
    }, [props.data])

    return (
        <div className='p-3 sm:p-4 flex flex-col sm:flex-row gap-4 sm:gap-0 w-full justify-between items-start sm:items-center rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300'>

            {/* LEFT SECTION */}
            <div className='flex w-full sm:w-auto gap-3 sm:gap-4 items-center'>

                {/* IMAGE */}
                <div className='h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0'>
                    <img
                        src={data.img}
                        className='h-full w-full object-cover rounded-lg'
                        alt=""
                    />
                </div>

                {/* TEXT */}
                <div className='flex flex-col'>
                    <div className='text-sm sm:text-base font-medium line-clamp-2'>
                        {data.desc}
                    </div>
                    <div className='text-xs sm:text-sm text-gray-500'>
                        {data.quantity}
                    </div>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className='flex w-full sm:w-auto justify-between sm:justify-end items-center gap-4 sm:gap-6'>

                {/* COUNTER */}
                <button className='inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg bg-[#007400] text-white'>

                    <FaMinus
                        onClick={() => {
                            props.setItems(props.items - 1)
                            props.setPrice(Number(props.price) - Number(data.price))
                            props.removefromcart(data.id)
                        }}
                        className='cursor-pointer'
                    />

                    {data.count}

                    <MdAdd
                        onClick={() => {
                            props.setItems(props.items + 1)
                            props.setPrice(Number(props.price) + Number(data.price))
                            props.addtocart(data.id)
                        }}
                        className='cursor-pointer'
                    />
                </button>

                {/* PRICE */}
                <div className='font-bold text-sm sm:text-base whitespace-nowrap'>
                    ₹{Number(data.price) * Number(data.count)}
                </div>
            </div>
        </div>
    )
}

export default CartproductData