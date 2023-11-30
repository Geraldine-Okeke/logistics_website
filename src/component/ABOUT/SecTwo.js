import one from './images/sectwo1.png'
import two from './images/sectwo2.png'
export default function SecTwo(){
  return(
    <>
      <div className="flex flex-col px-4 md:px-10 py-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-start w-full md:text-center py-10">Oltem Logistics supports shipment tracking for the following postal and courier services....</h1>
        <div className="flex flex-col">
          <h1 className='font-bold text-3xl md:text-4xl text-violet-700'>Learn More About Olem Logistics</h1>
          <p className='md:text-xl text-lg font-semibold py-5'>Oltem Logistics is a leading logistics company specializing in providing efficient and reliable transportation and supply chain solutions to businesses of all sizes.</p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col space-y-4">
              <img src={one} alt='img'/>
              <span className='font-bold text-2xl sm:text-3xl'>Employees 400</span>
              <p className='md:text-xl text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni expedita cumque illum autem unde ab iusto odio culpa voluptatum dolores officia iste adipisci blanditiis quo provident mollitia, quasi dolor.</p>
            </div>
            <div className="flex flex-col space-y-4">
              <img src={two} alt='img'/>
              <span className='font-bold sm:text-3xl text-2xl'>Clients 700</span>
              <p className='md:text-xl font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magni expedita cumque illum autem unde ab iusto odio culpa voluptatum dolores officia iste adipisci blanditiis quo provident mollitia, quasi dolor.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}