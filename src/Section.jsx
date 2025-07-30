import React, { useContext, useEffect, useState } from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { myContext } from './ContextProvider'

export default function Section() {





    //////////// show all products
    const [data, setdata] = useState([])

    // console.log(data)

    const displaydata = () => {
        let api;
        if (caturl == null) {
            api = "https://dummyjson.com/products?limit=200"
        }
        else {
            api = caturl
        }



        axios.get(api)
            .then((ress) => {
                setdata(ress.data.products)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }




    //////////////////show all categories
    const [allcat, setallcat] = useState([])
    // console.log(allcat)
    const displayCat = () => {
        axios.get('https://dummyjson.com/products/categories')
            .then((ress) => {
                setallcat(ress.data)
                console.log(ress.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //////////////////////////get cat
    const [caturl, setcaturl] = useState(null)
    // console.log(caturl)
    const getcat = (url) => {
        setcaturl(url)
        // console.log(url)
    }




    //////////////////////////////end work
    useEffect(() => {
        displaydata()
        displayCat()
    }, [caturl])




    return (
        <>
            <Header />
            <div className='max-w-[1220px] m-auto  mt-[5px] bg-[rgb(247,247,250)] mb-[100px]'>
                <div className='bg-white p-[10px] font-bold shadow mb-[5px] text-[18px]'>Buy Product Online</div>
                <div className='grid lg:grid-cols-[15%_auto] grid-cols-[30%_auto] h-[100vh] '>
                    <div className='flex flex-col h-full bg-[white] p-[15px] text-[14px] overflow-y-scroll shadow'>


                        {allcat.length > 0 ?
                            allcat.map((v, i) => {
                                return (
                                    <>
                                        <ul className=' hover:bg-[#ccc] cursor-pointer p-[5px] text-left ' onClick={() => getcat(v.url)} >
                                            <li className='font-bold'>{v.name}</li>
                                        </ul>

                                    </>)
                            })
                            :
                            <div className='fixed top-[50%] left-[15%]'>
                                <div className="loader"></div>
                            </div>

                        }

                    </div>








                    <div className='grid lg:grid-cols-6  grid-cols-2  justify-around text-center gap-y-[20px] overflow-y-scroll  shadow font-bold gap-[20px] p-[10px] '>

                        {data.length > 0 ?
                            data.map((v, i) => {
                                return (

                                    <div className=' shadow rounded-[10px] text-left  bg-white p-[10px] '>
                                        <Link to={`/product/${v.id}`}> <img src={v.thumbnail} alt="" /></Link>
                                        <p>{v.title}</p>
                                        <p className='opacity-[0.3]'>{v.stock}</p>
                                        <div className='flex w-full justify-between mt-[17px] items-center'>
                                            <div>
                                                ${v.price}
                                            </div>
                                            <div className='border mr-[5px] p-[5px_10px] border-[green] text-[green] rounded-[10px] cursor-pointer'>
                                                <button >Add</button>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                            :
                            <div className='fixed top-[50%] left-[50%]'>
                                <div class="loader"></div>
                            </div>
                        }


                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}


