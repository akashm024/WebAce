import React, { useState, useEffect } from 'react';
import img from "../assets/Hero.jpg";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const targetText = "amazing";

  useEffect(() => {
    let index = 0;
    let direction = 1;

    const typingInterval = setInterval(() => {
      setTypedText(targetText.substring(0, index));
      
      if (direction === 1) {
        index++;
        if (index > targetText.length) {
          direction = -1;
        }
      } else {
        index--;
        if (index === 0) {
          direction = 1;
        }
      }
    }, 300);

    const cursorInterval = setInterval(() => {
      setCursorVisible(prevVisible => !prevVisible);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className='mt-[63px]   bg-[#1A1625] text-[#F5F5F5]' id='hero'>

      <div className='pt-5'>
        <img src={img} alt="img" draggable="false" className='m-[auto] w-[65%]  md:w-[35%] rounded-[50%] md:float-right md:mr-10 md:mt-5' />
      </div>


      <div>
        {/* Hero Text  */}
        <p className="text-[28px] md:text-[58px] md:w-[60%] p-6 pt-10 md:p-12 md:pl-24 md:pb-5 font-bold">
          We develop <span className="text-transparent bg-gradient-to-r from-sky-500 to-indigo-800 bg-clip-text font-bold">
            {typedText}
          </span><span className="text-transparent bg-gradient-to-r from-sky-500 to-indigo-800 bg-clip-text font-bold">{cursorVisible && "|"}</span>
          <br />
           websites for your business<span className='text-[#5D45FD]'>.</span>
        </p>
        {/* Hero Sub-Text   */}
        <p className='p-6 pt-0  text-[12px] md:text-[16px] text-[#b9b9b9] w-[90%] md:w-[60%] md:p-12 md:pl-24 md:pt-0 md:pb-6'>WebAce: Crafting dynamic websites to elevate your business. Stand out online with our expert development services.</p>
        {/* Hero Button  */}
        <button className='m-6 mt-0 md:m-12 md:ml-24 md:mt-0 p-2.5 font-bold border-[2px] border-[#5D45FD] rounded-[8px] hover:bg-[#5D45FD] duration-200'> Let's Talk ↗ </button>
      </div>
    </div>
  )
}
