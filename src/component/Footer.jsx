import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#F8FAF8] mt-10 px-4 sm:px-8 md:px-16 lg:px-24 py-10">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* USEFUL LINKS */}
        <div className="w-full lg:w-[30%]">
          <h1 className="text-lg font-semibold mb-4 text-gray-800">
            Useful Links
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-500 text-sm">
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

        {/* CATEGORIES */}
        <div className="w-full lg:w-[70%]">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold text-gray-800">
              Categories
            </h1>
            <span className="text-green-600 text-sm cursor-pointer hover:underline">
              See all
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-500 text-sm">
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

      {/* BOTTOM SECTION */}
      <div className="mt-10 border-t pt-5 flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between text-center md:text-left">

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500">
          © 2026 Grocify Private Limited
        </p>

        {/* APP DOWNLOAD */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="text-sm text-gray-600 font-medium">
            Download App
          </span>

          <div className="flex gap-2">
            <img
              className="w-[100px] sm:w-[110px]"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt=""
            />
            <img
              className="w-[100px] sm:w-[110px]"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt=""
            />
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3">
          <FaFacebookF className="p-2 text-3xl sm:text-4xl bg-gray-200 rounded-full hover:bg-green-500 hover:text-white cursor-pointer transition" />
          <FaXTwitter className="p-2 text-3xl sm:text-4xl bg-gray-200 rounded-full hover:bg-green-500 hover:text-white cursor-pointer transition" />
          <FaInstagram className="p-2 text-3xl sm:text-4xl bg-gray-200 rounded-full hover:bg-green-500 hover:text-white cursor-pointer transition" />
          <FaLinkedinIn className="p-2 text-3xl sm:text-4xl bg-gray-200 rounded-full hover:bg-green-500 hover:text-white cursor-pointer transition" />
        </div>

      </div>

      {/* DISCLAIMER */}
      <p className="text-xs text-gray-500 mt-4 leading-5 text-center md:text-left">
        Grocify is an independent grocery delivery platform focused on fast and reliable service.
        This website is a demo project and not affiliated with any other brand or company.
      </p>

    </div>
  );
};

export default Footer;