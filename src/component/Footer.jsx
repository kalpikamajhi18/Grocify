import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='h-full w-full px-[7.2em] pb-3 '>
            <div className='flex items-start justify-between w-full mt-[5em]'>
                <div className='flex flex-col items-start justify-between gap-5 w-[35%]'>
                    <h1 className='text-start text-xl font-medium'>Useful Links</h1>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex flex-col items-start justify-between text-neutral-500 text-[16px] gap-1.5'>

                            <h3>Blog</h3>
                            <h3>Privacy</h3>
                            <h3>Terms</h3>
                            <h3>FAQs</h3>
                            <h3>Security</h3>
                            <h3>Contact</h3>
                        </div>
                        <div className='flex flex-col items-start justify-between text-neutral-500 text-[16px] gap-1.5'>
                            <h3>Partner</h3>
                            <h3>Franchise</h3>
                            <h3>Seller</h3>
                            <h3>Warehouse</h3>
                            <h3>Deliver</h3>
                            <h3>Resources</h3>
                        </div>
                        <div className='flex flex-col items-start justify-between text-neutral-500 text-[16px] gap-1.5'>
                            <h3>Recipes</h3>
                            <h3>Bistro</h3>
                            <h3>District</h3>
                            <h3>Blinkit Ambulance</h3>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-start justify-between gap-5 w-[60%]'>
                    <div className='flex items-center justify-center gap-4 '>
                        <h1 className='text-start text-xl font-medium'>Categories</h1>
                        <a href="" className='font-light text-xl text-[#318616]'>See all</a>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex flex-col items-start justify-between text-neutral-500 text-[16px] gap-1.5'>
                            <h3>Vegetables & Fruits</h3>
                            <h3>Cold Drinks & Juices</h3>
                            <h3>Bakery & Biscuits</h3>
                            <h3>Dry Fruits, Masala & Oil</h3>
                            <h3>Paan Corner</h3>
                            <h3>Pharma & Wellness</h3>
                            <h3>Personal Care</h3>
                            <h3>Magazines</h3>
                            <h3>Electronics & Electricals</h3>
                            <h3>Toys & Games</h3>
                            <h3>Rakhi Gifts</h3>
                        </div>
                        <div className='flex flex-col items-start justify-between text-neutral-500 text-[16px] gap-1.5'>
                            <h3>Dairy & Breakfast</h3>
                            <h3>Instant & Frozen Food</h3>
                            <h3>Sweet Tooth</h3>
                            <h3>Sauces & Spreads</h3>
                            <h3>Organic & Premium</h3>
                            <h3>Cleaning Essentials</h3>
                            <h3>Pet Care</h3>
                            <h3>Kitchen & Dining</h3>
                            <h3>Stationery Needs</h3>
                            <h3>Print Store</h3>
                        </div>
                        <div className='flex flex-col items-start justify-between text-neutral-500 text-[16px] gap-1.5'>
                            <h3>Munchies</h3>
                            <h3>Tea, Coffee & Milk Drinks</h3>
                            <h3>Atta, Rice & Dal</h3>
                            <h3>Chicken, Meat & Fish</h3>
                            <h3>Baby Care</h3>
                            <h3>Home Furnishing & Decor</h3>
                            <h3>Beauty & Cosmetics</h3>
                            <h3>Fashion & Accessories</h3>
                            <h3>Books</h3>
                            <h3>E-Gift Cards</h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full h-[5.5em] bg-[#FCFCFC] flex items-center justify-between mt-[3em] px-[10em]'>
                <p className='text-[13px] text-neutral-500 '>© Blink Commerce Private Limited, 2016-2026</p>
                <div className='flex items-center justify-between w-[65%]'>
                    <div className='flex items-center justify-between w-[58%]'>
                        <h1 className='font-semibold text-md text-neutral-500'>Download App</h1>
                        <img className='w-[30%] object-cover' src="https://blinkit.com/d61019073b700ca49d22.png" alt="" />
                        <img className='w-[30%] object-cover' src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" />
                    </div>
                    <div className='flex items-center justify-between pl-8 w-[55%]'>
                        <FaFacebookF className='p-5 rounded-full bg-black text-white text-2xl' />
                        <FaXTwitter className='p-5 rounded-full bg-black text-white text-2xl' />
                        <FaInstagram className='p-5 rounded-full bg-black text-white text-2xl' />
                        <FaLinkedinIn className='p-5 rounded-full bg-black text-white text-2xl' />
                        <FaThreads className='p-5 rounded-full bg-black text-white text-2xl' />
                    </div>
                    <div></div>
                </div>
              
            </div>
              <p className='w-full text-start text-neutral-500 text-md mt-4 leading-5'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
        </div>
    )
}

export default Footer