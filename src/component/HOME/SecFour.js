import asos from './images/asos.png'
import fedex from './images/fedex.png'
import joni from './images/join.png'
import laz from './images/laz.png'
import rem from './images/rem.png'
import amaz from './images/amazon.png'
import zal from './images/zal.png'
import wish from './images/wish.png'
import del from './images/delivery.png'
export default function SecFour(){

  const containerStyle = {
    backgroundColor: 'rgb(3, 3, 129)' ,
    position: 'relative',
  };

  const imageStyle = {
    backgroundImage: `url(${del})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 10,
    opacity: 0.6, 
  };
  return(
    <>
    <div className="h-auto mt-28   flex flex-row px-10 py-6 " style={containerStyle}>
      <div className=" flex flex-col w-full md:w-1/2 py-4 z-10   " >
        <h1 className='font-bold text-4xl text-white py-4'>International Package Tracking Couriers</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div className='bg-blue-400 md:p-8 p-6 w-auto h-auto'>
            <img className='w-16 h-16' src={wish} alt='wish'/>
          </div>
          <div className='bg-blue-400 md:p-8 p-6'>
            <img className=' w-16 h-16' src={asos} alt='wish'/>
          </div>
          <div className='bg-blue-400 md:p-8 p-6'>
            <img className='w-16 h-16' src={fedex} alt='wish'/>
          </div>
          <div className='bg-blue-400 md:p-8 p-6'>
            <img className='w-16 h-16' src={laz} alt='wish'/>
          </div>
          <div className='bg-blue-400 md:p-8 p-6'>
            <img className='w-16 h-16' src={joni} alt='wish'/>
          </div>
          <div className='bg-blue-400 md:p-8 p-6'>
            <img className='w-16 h-16' src={rem} alt='wish'/>
          </div>
          <div className='bg-blue-400 md:p-8 p-6'>
            <img className='w-16 h-16' src={amaz} alt='wish'/>
          </div>
          <div className='bg-blue-400 md:p-8 p-6'>
            <img className='w-16 h-16' src={zal} alt='wish'/>
          </div>
        </div>
      </div>
       <div style={imageStyle}></div>
    </div>
    </>
  )
}