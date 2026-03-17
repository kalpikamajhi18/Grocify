import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Productcard from '../component/Productcard'
import CartproductData from '../component/CartproductData'

const Cart = () => {
  const { items, setItems, price, setPrice, productdata, addToCart, removeFromCart } = useOutletContext()
  const [products, setProducts] = useState([])

  let filterData = (arr) => {
    let updatedData = []
    productdata.forEach((val) => {
      let product = arr.find((items) => {
        return items.id === val.prod_id
      })
      updatedData.push({ ...product, count: val.quantity })
    })


    setProducts(updatedData)
  }



  let adjustData = (data) => {
    let arr = []
    data.forEach((value) => {
      arr.push(...value.card)
    })
    filterData(arr)
  }


  useEffect(() => {
    let fetchdata = async () => {
      let resp = await fetch('http://localhost:3000/data')
      let res = await resp.json()
      adjustData(res)
    }
    fetchdata()

  }, [products])

  return (
   <div className='flex flex-col p-20'>
      {products.map((value)=>{
        return <CartproductData items={items} setItems={setItems} data={value} price={price} setPrice={setPrice} addToCart={addToCart} removeFromCart={removeFromCart}/>
      })}
    </div>
  )
}

export default Cart