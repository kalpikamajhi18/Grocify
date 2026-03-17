import React, { useEffect } from 'react'
import { useState } from 'react'
import Productcard from '../component/Productcard'
import { useOutletContext } from 'react-router-dom'

const Category = () => {
     const{items,setItems,price,setPrice,addtocart,removefromcart} = useOutletContext()
    let id = JSON.parse(localStorage.getItem("prod_id"))
      const[data,setData] = useState({})


    useEffect(()=>{
        let fetchdata = async ()=>{
            let resp = await fetch('http://localhost:3000/data/'+id)
            let result = await resp.json()
            setData(result)
        }
        fetchdata()
    },[])
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-start p-[5em] gap-5 ' >
        {data.title}
        <br />
        <div className='flex flex-wrap gap-5'>
            {!data?.card? <></>: data.card.map((val,indx)=>{
                 return <Productcard key={indx} data={val} items={items} setItems={setItems} price={price} setPrice={setPrice} addtocart={addtocart} removefromcart={removefromcart}/>
            })}

        </div>
    </div>
  )
}

export default Category