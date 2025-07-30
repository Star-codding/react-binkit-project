import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiAt } from "react-icons/ci";

export default function Footer() {
    return (
        <>
            <div className='lg:flex justify-evenly max-w-[1500px] mx-auto p-[20px] '>
                <div>
                    <h1 className='font-bold text-[22px] mb-[20px]'>Useful Links</h1>
                    <div className='grid grid-cols-3 gap-[20px]  max-w-[350px] p-[10px]'>
                        <div>
                            <ul className='leading-7 opacity-[0.5]'>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>Press</li>
                                <li>Lead</li>
                                <li>Value</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='leading-7 opacity-[0.5]'>
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>FAQs</li>
                                <li>Security</li>
                                <li>Mobile</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='leading-7 opacity-[0.5]'>
                                <li>Partner</li>
                                <li>Franchise</li>
                                <li>Seller</li>
                                <li>Warehouse</li>
                                <li>Deliver</li>
                                <li>Resources</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-[22px] mb-[20px] '>Categories <span className='ml-[15px] text-[green]'> See all</span></h1>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-[20px] justify-between max-w-[700px] p-[10px_20px]'>
                        <div>
                            <ul className='leading-7 opacity-[0.5]'>
                                <li>Vegetables & Fruits</li>
                                <li>Cold Drinks & Juices</li>
                                <li>Bakery & Biscuits</li>
                                <li>Dry Fruits, Masala & Oil</li>
                                <li>Paan Corner</li>
                                <li>Pharma & Wellness</li>
                                <li>Ice Creams & Frozen </li>
                                <li>Beauty & Cosmetics</li>
                                <li>Electronics & Electricals</li>
                                <li>Toys & Games</li>
                            </ul>
                        </div>

                        <div>
                            <ul className='leading-7 opacity-[0.5]'>
                                <li>Vegetables & Fruits</li>
                                <li>Cold Drinks & Juices</li>
                                <li>Bakery & Biscuits</li>
                                <li>Dry Fruits, Masala & Oil</li>
                                <li>Paan Corner</li>
                                <li>Pharma & Wellness</li>
                                <li>Ice Creams & Frozen </li>
                                <li>Beauty & Cosmetics</li>
                                <li>Electronics & Electricals</li>
                                <li>Toys & Games</li>
                            </ul>
                        </div>

                        <div>
                            <ul className='leading-7 opacity-[0.5]'>
                                <li>Vegetables & Fruits</li>
                                <li>Cold Drinks & Juices</li>
                                <li>Bakery & Biscuits</li>
                                <li>Dry Fruits, Masala & Oil</li>
                                <li>Paan Corner</li>
                                <li>Pharma & Wellness</li>
                                <li>Ice Creams & Frozen </li>
                                <li>Beauty & Cosmetics</li>
                                <li>Electronics & Electricals</li>
                                <li>Toys & Games</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-3 justify-center max-w-[1100px]  mx-auto mt-[50px]'>
                <div className='w-20%  opacity-[0.6] p-[10px] text-[14px]  '>
                    © Blink Commerce Private Limited, 2016-2025
                </div>
                <div className='flex w-[25%] justify-between  p-[10px] items-center'>
                    <div className='opacity-[0.6] text-[14px]'>Download App</div>
                    <div><img src="images/app.png" alt="" className='w-[70px]' /></div>
                    <div><img src="images/play.png" alt="" className='w-[70px]' /></div>
                </div>
                <div className='flex max-w-[25%]  justify-evenly items-center'>
                    <div className=' text-[35px]'><FaFacebook /></div>
                    <div className='text-[27px] p-[5px] border rounded-[20px]'><FaTwitter /></div>
                    <div className='text-[27px] p-[5px] border rounded-[20px]'><FaInstagram /></div>
                    <div className='text-[27px] p-[5px] border rounded-[20px]'><FaLinkedinIn /></div>
                    <div className='text-[27px] p-[5px] border rounded-[20px]'><CiAt /></div>
                </div>
            </div>

            <div className='max-w-[1250px] md:mx-auto opacity-[0.6] mx-auto mt-[20px]'>
                “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
            </div>
        </>
    )
}
