import React from 'react'
import Productcard from './component/Productcard'

const Productdata = (props) => {
  return (
     <div className='h-[70vh] w-[85%] flex flex-col items-center justify-center bg-amber-400'>
        <div className='flex items-center w-full justify-between'>
          <h1>{props.product.title}</h1>
          <h1>See all</h1>
        </div>
    <div>
         {/* <Productcard data={props.product.card}/> */}
        { {props.product.card}.map((value,index)=>{
            return(
              <Productcard data={props.product.card}/>  
            )
        })}
    </div>
     </div>
  )
}

export default Productdata