 import img from './images/sectwo.png'
export default function SecTwo(){
  return(
    <>
      <div className="flex flex-col lg:flex-row mt-24 gap-8">
        <div className="flex flex-col w-full lg:w-1/2 px-4 md:px-10 gap-10">
          <h1 className="font-semibold text-2xl text-purple-500">WELCOME TO OLTEM LOGISTICS</h1>
          <h1 className="font-bold text-4xl ">WE EXCEL IN LOGISTIC SERVICE</h1>
          <p className='md:text-xl text-lg'>
            At Oltem Logistics, we understand that logistics decisions play a critical role in shaping the
            connections and barriers people face in their daily lives. Our services are designed to make it
            easy for individuals and businesses to get where they need and want to go. From efficient 
            transportation routes to streamlined supply chain management, our logistics solutions are
            essential for ensuring seamless movement of goods and people. At Oltem Logistics, we believe that every decision we make impacts the lives of our customers, 
            and we are committed to providing the highest level of service to meet their unique needs.
          </p>
          <button className='bg-purple-500 py-4  w-full lg:w-1/2 rounded-full'>LEARN MORE</button>
        </div>
        <div className='w-full lg:w-1/2 h-auto'>
          <img className=' float-none lg:float-right px-10 w-full md:w-3/4' src={img} alt='img'/>
        </div>
      </div>
    </>
  )
}