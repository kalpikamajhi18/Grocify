import React, { useState } from 'react'
import Navbar from './src/component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './src/component/Footer'

const MainOutlet = () => {
  const [items,setItems] = useState(0)
  const[price,setPrice] = useState(0)
  const[productdata,setProductdata] = useState([])

  let addtocart = (id)=>{
    setProductdata ((prev)=>{
      let checkproduct = prev.find((val)=>{
        return val.prod_id===id
      })
 console.log(checkproduct, prev)
      if(checkproduct){
        return prev.map((item)=>{
          return item.prod_id===id? {...prev, quantity:items.quantity+1} : item
        })
      }
      else{
        return [...prev, {prod_id:id, quantity:1}]
      }
    })
   

  }
  

  let removefromcart = (id)=>{
      
  }
  return (
    <>
    <Navbar items = {items} price={price} />
    <Outlet context={{items,setItems,price,setPrice,addtocart,removefromcart}} />
    <Footer/>
    </>
  )
}

export default MainOutlet