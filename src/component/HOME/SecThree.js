import img from './images/sec3.png'
export default function SecThree(){
  return(
    <>
     <div className='flex mt-16 px-4 md:px-10  flex-col-reverse lg:flex-row  gap-10'>
       <div className=' w-full lg:w-1/2 relative flex flex-col'>
          <img src={img} alt='img'/>
          <div className='md:absolute  md:-bottom-20 text-center mt-3 bg-gray-300 py-6 left-10 -right-16'>
            <span className='text-center text-lg'>
              At Oltem Logistics, our strong and lasting 
              relationships are the reason our returning customers continue to choose us for their shipping needs.</span>
          </div>
       </div>
       <div className='flex flex-col w-full lg:w-1/2 gap-8' >
          <h1 className='text-2xl text-purple-500 font-bold'>WE ARE OLTEM LOGISTICS</h1>
          <h1 className='text-3xl md:text-4xl font-bold'>1300+ CARRIERS SUPPORTED FOR MILLIONS OF USERS</h1>
          <p className='text-lg md:text-xl'>
          To emerge as frontrunners in logistics solutions within our operational domains, pioneering 
          technological advancements for enhanced efficacy stands as our core commitment. We take immense 
          pride in the fact that a quarter of our dedicated team boasts more than decades of steadfast service.
          At Oltem Logistics, 
          we acknowledge the imperative of furnishing training for an unparalleled customer experience.
          </p>
       </div>
     </div>
    </>
  )
}