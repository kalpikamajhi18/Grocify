import React from 'react'
import { BsCart2, BsSearch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  let navigate = useNavigate()

  return (
    <div className="w-full bg-white shadow-sm border-b border-neutral-200 fixed top-0 z-50">

      <div className="flex flex-col lg:flex-row lg:items-center justify-between px-4 sm:px-6 lg:px-10 py-3 gap-3 lg:gap-0">

        {/* LEFT: Logo + Location */}
        <div className="flex items-center justify-between lg:justify-start gap-4 w-full lg:w-auto">

          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src="/logo.png" className="w-16 sm:w-20" alt="logo" />
            <h1 className="text-lg sm:text-xl font-bold text-green-700">
              Grocify
            </h1>
          </div>

          {/* Location (hide on very small screens) */}
          <div className="hidden sm:flex flex-col leading-tight cursor-pointer border-l pl-4">
            <span className="text-xs text-gray-500">Deliver to</span>
            <span className="text-sm font-semibold text-gray-800 truncate max-w-[160px]">
              Lalanda Vihar Tilwara...
            </span>
          </div>

        </div>

        {/* CENTER: Search */}
        <div className="w-full lg:w-[40%] relative">
          <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            onClick={() => navigate("/s")}
            type="text"
            placeholder="Search groceries..."
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-green-500 text-sm sm:text-base"
          />
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center justify-between lg:justify-end gap-4 w-full lg:w-auto">

          {/* Login */}
          <button className="text-sm sm:text-base text-gray-700 font-medium hover:text-green-600 transition">
            Login
          </button>

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-lg transition ${
              props.items === 0
                ? "bg-gray-200 text-gray-500"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            <BsCart2 className="text-lg" />

            {/* Hide text on very small screens */}
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-xs">My Cart</span>
              <span className="text-sm font-semibold">
                {props.items} items
              </span>
            </div>

            {/* Price */}
            {props.price > 0 && (
              <span className="text-xs sm:text-sm font-bold">
                ₹{props.price}
              </span>
            )}
          </button>

        </div>

      </div>
    </div>
  )
}

export default Navbar