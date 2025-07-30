import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false
                },
            },
        ],
    };


    return (
        <>


            <div className='max-w-[1200px] mx-auto flex justify-between shadow  p-[5px_10px] mt-[50px]'>
                <div className='text-[22px] font-bold'>Rolling Paper & tobacco</div>
                <div className='text-[green] font-bold text-[18px]'>See all</div>
            </div>
            <div className='max-w-[1200px] mx-auto  p-[15px]'>
                <Slider {...settings}>
                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px]  '>
                        <Link to={"/section"}> <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/94c99c0b-0cb1-4c07-b91d-586c5300945b.jpg?ts=1736856488" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>


                    {/*  */}
                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px]  '>
                        <Link to={"/section"}> <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478728a.jpg?ts=1690814280" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px] '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%]  p-[15px] '>
                        <Link to={"/section"} > <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/05bba76b-a41d-4519-9a38-7048c5e0bb9c.jpg" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   m-[3%] p-[15px] '>
                        <Link to={"/section"} > <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px] '>
                        <Link to={"/section"} > <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b91a3d9a-4595-45b5-a123-5cbfcecc3bcc.jpg?ts=1728246095" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px] '>
                        <Link to={"/section"} > <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px] '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>


                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px]  '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f135fd36-b337-4797-ad4e-442bcf75f854.jpg?ts=1734681054" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px] '>
                        <Link to={"/section"} > <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%]  p-[15px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a53612b-58cd-4ae6-919d-d299577b8f68.jpg?ts=1739945919" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   m-[3%] p-[15px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506716a.jpg?ts=1676544589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  m-[3%] p-[15px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>



                </Slider>
            </div>













            <div className='max-w-[1200px] mx-auto flex justify-between shadow  p-[5px_10px]'>
                <div className='text-[22px] font-bold'>Snakes & Munchies</div>
                <div className='text-[green] font-bold text-[18px]'>See all</div>
            </div>
            <div className='max-w-[1200px] mx-auto   '>
                <Slider {...settings}>
                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px]'>
                        <Link to={"/section"} > <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6807f54d-f711-49ca-9635-514ac9b72d7f.jpg?ts=1724850859" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/88679327-6d68-4836-9f07-1f3d660605ee.jpg?ts=1723100069" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <Link to={"/section"}> <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1c4f8155-55fc-44c4-b07a-e1107912fab8.jpg?ts=1740397574" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/79f7319a-f048-48db-ab5a-00a6d2911ea3.jpg?ts=1723098575" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6265c933-0619-4ce1-ae4b-6c9336902295.jpg?ts=1723098571" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1f3a0e5b-26f8-4f7d-a0c0-e6410f763ab5.jpg?ts=1735649560" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>


                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f135fd36-b337-4797-ad4e-442bcf75f854.jpg?ts=1734681054" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a53612b-58cd-4ae6-919d-d299577b8f68.jpg?ts=1739945919" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506716a.jpg?ts=1676544589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>









            <div className='max-w-[1200px] mx-auto flex justify-between shadow  p-[5px_10px]'>
                <div className='text-[22px] font-bold'>Hookah</div>
                <div className='text-[green] font-bold text-[18px]'>See all</div>
            </div>
            <div className='max-w-[1200px] mx-auto   '>
                <Slider {...settings}>
                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px]'>
                        <Link to={"/section"} >  <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/61eb3cc7-6bd1-4ba9-b03c-44e4c8a0f8a3.jpg?ts=1736847234" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496995a.jpg?ts=1690814532" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480935a.jpg?ts=1687523763" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535601a.jpg?ts=1698309253" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535602a.jpg?ts=1698309253" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e4bfe80f-bc8f-4be3-a5bb-627bb15f72d6.jpg?ts=1736944389" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>


                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f135fd36-b337-4797-ad4e-442bcf75f854.jpg?ts=1734681054" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a53612b-58cd-4ae6-919d-d299577b8f68.jpg?ts=1739945919" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506716a.jpg?ts=1676544589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>













            <div className='max-w-[1200px] mx-auto flex justify-between shadow  p-[5px_10px]'>
                <div className='text-[22px] font-bold'>Mouth fresheners</div>
                <div className='text-[green] font-bold text-[18px]'>See all</div>
            </div>
            <div className='max-w-[1200px] mx-auto   '>
                <Slider {...settings}>
                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px]'>
                        <Link to={"/section"} > <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9dfff4f5-de84-4a3c-9cef-6d8e504cbf89.jpg?ts=1723143406" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363209a.jpg?ts=1690815071" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/498984a.jpg?ts=1686566080" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ac3d1c56-641d-4877-9d8e-cf1d8c3dd287.jpg?ts=1737349571" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363212a.jpg?ts=1690814160" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/486345a.jpg?ts=1687951086" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>


                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f135fd36-b337-4797-ad4e-442bcf75f854.jpg?ts=1734681054" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a53612b-58cd-4ae6-919d-d299577b8f68.jpg?ts=1739945919" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506716a.jpg?ts=1676544589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>













            <div className='max-w-[1200px] mx-auto flex justify-between shadow  p-[5px_10px]'>
                <div className='text-[22px] font-bold'>Cold Drinks & Juices</div>
                <div className='text-[green] font-bold text-[18px]'>See all</div>
            </div>
            <div className='max-w-[1200px] mx-auto   '>
                <Slider {...settings}>
                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px]'>
                        <Link to={"/section"}> <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/482620a.jpg?ts=1690813234" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <Link to={"/section"} > <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <Link to={"/section"}><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/15288a.jpg?ts=1698840601" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/10b8b01a-8b71-4448-becb-16d4247ef05c.jpg?ts=1707312326" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e69c587d-802a-40eb-a40b-a6bc9623526d.jpg?ts=1707312325" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/600dd9ff-659c-4817-87e7-eec1dea72c63.jpg?ts=1706182144" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>


                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f135fd36-b337-4797-ad4e-442bcf75f854.jpg?ts=1734681054" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a53612b-58cd-4ae6-919d-d299577b8f68.jpg?ts=1739945919" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506716a.jpg?ts=1676544589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>









            <div className='max-w-[1200px] mx-auto flex justify-between shadow  p-[5px_10px]'>
                <div className='text-[22px] font-bold'>Candies & Gums</div>
                <div className='text-[green] font-bold text-[18px]'>See all</div>
            </div>
            <div className='max-w-[1200px] mx-auto   '>
                <Slider {...settings}>
                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px]'>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1188f1d4-7fc0-4fd7-a1ae-20b6de0d59b2.jpg?ts=1744804307" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5cf43365-0827-4882-bcb3-19e611e5e1a9.jpg?ts=1735822670" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <Link to={"/section"} ><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/976ffd15-f16b-40b4-beec-da2351b0b8c4.jpg?ts=1710154021" alt="" /></Link>
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0cdb751e-a797-4f76-ba3d-00a4c6130c19.jpg?ts=1710154019" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0cdb751e-a797-4f76-ba3d-00a4c6130c19.jpg?ts=1710154019" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/520091a.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>


                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px]  '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f135fd36-b337-4797-ad4e-442bcf75f854.jpg?ts=1734681054" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4a53612b-58cd-4ae6-919d-d299577b8f68.jpg?ts=1739945919" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white    p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506716a.jpg?ts=1676544589" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white   p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>

                    <div className=' shadow  rounded-[10px] text-left w-[19%] bg-white  p-[10px] '>
                        <img src="images/s4.jpg" alt="" />
                        <p>Amul Taaza Toned Fresh Milk</p>
                        <p className='opacity-[0.6]'>1tr</p>
                        <div className='flex w-full justify-between mt-[5px] items-center'>
                            <div>
                                $55
                            </div>
                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                <button>ADD</button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}
