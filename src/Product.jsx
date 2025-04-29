import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Footer from './Common/Footer';
import Header from './Common/Header';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product() { 


    let pId=useParams().id
        // console.log(pId)
    const[singleData,setsingleData]=useState([])
    console.log(singleData)
        const singleProduct=()=>{
            axios.get(`https://dummyjson.com/products/${pId}`)
            .then((ress)=>{
                setsingleData(ress.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        
    useEffect(()=>{
        singleProduct()
    },[]) 

        
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };


    return (
        <>
        <Header/>
        <div className='max-w-[1250px] mx-auto  mt-[20px] mb-[50px]'>
            <div className='grid lg:grid-cols-[60%_auto]  md:h-[95vh]'>
                <div className='p-[30px] overflow-y-scroll '>

                    <div className='max-w-[480px] max-h-[480px] mx-auto'>
                        <img src={singleData.thumbnail} alt="" className='w-[100%] h-[100%]' />
                    </div>
                    <div className='hidden '>
                        <Slider {...settings}>
                            <div >
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/94c99c0b-0cb1-4c07-b91d-586c5300945b.jpg?ts=1736856488" alt="" className='w-[70px]' />
                            </div>
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/9f10bd96-ec1f-464c-869c-800e8df7f98e.jpg?ts=1727417443" alt="" className='w-[70px]' />
                            </div>
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/0e78dad8-bb63-41c7-85b6-e5fb68cd00c7.jpg?ts=1727417444" alt="" className='w-[70px]' />
                            </div>
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/b0fb9734-f426-43f9-997f-c5e173e3a547.jpg?ts=1721980436" alt="" className='w-[70px]' />
                            </div>
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/55bf47d9-7e42-4240-b7a3-fc5fb77fe77b.jpg?ts=1721980437" alt="" className='w-[70px]' />
                            </div>
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/images/products/common/customer_care.jpg" alt="" className='w-[70px]' />
                            </div>
                            <div>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/1013caf3-73c3-4bc4-b99b-196111691f01.jpg?ts=1736856489" alt="" className='w-[70px]' />
                            </div>
                        </Slider>
                    </div>


                    <div >
                        <h1 className='text-[24px] font-semibold mt-[32px] mb-[16px]'>Product Details</h1>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>
                            Toned Milk
                        </p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>Type</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Unit</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>{singleData.stock}</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Storage Tips</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>Refrigerated</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>FSSAI License</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>10012021000071</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Shelf Life</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>2 days</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Return Policy</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>
                        The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery. In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.
                        </p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Manufacturer's Name and Address</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>Gujarat cooperative Milk Marketing Fedration Ltd., Amul Dairy Road, Opposite Hotel Surabhi, 388001</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Marketer’s Name and Address</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>Gujarat cooperative Milk Marketing Fedration Ltd., Amul Dairy Road, Opposite Hotel Surabhi, 388001</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Country of Origin</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>ndia</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Customer Care Details</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>Email: info@blinkit.com</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Seller</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>KEMEXEL ECOMMERCE PRIVATE LIMITED</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Seller FSSAI</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>10823999000118</p>
                        <p className='text-[rgb(31, 31, 31);] mb-[8px] font-semibold '>Disclaimer</p>
                        <p className='text-[rgb(31, 31, 31)] text-[14px]'>Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>
                    </div>
                </div>
                <div className='p-[20px] '>
                    <div>
                        <p className='text-[12px] font-bold '><Link to={"/"} >Home </Link>/<Link to={"/section"} >Product </Link>/ <span className='text-[rgb(31, 31, 31)]'>{singleData.title}</span></p>
                        <h2 className='text-[22px] font-bold mt-[5px]'>{singleData.title}</h2>
                        <p className='rounded-[20px] bg-[#ccc] text-[12px] w-[50px] p-[3px] text-center font-bold mt-[5px]'>8 Mins</p>
                        <p className='flex items-center text-[green] text-[19px] mt-[5px]'>View all by Amul <IoIosArrowDroprightCircle /></p>

                        <p className='pt-[15px] text-[20px] '><span className='text-[20px] text-[red] font-bold'>Price :</span> <span className='bg-[yellow] p-[5px]'>${singleData.price}</span></p>
                        <p className='mt-[20px] text-[14px] font-bold'>Select Unit</p>
                        <div className='flex mt-[10px]'>
                            <button className='border p-[6px] rounded-[20px] text-[15px] w-[100px] border-[green]'>1ltr <br />MRP $55</button>
                            <button className='border p-[6px] rounded-[20px] text-[15px] w-[100px] ml-[25px]'>500ml <br />MRP $28</button>
                        </div>
                        <p className='text-[13px] font-bold text-[#ccc] mt-[5px]'>(inclusive  of all taxes)</p>
                        <button  className='border p-[4px] rounded-[10px] text-[15px] w-[70px] border-[green] text-green mt-[15px]' >ADD</button>
                    </div>  
                    <div className='mt-[10px] p-[25px]'>
                        <h2 className='text-[18px] font-bold'>Why shop from blinkit</h2>
                        <div className='flex text-[14px] mt-[15px] '>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" alt="" className='w-[50px]' />
                            <div className='ml-[10px]'>
                            <p> Superfast Delivery</p>
                            <p>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                            </div>
                        </div>
                        <div className='flex text-[14px] mt-[15px] '>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="" className='w-[50px]' />
                            <div className='ml-[10px]'>
                            <p> Best Prices & Offers</p>
                            <p>Best price destination with offers directly from the manufacturers.</p>
                            </div>
                        </div>
                        <div className='flex text-[14px] mt-[15px]'>
                            
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" alt="" className='w-[50px]' />
                            <div className='ml-[10px]'>
                            <p>Wide Assortment</p>
                            <p>Choose from 5000+ products across food, personal care, household & other categories.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
