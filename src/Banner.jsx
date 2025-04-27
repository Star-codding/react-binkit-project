import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <>
      <div className='max-w-[1250px] m-auto  mt-[5px] '>
        <div className='hidden lg:block'>
          <div>
            <img src="images/banner.jpg" alt="" />
          </div>

          <div className='grid grid-cols-4 ml-[16px]  gap-[20px]  mt-[5px] mb-[20px]'>
            <img src="images/b1.jpg" alt="" />
            <img src="images/b2.jpg" alt="" />
            <img src="images/b3.jpg" alt="" />
          </div>
        </div>

        <div>
          <div className='grid lg:grid-cols-10 grid-cols-4 '>
            <img src="images/Slice-1.jpg" alt="" />
            <Link to={"/section"} ><img src="images/Slice-2.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-3.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-4.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-5.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-6.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-7.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-8.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-9.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-10.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-11.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-12.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-13.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-14.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-15.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-16.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-17.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-18.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-19.png" alt="" /></Link>
            <Link to={"/section"} ><img src="images/Slice-20.png" alt="" /></Link>
          </div>
        </div>
      </div>




    </>

  )
}
