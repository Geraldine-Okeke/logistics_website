import ship from './images/ship.png';
import air from './images/air.png';
import truck from './images/truck.png';

export default function SecSix() {
  return (
    <>
      <div className="bg-blue-800 gap-4 md:gap-0 flex flex-wrap md:flex-row bg-blue-800 mt-10 justify-between px-4 md:pr-2 md:pl-10  py-6  h-auto    items-center">
        <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3'>
          <img className='w-96 h-96' src={ship} alt='ship'/>
          <div className='flex flex-col absolute bottom-10 px-2'>
            <span className='text-2xl font-bold text-purple-500'>Large Cargo Transport</span>
            <span className='text-4xl font-bold text-white'>Sea Freight</span>
          </div>
        </div>
        <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3'>
          <img className='w-96 h-96' src={air} alt='air'/>
          <div className='flex flex-col absolute bottom-10 px-2'>
            <span className='text-2xl font-bold text-purple-500'>Air Cargo </span>
            <span className='text-4xl font-bold text-white'>Air Freight</span>
          </div>
        </div>
        <div className='relative w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3'>
          <img className='w-96 h-96' src={truck} alt='truck'/>
          <div className='flex flex-col absolute bottom-10 px-2 '>
            <span className='text-2xl font-bold text-purple-500'>Truck Delivery</span>
            <span className='text-4xl font-bold text-white'>Local Delivery</span>
          </div>
        </div>
      </div>
    </>
  );
}
