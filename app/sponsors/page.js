import React from 'react'
import { sponsors } from '@/constants';
import Navbar from '@/components/Navbar';
const sponsorcard=({logo,name,intro,link})=>{
    return(
        <div className="card">
            <div className="bg"></div>
            <div className="blob"></div>
        </div>
    )
}
const sponsorspage = () => {
  return (
    <>
        <Navbar/>
        <div className='flex h-[100vh] items-center justify-center content-center'>
        <div className='w-52 h-[270px] bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center rounded-lg'>
            <div className="relative flex flex-col justify-end p-3 gap-3 bg-black rounded-lg cursor-pointer w-48 h-64">
                <p className="text-xl font-bold capitalize">Popular this month</p>
                <p className="text-sm">Powered By</p>
                <p className="text-sm font-semibold text-purple-500">Universe</p>
            </div>
        </div>
        </div>
    </>
    
  )
}

export default sponsorspage