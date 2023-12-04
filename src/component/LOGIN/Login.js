import img from './images/login.png'
import LoginForm from './Form'
import logo from '../HOME/images/logisticsjpg.jpg'
export default function Login(){
  return(
    <>
    <div className='flex flex-row'>
      <div className="hidden sm:hidden md:hidden lg:flex xl:flex bg-cover bg-center h-screen w-1/2 relative" style={{ backgroundImage: `url(${img})` }}>
          <h1 className='text-white font-extrabold text-5xl  text-center absolute bottom-10 '>
           Welcome to OLTEM Logistics. Let’s get started.
          </h1>
      </div>
      <div className='w-full md:w-1/2 px-8  flex flex-col'>
          <img className='w-28 h-28' src={logo} alt='logo'/>
          <LoginForm/>
      </div>
    </div>
      
    </>
  )
}