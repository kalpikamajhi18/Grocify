import React, { useEffect, useState } from 'react'
import Productcard from '../component/Productcard'
import { useOutletContext } from 'react-router-dom'

const Category = () => {

  const { items, setItems, price, setPrice, addtocart, removefromcart } = useOutletContext()

  let id = JSON.parse(localStorage.getItem("prod_id"))
  const [data, setData] = useState(null)

  useEffect(() => {
    let fetchdata = async () => {
      let resp = await fetch('http://localhost:3000/data/' + id)
      let result = await resp.json()
      setData(result)
    }
    fetchdata()
  }, [id])

  return (
    <div className='min-h-screen w-full bg-gray-50 pt-24 pb-10 px-4 sm:px-6 md:px-10 lg:px-16'>

      {/* TITLE */}
      <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-6'>
        {data?.title || "Loading..."}
      </h1>

      {/* GRID */}
      {!data?.card ? (
        <div className='text-gray-500'>Loading products...</div>
      ) : (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>

          {data.card.map((val, indx) => {
            return (
              <Productcard
                key={indx}
                data={val}
                items={items}
                setItems={setItems}
                price={price}
                setPrice={setPrice}
                addtocart={addtocart}
                removefromcart={removefromcart}
              />
            )
          })}

        </div>
      )}

    </div>
  )
}

export default Category