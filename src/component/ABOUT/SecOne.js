import React from 'react';

export default function SecOne({ bgImage, bgColor, heading, spanText }) {
  const containerStyle = {
    backgroundColor: bgColor,
    position: 'relative',
  };

  const imageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 10,
    opacity: 0.2,
  };

  return (
    <>
      <div className="flex border flex-col gap-6 mt-28 mb-10 text-center px-4 md:px-10 py-10 text-white" style={containerStyle}>
        <div className='py-36 space-y-10'>
          <h1 className='font-bold text-4xl my-4'>{heading}</h1>
          <span className='font-semibold text-lg sm:text-xl'>{spanText}</span>
        </div>

        <div style={imageStyle} className='w-full flex flex-row'></div>
      </div>
    </>
  );
}
