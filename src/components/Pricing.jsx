import React from 'react';

export default function Pricing() {
  return (
    <div className='text-white' id='pricing'>
      <h1 className='text-3xl p-10 font-bold text-center'>Our Pricing</h1>

      <section className='flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12 p-5'>

        <div className='w-full md:w-[30%] border-[2px] border-white rounded-[10px] p-5 mb-3 md:mb-0'>
          <h1 className='font-bold text-[22px]'>Basic Plan</h1>
          <p className='text-[14px] text-[grey] md:text-[16px] p-2'>Best plan to kick start your online presence!</p>
          <ul className='list-disc p-5 text-[14px]'>
            <li>Unlimited Hosting </li>
            <li>10 Revisions</li>
            <li>Free Sub-Domain</li>
            <li>Free SSL Certificate</li>
            <li>No Customer support </li>
            <li>5 pages per website</li>
            <li>Social Media Integration </li>
            <li>Google map Integration </li>
            <button className='border-[2px] border-[#5D45FD] w-[100px] rounded-[8px] mx-[30%] mt-6  text-center p-2 bg-[#5D45FD] duration-200  text-[17px] '> <a className='font-bold' href="https://wa.link/fm35yr">₹ 3999</a></button>
          </ul>
        </div>

        <div className='w-full md:w-[30%] border-[2px] border-white rounded-[10px] p-5 md:mb-0'>
          <h1 className='font-bold text-[22px]'>Standard Plan</h1>
          <p className='text-[14px] text-[grey] md:text-[16px] p-2'>Standard plan for enhanced & growing businesses!</p>
          <ul className='list-disc p-5 text-[14px]'>
            <li>Unlimited Hosting </li>
            <li>Unlimited Revisions</li>
            <li>Free Sub-Domian + Full Domain</li>
            <li>Free SSL Certificate</li>
            <li>24/7 Customer support </li>
            <li>Unlimited pages</li>
            <li>Social Media Integration </li>
            <li>Google map Integration </li>
            <button className='border-[2px] border-[#5D45FD] w-[100px] rounded-[8px] mx-[30%] mt-6  text-center p-2 bg-[#5D45FD] duration-200  text-[17px] '> <a className='font-bold' href="https://wa.link/t54l5y">₹ 6999</a> </button>
          </ul>
        </div>

      </section>
    </div>
  );
}
