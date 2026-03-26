import React from 'react'
import Productcard from './Productcard'
import { useNavigate } from 'react-router-dom'

const Productdata = (props) => {
  let navigate = useNavigate()

  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-16 mt-8 flex flex-col gap-4'>

      {/* HEADER */}
      <div className='flex items-center justify-between'>
        <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>
          {props.product.title}
        </h1>

        <h1
          onClick={() => {
            localStorage.setItem("prod_id", JSON.stringify(props.product.id))
            navigate('/category')
          }}
          className='cursor-pointer text-sm sm:text-base md:text-lg font-medium text-[#318616]'
        >
          See all
        </h1>
      </div>

      {/* SCROLL SECTION */}
      <div className='w-full scroll-hide overflow-x-auto scrollbar-hide'>

        <div className='flex gap-4 min-w-max'>

          {props.product.card.map((value, indx) => {
            return (
              <div key={indx} className=' min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px]'>
                <Productcard
                  data={value}
                  items={props.items}
                  setItems={props.setItems}
                  price={props.price}
                  setPrice={props.setPrice}
                  addtocart={props.addtocart}
                  removefromcart={props.removefromcart}
                />
              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default Productdata