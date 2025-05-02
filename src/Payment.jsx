import React from 'react'
import Header from './Common/Header'
import { Link } from 'react-router-dom'

export default function Payment() {
    return (
        <>
            <div className='lg:flex items-center max-w-[100%] lg:justify-between lg:p-[5px_15px] shadow '>
                <div>
                    <Link to={"/"}><img src="public/images/logo.png" alt="" className='max-w-[150px] hidden lg:block' /></Link>
                </div>
                <div className=' md:text-center md:p-[15px]'>
                    <p className='font-bold leading-[2px] tracking-widest capitalize  '>Bag..........Address..........Payment</p>
                </div>
                <div className='lg:flex items-center max-w-[200px] hidden '>
                    <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="" className='max-w-[26px] h-[28px] mr-[10px]' />
                    <p>100% SECURE</p>
                </div>
            </div>



            <div className='max-w-[1000px] grid lg:grid-cols-[65%_35%] grid-cols-[100%] lg:mx-auto lg:m-[20px_0px]'>
                <div className='p-[10px] '>
                    <div className='flex shadow justify-between p-[15px] items-center rounded bg-[rgb(255,246,244)]'>
                        <div className='font-bold text-[14px]'>Check delivery time&services</div>
                        <div className='border p-[5px] text-[13px] hover:bg-[rgb(255,246,244)] font-bold rounded text-[rgb(255,63,108)] border-[rgb(255,63,108)]'>ENTER PIN CODE</div>
                    </div>

                    <div className='mt-[20px] p-[15px] shadow'>
                        <div className='text-[15px] font-bold'>Available Offers</div>
                        <div className='text-[12px] text-[rgba(0,0,0,0.6)] mt-[7px] font-bold'>10% Instant Discount on HSBC Credit Cards on a min spend of $3,500. TCA</div>
                        <div className='text-[14px] mt-[10px] text-[rgb(255,63,108)] font-bold'>Show More ^</div>
                    </div>

                    <div className='mt-[20px] p-[15px]' >
                        <div className='flex justify-between items-center'>
                            <div className='flex'>
                                <input type="checkbox" className='max-w-[20px]' checked />
                                <p className='ml-[10px]'>1/1 ITEMS SELECTED</p>
                            </div>
                            <div className='flex w-[170px] justify-between'>
                                <p className='text-[11px] font-bold'>REMOVE</p>
                                <p className='text-[11px] font-bold'>MOVE TO WISHLIST</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-[20%_auto] shadow mt-[20px] p-[15px]'>
                        <div>
                            <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/94c99c0b-0cb1-4c07-b91d-586c5300945b.jpg?ts=1736856488" alt="" className='w-[130px]' />
                        </div>
                        <div className='  p-[5px_15px]'>
                            <p className=' text-[15px] font-bold' >Amul Milk </p>
                            <p className=' text-[14px]'>Pure desi Ghee cowmilk</p>
                            <p className=' text-[11px]'>Sold by: Flashstar Commerce</p>
                            <div className='flex m-[5px] max-w-[120px] justify-between '>
                                <p className=' text-[13px] p-[3px] bg-[rgb(245,245,246)] rounded'>ltr:500ml</p>
                                <p className='  text-[13px] p-[3px] bg-[bg-[rgb(245,245,246)] rounded'>Qty:1</p>
                            </div>
                            <p className=' text-13px'></p>
                            <p className=' text-13px'><span className='text-[14px] font-bold ' >$645</span> <span className='text-[14px] line-through ml-[10px]'>$1699</span>  <span className='ml-[10px]  text-[hotpink] text-[13px]'>62% OFF</span> </p>
                            <p className=' text-[11px]'>14 days return available</p>
                        </div>
                    </div>


                    <div className='shadow mt-[20px] p-[15px]'>
                        <div className='flex items-center justify-between'>
                            <img src="https://constant.myntassets.com/checkout/assets/img/products-blurred.webp" alt="" className='max-w-[80px] ' />
                            <p className='text-[14px] font-bold'>Login to see items from your existing bag and wishlist</p>
                            <button className='text-[rgb(255,63,108)] text-[13px] font-bold'>LOGIN NOW</button>
                        </div>
                    </div>


                </div>
                <div className='pt-[10px]'>
                    <div className='shadow'>
                        <div className='p-[15px] text-[13px] font-bold'>COUPAN</div>
                        <div className='flex p-[0px_15px] justify-between'>
                            <div className='text-[14px] font-bold'>Apply Coupans</div>
                            <div className='text-[13px] font-bold '><button className='border p-[2px] border-[rgb(255,63,108)] text-[rgb(255,63,108)] cursor-pointer hover:bg-[rgb(255,246,244)]'>APPLY</button></div>
                        </div>
                        <div className='p-[10px_25px]'>
                            <p className='text-[13px] font-bold'><span className='text-[rgb(255,63,108)]'>Login</span> to get upto $300 OFF on first order</p>
                        </div>
                    </div>

                    <div>
                        <div className='p-[15px] text-[13px] font-bold'>GIFTING & PERSONALIZATION</div>
                        <div className='p-[5px] rounded shadow m-[0px_15px] flex bg-[rgb(255,246,244)]'>
                            <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="" className='w-[35px]' />
                            <div>
                                <p className='font-bold text-[14px]'>Buying for a loved one?</p>
                                <p className=' text-[11px]'>Gift packaging and  personalization message on card, Only for $35</p>
                                <button className='text-[11px] font-bold text-[rgb(255,63,108)]'>ADD GIFT PACKAGE</button>
                            </div>
                        </div>
                    </div>

                    <div className='p-[15px]'>
                        <div className='text-[11px] font-bold'>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</div>
                        <div className='flex mt-[15px]'>
                            <input type="checkbox" />
                            <p className='text-[13px] ml-[5px] font-bold'>Donate and make a difference</p>
                        </div>
                        <div className='flex justify-evenly mt-[15px]'>
                            <button className='border p-[3px_10px] rounded-[20px] font-bold text-[14px]'>$10</button>
                            <button className='border p-[3px_10px] rounded-[20px] font-bold text-[14px]' >$20</button>
                            <button className='border p-[3px_10px] rounded-[20px] font-bold text-[14px]'>$50</button>
                            <button className='border p-[3px_10px] rounded-[20px] font-bold text-[14px]'>$100</button>
                        </div>
                        <p className='mt-[15px] text-[13px] font-bold text-[rgb(255,63,108)]'>Know More</p>
                    </div>


                    <div>
                        <div className='text-[13px] font-bold p-[15px_10px]'>PRICE DETAILS (1 Item)</div>
                        <div className='p-[0px_10px]'>
                            <div className='flex justify-between text-[14px] p-[3px_15px]'>
                                <p>Total MRP</p>
                                <p>$1,699</p>
                            </div>
                            <div className='flex justify-between text-[14px] p-[3px_15px]'>
                                <p>Discount on MRP <span className='text-[13px] font-bold text-[rgb(255,63,108)]'>Know More</span></p>
                                <p>-$1,054</p>
                            </div>
                            <div className='flex justify-between text-[14px] p-[3px_15px]'>
                                <p>Coupan Discount</p>
                                <p>Apply Coupan</p>
                            </div>
                            <div className='flex justify-between text-[14px] p-[3px_15px]'>
                                <p>Platform Fee <span className='text-[13px] font-bold text-[rgb(255,63,108)]'>Know More</span><br /> <span>Free shipping for you</span></p>
                                <p>$20</p>
                            </div>
                            <div className='flex justify-between text-[14px] p-[3px_15px]'>
                                <p>Shipping Fee <span className='text-[13px] font-bold text-[rgb(255,63,108)]'>Know More</span></p>
                                <p>Free</p>
                            </div>
                            <hr className='text-[#ccc]'/>
                            <div className='flex justify-between text-[15px] p-[3px_15px] font-bold'>
                                <p>Total Amount </p>
                                <p>$665</p>
                            </div>
                            <div className='max-w-[100%] text-center border p-[10px] bg-[rgb(255,63,108)] text-white text-[17px] font-bold m-[10px_0px] rounded' >
                                <p>Place Order</p> 
                            </div>
                        </div>
                    </div>


                </div>


                <div>

                </div>
            </div>
        </>
    )
}
