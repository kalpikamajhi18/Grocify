import React, { useContext, useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Productdata from './component/Productdata'
import data from '../utils/Data'
import Footer from './component/Footer'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Product from './pages/Product'


const App = () => {
 
 const{items,setItems,price,setPrice,addtocart,removefromcart} = useOutletContext()
const[data,setData] = useState([])
useEffect(()=>{
  let fetchdata = async ()=>{
        let resp = await fetch('http://localhost:3000/data')
        let result = await resp.json()
        setData(result)
  }
  fetchdata() 
},[])


  return (
    <div className='min-h-screen w-full flex flex-col items-center  '>
      
     <div className='flex flex-col items-center pt-20'>
      <img onClick={()=>{navigate('/product')}} className='curson-pointer w-[85%] hover:scale-[1.025]' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2026-01/Frame-1437256605-2-2.jpg" alt="" />
      <div className='w-[85%] mt-4 ml-8 flex items-center justify-start gap-5'>
        <img onClick={()=>{navigate('/product')}} className='curson-pointer w-[26%] hover:scale-[1.025]' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
        <img onClick={()=>{navigate('/product')}} className='curson-pointer w-[26%] hover:scale-[1.025]' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/pet_crystal_WEB-1.png" alt="" />
         <img onClick={()=>{navigate('/product')}} className='curson-pointer w-[26%] hover:scale-[1.025]' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2026-01/baby_crystal_WEB-1.png" alt="" />
      </div>
     </div>
     <div className='w-[85%] mt-4 flex flex-wrap'>
        {["https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2025-11/Slice-7-1_0.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png",
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png"].map((value,indx)=>{
          return(
               <img key={indx} className='w-[10%] hover:scale-[1.025]'  src={value} alt="" />
          )
        })}
     </div>

      {data.map((val,index)=>{
        return(
          <Productdata key={index} product={val} items={items} setItems={setItems} price={price} setPrice={setPrice} addtocart={addtocart} removefromcart={removefromcart}/>
        )
      })}

      
    </div>

    
  )
  
}
 
export default App