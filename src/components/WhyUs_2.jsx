import React, { useRef, useEffect, useState } from 'react';
import html from "../assets/techStack/html.svg";
import css from "../assets/techStack/css.svg";
import js from "../assets/techStack/js.svg";
import tailwind from "../assets/techStack/tailwind.svg";
import react from "../assets/techStack/react.svg";

export default function WhyUs_2() {
  const [isVisible, setIsVisible] = useState(false);
  const whyUsRef = useRef(null);

  const handleScroll = () => {
    const topPos = whyUsRef.current.getBoundingClientRect().top;
    const bottomPos = whyUsRef.current.getBoundingClientRect().bottom;

    const windowHeight = window.innerHeight;

    if (topPos < windowHeight && bottomPos >= 0) {
      setTimeout(() => {
        setIsVisible(true);
      }, 200); // Add a slight delay
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={whyUsRef}
      className={`bg-[#1A1625] text-white ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        } transition-opacity transform duration-1000 ease-in-out`} id='why-us'
    >
      <h1 className='text-3xl font-bold p-10 md:pl-16 md:pt-5'>Why US ?</h1>

      <div className='flex flex-wrap md:justify-center'>
        <div className='md:w-[40%] p-5 border-[2px] border-white rounded-[10px] m-5 h-[200px] md:h-[180px] cursor-pointer'>
          <p className='text-[22px] font-bold p-2'>No Freelancer</p>
          <p className='text-[grey]'>
            We do not utilize freelancers. Instead, we have a dedicated managed team in place to ensure code security.
          </p>
        </div>

        <div className='md:w-[40%] p-5 border-[2px] border-white rounded-[10px] m-5 h-[200px] md:h-[180px] cursor-pointer'>
          <p className='text-[22px] font-bold p-2'>White Labeled services</p>
          <p className='text-[grey]'>
            White-labeled mean that the code we develop for you is custom-made exclusively for your project and is not
            reused.
          </p>
        </div>

        <div className='md:w-[40%] p-5 border-[2px] border-white rounded-[10px] m-5 h-[200px] md:h-[180px] cursor-pointer'>
          <p className='text-[22px] font-bold p-2'>Reasonable Pricing</p>
          <p className='text-[grey]'>
            At CodeAce, we pride ourselves on offering professional services at competitive prices. Our pricing is more
            reasonable than that of any other provider in the market
          </p>
        </div>

        <div className='md:w-[40%] p-5 border-[2px] border-white rounded-[10px] m-5 mb-0 h-[200px] md:h-[180px] cursor-pointer'>
          <p className='text-[22px] font-bold p-2'>Clean code</p>
          <p className='text-[grey]'>
            We deliver clean, organized code accompanied by thorough documentation and best practices, making it easy
            for others to edit and modify.
          </p>
        </div>
      </div>

      <h1 className='p-8   md:text-center text-[20px] font-bold' > Technologies used at Webace </h1>
      <div className='flex flex-wrap justify-center space-x-3 md:space-x-10 ' >
        <img src={html} alt="html" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false" />
        <img src={css} alt="css" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false" />
        <img src={js} alt="js" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false" />
        <img src={tailwind} alt="tailwind" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px] ' draggable="false" />
        <img src={react} alt="react" className='w-[100px] rounded-[10px] bg-[whitesmoke] my-3 p-3 h-[100px]  ' draggable="false" />
      </div>
    </div>
  );
}
