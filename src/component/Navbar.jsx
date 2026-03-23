import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsCart2, BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
    let navigate = useNavigate()
    return (
  <div className="w-full h-[85px] bg-white shadow-sm border-b border-neutral-200 flex items-center justify-between px-10 fixed top-0 z-50">

      {/* LEFT: Logo + Location */}
      <div className="flex items-center gap-6">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="/logo.png" className="w-21" alt="logo" />
          <h1 className="text-xl font-bold text-green-700 ">Grocify</h1>
        </div>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-gray-300"></div>

        {/* Location */}
        <div className="flex flex-col leading-tight cursor-pointer">
          <span className="text-xs text-gray-500">Deliver to</span>
          <span className="text-sm font-semibold text-gray-800">
            Lalanda Vihar Tilwara...
          </span>
        </div>
      </div>

      {/* CENTER: Search */}
      <div className="w-[40%] relative ">
        <BsSearch className="absolute left-4 top-4.5 text-gray-400" />

        <input
          onClick={() => navigate("/s")}
          type="text"
          placeholder="Search for groceries, fruits, vegetables..."
          
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-green-500 cursor-pointer"
        />
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-5">

        {/* Login */}
        <button className="text-gray-700 font-medium hover:text-green-600 transition">
          Login
        </button>

        {/* Cart */}
        <button
          onClick={() => navigate("/cart")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            props.items === 0
              ? "bg-gray-200 text-gray-500"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          <BsCart2 className="text-lg" />

          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs">My Cart</span>
            <span className="text-sm font-semibold">
              {props.items} items
            </span>
          </div>

          {/* Price */}
          {props.price > 0 && (
            <span className="ml-2 text-sm font-bold">
              ₹{props.price}
            </span>
          )}
        </button>
      </div>
    </div>
    )
}

export default Navbar