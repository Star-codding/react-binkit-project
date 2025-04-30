import React, { useState } from 'react'
import { FaCaretDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { Link } from 'react-router-dom';
import "../Header.css"

import logo from "/public/images/logo.png"

export default function Header() {
  const [showmodal, setshowmodal] = useState(false)
  // console.log(showmodal)
  const modalwork = () => {
    setshowmodal(!showmodal)
  }
  return (
    <>
      <div className={`modal ${showmodal == false ? "" : "active"} z-[99] `}>
        <div className='bg-[rgb(245,247,253)] h-[100vh]'>
          <div className='flex justify-between p-[10px] items-center bg-[white]'>
            <div className='font-bold'>My Cart</div>
            <div onClick={()=>setshowmodal(false)}><GiTireIronCross /></div>
          </div>
          <div className='flex mt-[30px] p-[15px] bg-white rounded-[15px] m-[15px] '>
            <div>
              <img src="public/images/logo.png" alt="" className='w-[10px]' />
            </div>
            <div>
              <div className='font-bold text-[18px]'>Delivery in 8 minutes</div>
              <div className='text-[#ccc] text-[15px]'>Shipment of 1 item</div>

              <div className='flex justify-between pt-[20px] w-[350px] p-[15px]  items-center'>
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=135/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314" className='w-[70px]' alt="" />
                <div className='text-[12px] font-bold'>
                  <p>Amul Salted Butter</p>
                  <p>100g</p>
                  <p>$60</p>
                </div>
                <div className='flex  w-[80px] justify-around h-[30px] rounded-[10px] text-[14px] bg-[green] text-white font-bold items-center'>
                  <button className='text-[18px]'>-</button>
                  <button>1</button>
                  <button className='text-[18px]'>+ </button>
                </div>
              </div>
            </div>
          </div>

          <div className='p-[15px] bg-white m-[15px] rounded-[15px] text-[rgb(54,54,54)] '>
            <div className='16px font-bold'>Bill details</div>

            <div className='flex items-center justify-between p-[5px] text-[15px] font-bold  m-[0px]'>
              <div className='flex items-center'><CiViewList /><span className='ml-[5px]'>Items total</span></div>
              <div>₹60</div> 
            </div>

            <div className='flex items-center justify-between  text-[15px] font-bold p-[0px] m-[0px]'>
              <div className='flex items-center'><MdDeliveryDining /><span className='ml-[5px]'>Delivery charges</span></div>
              <div>₹25</div> 
            </div>

            <div className='flex items-center justify-between  text-[15px] font-bold p-[0px] m-[0px]'>
              <div className='flex items-center'><LiaRupeeSignSolid /><span className='ml-[5px]'>Handling charges</span></div>
              <div>₹60</div> 
            </div>

            <div className='flex items-center justify-between  text-[17px] font-bold p-[0px] m-[0px]'>
              <div ><span className='ml-[5px] '>Grand Total</span></div>
              <div>₹90</div> 
            </div>


          </div>



          <div className='bg-white m-[15px] p-[15px] rounded-[10px]'>
            <div className='text-[15px] font-bold'>Cancellation Policy</div>
            <p className='text-[14px] text-[rgb(54,54,54)]'>
            Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
          </div>



          <div className='fixed bottom-0 w-[400px] bg-white'>
            <div className='flex justify-between p-[5px_15px] border m-[15px] items-center rounded-[10px] bg-[rgb(12,131,31)] text-white'>
              <div>
                <h3 className='font-bold'>₹94</h3>
                <p className='text-[12px] '>TOTAL</p>
              </div>
              <div className='flex items-center text-[19px] '>Login to Proceed <IoIosArrowForward /> </div>
            </div>
          </div>
        </div>
      </div>


      <div className='hidden lg:block sticky top-[0px]  z-[98]'>
        <div className='grid grid-cols-[10%_20%_auto_8%_10%] bg-[white] items-center cursor-pointer shadow w-[100%] '>
          <div>
            <Link to={"/"}> <img src="images/logo.png" alt="" className='w-[200px] ' /></Link>
          </div>
          <div className=' text-center'>
            <h3 className='font-bold text-[20px] '>Delivery in 8 Minutes</h3>
            <p className='flex items-center justify-center'>Jhalamand Circle,Jodhpur  <FaCaretDown /></p>

          </div>
          <div className=' flex items-center p-[10px] text-[20px] bg-white rounded-[10px]'>
            <IoSearch />
            <input type="text" placeholder='Search Your Grocery' className='outline-none ml-[15px]' />
          </div>
          <div className='text-center  text-[20px]'>
            <button>Login</button>
          </div>
          <div className='flex items-center justify-center  text-[20px] border p-[5px] mr-[15px] bg-[rgb(12,131,31)] text-white rounded-[10px] '>
            <FaCartShopping />
            <button className='ml-[10px]' onClick={modalwork} >My Cart</button>
          </div>
        </div>  
      </div>

      <div className='block lg:hidden mt-[20px]  '>
        <div className=' flex justify-between items-center'>
          <div className='ml-[30px]'>
            <h3 className='font-bold text-[25px] '>Delivery in 8 Minutes</h3>
            <p className='flex items-center text-[22px]'>Jhalamand Circle,Jodhpur  <FaCaretDown /></p>
          </div>
          <div className='text-[33px]'>
            <FaRegUserCircle />
          </div>
        </div>


        <div className=' flex items-center p-[10px] text-[20px] bg-white rounded-[10px] ml-[20px] border mt-[20px]'>
          <IoSearch />
          <input type="text" placeholder='Search Your Grocery' className='outline-none ml-[15px] w-100% ' />
        </div>

        <div>

        </div>
      </div>

    </>
  )
}
