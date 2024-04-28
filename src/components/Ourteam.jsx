import React from 'react'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"

export default function Ourteam() {
    return (
        <div className='text-white' >
            <h1 className='text-center text-2xl font-bold' >Meet out team </h1>

            <section className='flex flex-wrap justify-center ' >

                <div className='h-[200px] w-[40%] md:w-[15%]   border-[2px] border-white rounded m-3 items-center  p-4 ' >
                    <img src={pic1} alt="pic1" className='w-[100px]  rounded-[50%] m-auto  ' />
                    <h1 className='text-[20px] font-bold text-center p-3 pb-0' >Akash M</h1>
                    <h1 className='text-[grey] text-center' >Developer</h1>
                </div>

                <div className='h-[200px] w-[40%] md:w-[15%]  border-[2px] border-white rounded m-3 items-center  p-4 ' >
                    <img src={pic3} alt="pic1" className='w-[100px] rounded-[50%] m-auto  ' />
                    <h1 className='text-[20px] font-bold text-center p-3 pb-0' >Mahesh</h1>
                    <h1 className='text-[grey] text-center' >Manager</h1>
                </div>

                <div className='h-[200px] w-[40%] md:w-[15%]  border-[2px] border-white rounded m-3 items-center  p-4 ' >
                    <img src={pic2} alt="pic1" className='w-[100px] rounded-[50%] m-auto  ' />
                    <h1 className='text-[20px] font-bold text-center p-3 pb-0' >Abijith</h1>
                    <h1 className='text-[grey] text-center' >Invester</h1>
                </div>

                <div className='h-[200px] w-[40%] md:w-[15%]  border-[2px] border-white rounded m-3 items-center  p-4 ' >
                    <img src={pic4} alt="pic1" className='w-[100px] rounded-[50%] m-auto  ' />
                    <h1 className='text-[20px] font-bold text-center p-3 pb-0' >Abhishek</h1>
                    <h1 className='text-[grey] text-center' >OfficeBoy</h1>
                </div>

            </section>
        </div>
    )
}
