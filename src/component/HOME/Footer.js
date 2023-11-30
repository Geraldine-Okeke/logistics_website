import foot from './images/footer.png'
import { Link } from 'react-router-dom';
export default function Footer(){
  const containerStyle = {
    backgroundColor: 'rgb(3, 3, 129)' ,
    position: 'relative',
  };

  const imageStyle = {
    backgroundImage: `url(${foot})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 10,
    opacity: 0.2, 
  };
  return(
    <>
  
      <div className="flex border flex-col   gap-6 md:flex-row justify-between px-4 md:px-10 py-10 text-white" style={containerStyle}>
      
        <div className="space-y-4 flex flex-col w-full md:w-1/2">
          <h1 className='font-bold text-3xl'>OLEM LOGISTICS</h1>
          <span>
            Olem Logistics is a leading logistics company specializing in providing efficient 
            and reliable transportation and supply chain solutions to businesses of all sizes.
          </span>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-bold text-2xl'>OUR COMPANY</h1>
          <Link to='#'>
            About Us
          </Link>
          <Link to='#'>
            Contact Us
          </Link>
          <Link to='#'>
            Faq
          </Link>
          <Link to='#'>
            Terms and Conditions
          </Link>
          <Link to='#'>
            Privacy Policy
          </Link>
        </div>
        <div className='flex flex-col '>
          <h1 className='font-bold text-2xl'>OUR LOCATIONS</h1>
          <ul className='space-y-4 py-4 list-disc px-4'>
            <li>Baltimore, Maryland, United State Of America</li>
            <li>Al Karama, Dubai, United Arab Emirates</li>
            <li>Ibadan, Oyo, Nigeria</li>
            <li>Sagamu, Ogun, Nigeria</li>
            <li>Sagamu, Ogun, Nigeria</li>
          </ul>
        </div>
        
        <div style={imageStyle} className='w-full flex flex-row'></div>
        
      </div>
      <div className='bg-purple-700 py-4 text-center font-semibold text-lg text-white'>
        <small>
          All rights reserved © olemlogistics 2023
        </small>
      </div>
      
    </>
  )
}