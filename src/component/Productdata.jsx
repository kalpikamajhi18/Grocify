import React from 'react'
import Productcard from './Productcard'
import { useNavigate } from 'react-router-dom'

const Productdata = (props) => {
  let navigate = useNavigate()


  return (
    <div className='h-[53vh] w-[85%] mt-8  flex flex-col gap-3 items-center justify-center '>
      <div className='flex items-center w-full justify-between'>
        <h1 className='text-[27px] font-semibold pl-5'>{props.product.title}</h1>
        <h1 onClick={() => {
          localStorage.setItem("prod_id", JSON.stringify(props.product.id))
          navigate('/category')
        }}
          className='cursor-pointer text-2xl font-medium text-[#318616] pr-5 '>See all</h1>
      </div>
      <div className='w-full overflow-x-scroll scroll-hide'>
        <div className='h-full w-[163%] flex items-center justify-between'>
          {props.product.card.map((value, indx) => {
            return (
              <Productcard key={indx} data={value} items={props.items} setItems={props.setItems} price={props.price} setPrice={props.setPrice} addtocart={props.addtocart} removefromcart={props.removefromcart} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Productdata