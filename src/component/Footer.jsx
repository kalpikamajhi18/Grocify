import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#F8FAF8] mt-[40px] px-[6em] py-10">

     
      <div className="flex justify-between gap-10">

      
        <div className="w-[30%]">
          <h1 className="text-lg font-semibold mb-4 text-gray-800">
            Useful Links
          </h1>

          <div className="flex justify-between text-gray-500 text-sm">
            <div className="flex flex-col gap-2">
              <p>About</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>FAQs</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Security</p>
              <p>Support</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>Partner</p>
              <p>Sell on Grocify</p>
              <p>Delivery Partner</p>
              <p>Warehouse</p>
            </div>
          </div>
        </div>

      
        <div className="w-[65%]">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Categories
            </h1>
            <span className="text-green-600 text-sm cursor-pointer hover:underline">
              See all
            </span>
          </div>

          <div className="flex justify-between text-gray-500 text-sm">
            
            <div className="flex flex-col gap-2">
              <p>Vegetables & Fruits</p>
              <p>Dairy & Breakfast</p>
              <p>Snacks & Drinks</p>
              <p>Bakery</p>
              <p>Instant Food</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>Tea & Coffee</p>
              <p>Atta, Rice & Dal</p>
              <p>Sauces & Spreads</p>
              <p>Organic Food</p>
              <p>Cleaning Essentials</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>Personal Care</p>
              <p>Baby Care</p>
              <p>Pet Care</p>
              <p>Home & Kitchen</p>
              <p>Stationery</p>
            </div>
          </div>
        </div>

      </div>

      
      <div className="mt-10 border-t pt-5 flex items-center justify-between">

       
        <p className="text-xs text-gray-500">
          © 2026 Grocify Private Limited
        </p>

       
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 font-medium">
            Download App
          </span>

          <img
            className="w-[110px]"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt=""
          />
          <img
            className="w-[110px]"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt=""
          />
        </div>

     
        <div className="flex gap-3">
          <FaFacebookF className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-green-500 hover:text-white cursor-pointer" />
          <FaXTwitter className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-green-500 hover:text-white cursor-pointer" />
          <FaInstagram className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-green-500 hover:text-white cursor-pointer" />
          <FaLinkedinIn className="p-2 text-4xl bg-gray-200 rounded-full hover:bg-green-500 hover:text-white cursor-pointer" />
        </div>

      </div>

    
      <p className="text-xs text-gray-500 mt-4 leading-5">
        Grocify is an independent grocery delivery platform focused on fast and reliable service. 
        This website is a demo project and not affiliated with any other brand or company.
      </p>

    </div>
  );
};

export default Footer;