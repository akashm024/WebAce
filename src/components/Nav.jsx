import React, { useState } from 'react';

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Why us ?", link: "/" },
    { name: "Pricing", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-xl w-full fixed top-0 left-0 bg-[#1A1625]'>
      <div className='md:flex items-center justify-between bg-[#1A1625] py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl md:text-3xl cursor-pointer flex items-center font-[Poppins] text-white'>
          Web<span className='font-bold text-[#5D45FD]'> <span className='font-extrabold '>^</span>ce</span>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-[18px] cursor-pointer md:hidden text-white '>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#1A1625] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-18 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='hover:text-[#5D45FD] duration-500 text-white'>{link.name}</a>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  )
}

export default Nav;
