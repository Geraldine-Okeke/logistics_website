import img from './images/sectwo.png'
export default function SecTwo(){
  return(
    <>
    <div className="flex flex-row justify-between px-4 md:px-20 py-10  bg-gray-100">
      <div className='hidden sm:hidden md:hidden lg:flex xl:flex '>
        <img src={img} alt='img'/>
      </div>
      <div className="flex flex-col space-y-10">
        <h1 className='font-bold text-4xl'>Office In New York</h1>
        <div className='flex flex-col space-y-2'>
          <span className='font-semibold text-3xl'>Location</span>
          <span className='font-medium text-lg font'>3517 Langher Road, Windsor Mill 21244</span>
        </div>
        <div className='flex flex-col space-y-2'>
          <span className='font-semibold text-3xl'>Phone</span>
          <span className='font-medium text-lg font'>+1 (317) 529-3123</span>
        </div>
        <div className='flex flex-col space-y-2'>
          <span className='font-semibold text-3xl'>Email</span>
          <span className='font-medium text-lg font'>Oltemllc@Yahoo.Com</span>
        </div>
      </div>
    </div>
    </>
  )
}