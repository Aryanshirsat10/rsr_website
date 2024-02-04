import React from 'react'
import { sponsors } from '@/constants';
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
    <div className='flex h-[100vh] items-center justify-center content-center'>
        {/* <div className="relative w-[200px] h-[250px] border-1 rounded-xl z-20 overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <div className="absolute top-[5px] left-[5px] w-[190px] h-[240px] z-10 bg-[#fffffff2] opacity-90 backdrop-blur-xl border-2 rounded-lg overflow-hidden outline-2 outline-white"></div>
            <div className="absolute z-1 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-[#ac0000] opacity-1 blur-lg animate-blob"></div>
        </div> */}
        <div className='w-52 h-[270px] bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center rounded-lg'>
            <div className="relative flex flex-col justify-end p-3 gap-3 bg-black rounded-lg cursor-pointer w-48 h-64">
                <p className="text-xl font-bold capitalize">Popular this month</p>
                <p className="text-sm">Powered By</p>
                <p className="text-sm font-semibold text-purple-500">Universe</p>
            </div>
        </div>
        


    </div>
  )
}

export default sponsorspage