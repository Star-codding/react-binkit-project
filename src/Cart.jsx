import React, { useContext } from 'react'
import { myContext } from './ContextProvider'
import Header from './Common/Header'

export default function Cart() {
    let {counter,setcounter} = useContext(myContext)
  return (
    <div>
        <Header/>
        <div className='mx-auto w-[200px] p-[15px]'>
        <button className='text-[20px]' onClick={()=>setcounter(counter+1)}> + </button>
        <h2 className='text-[20px]'> {counter} </h2>
        <button className='text-[20px]' onClick={()=>setcounter(counter-1)}> - </button>
        </div>
    </div>
  )
}
