import React from 'react';
import bg from './images/secone.png';
import img from './images/seconebg.png';
import { Link } from 'react-router-dom';
export default function SecOne() {
  const containerStyle = {
    background: 'linear-gradient(to right, #1a204c, #4299e1)', 
    position: 'relative',
  };
  
  const imageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 10,
    opacity: 0.7,
    
  };

  const textContainerStyle = {
    position: 'relative',
    
  };

  return (
    <>
      <div className="bg-cover bg-center h-screen relative flex text-white items-center " style={containerStyle}>
        <div style={imageStyle} className='w-full flex flex-row'></div>
        <div className='md:w-1/2 w-full flex flex-col space-y-6 px-4' style={textContainerStyle}>
          <h1 className='text-4xl font-bold text-white'>We Provide Global Logistics Solutions</h1>
          <span className='text-2xl'>Ship, manage, track, deliver with Oltem - experience hassle-free logistics solutions for all your shipping needs.</span>
          <div className='flex flex-row gap-2'>
            <div className='border p-4 font-bold'>
              <Link to='/contact'>
               LEARN MORE
              </Link>
              </div>
            <div className='border p-4 font-bold bg-purple-500'>
              <Link to='/about'>ABOUT US</Link>
            </div>
          </div>
        </div>
        <div className='absolute -bottom-16 flex flex-row w-2/3 mx-28 gap-3 bg-white border py-5'>
          <div className='bg-purple-500 px-3 hidden sm:hidden md:hidden lg:flex xl:flex' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
            <h1 className='font-bold text-xl md:text-4xl w-3/4'>Track your product way about</h1>
          </div>
          <div className='flex flex-col w-full md:w-1/2'>
            <input className='h-10 border text-black' type='text'></input>
            <button type='submit' className='flex flex-row bg-purple-500 justify-center py-3'>
              TRACK PACKAGE
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.94596 7.31501C0.42396 7.14101 0.41896 6.86001 0.95596 6.68101L20.043 0.31901C20.572 0.14301 20.875 0.43901 20.727 0.95701L15.273 20.043C15.123 20.572 14.818 20.59 14.594 20.088L11 12L17 4.00001L8.99996 10L0.94596 7.31501Z" fill="white"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
