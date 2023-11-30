import asos from '../HOME/images/asos.png'
import amaz from '../HOME/images/amazon.png'
import laz from '../HOME/images/laz.png'
import zal from '../HOME/images/zal.png'
import rem from '../HOME/images/rem.png'
import wish from '../HOME/images/wish.png'
import join from '../HOME/images/join.png'
import fed from '../HOME/images/fedex.png'
import { Link } from 'react-router-dom'
export default function SecFour(){
  return(
    <>
      <div className='flex flex-col py-10 px-4 md:px-10 gap-4'>
        <h1 className='font-bold text-3xl'>Global - Couriers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <Link to='https://wishllp.com/'>
            <div className='bg-gray-200 items-center flex flex-row space-x-4 border shadow md:p-8 p-6 w-auto h-auto'>
              <img className='w-16 h-16' src={wish} alt='wish'/>
              <span className='font-semibold text-lg' >Wish</span>
            </div>
          </Link>
          <Link to='https://www.asos.com/?channelref=paid+search&affid=12496&_Cj0KCQiAgqGrBhDtARIsAM5s0_lYcl-OyEU7OT8YpkvlUMhAYXLzIV1EewG0fK0MWiflYVxz85KVpLwaAjgjEALw_wcB&channelref=paid+search&ppcadref=9826306280%7C98328404805%7Ckwd-309084585&gad_source=1&gclid=Cj0KCQiAgqGrBhDtARIsAM5s0_lYcl-OyEU7OT8YpkvlUMhAYXLzIV1EewG0fK0MWiflYVxz85KVpLwaAjgjEALw_wcB&gclsrc=aw.ds'>
            <div div className='bg-gray-200 items-center flex flex-row space-x-4 border shadow md:p-8 p-6'>
              <img className=' w-16 h-16' src={asos} alt='wish'/>
              <span className='font-semibold text-lg' >Asos</span>
            </div>
          </Link>
          <Link to='https://www.fedex.com/en-us/logistics.html'>
            <div className='bg-gray-200 items-center flex flex-row space-x-4 border shadow md:p-8 p-6'>
              <img className='w-16 h-16' src={fed} alt='wish'/>
              <span className='font-semibold text-lg' >FedEx</span>
            </div>
          </Link>
          <Link to='https://www.logistics.lazada.com/'>
            <div className='bg-gray-200 items-center flex flex-row space-x-4 border shadow md:p-8 p-6'>
              <img className='w-16 h-16' src={laz} alt='wish'/>
              <span className='font-semibold text-lg' >Laz</span>
            </div>
          </Link>
          <Link to='https://www.joniprime.com'>
            <div className='bg-gray-200 items-center flex flex-row space-x-4 border shadow md:p-8 p-6'>
              <img className='w-16 h-16' src={join} alt='wish'/>
              <span className='font-semibold text-lg' >JoniPrime</span>
            </div>
          </Link>
          <Link to='https://us.romwe.com/'>
            <div className='bg-gray-200 items-center flex flex-row space-x-4 border shadow md:p-8 p-6'>
                <img className='w-16 h-16' src={rem} alt='wish'/>
                <span className='font-semibold text-lg' >Remwe</span>
            </div>
          </Link>
          <Link className='https://www.amazon.com/amazonprime'>
            <div className='bg-gray-200 items-center flex flex-row space-x-4 border shadow md:p-8 p-6'>
              <img className='w-16 h-16' src={amaz} alt='wish'/>
              <span className='font-semibold text-lg' >Amazon</span>
            </div>
          </Link>  
          <Link to='https://www.zalando.com/'>
            <div className='bg-gray-200 items-center flex flex-row space-x-4 border shadow md:p-8 p-6'>
              <img className='w-16 h-16' src={zal} alt='wish'/>
              <span className='font-semibold text-lg' >Zalando</span>
            </div>
          </Link>  
            
          </div>
      </div>
    </>
  )
}