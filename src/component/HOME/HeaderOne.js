import log from './images/logisticsjpg.jpg'
import Offcanvas from './Offcanvas'
import { Link } from 'react-router-dom'
export default function HeaderOne(){
  return(
    <>
    <div className='hidden sm:hidden md:hidden lg:flex xl:flex flex-col w-full fixed top-0 z-50'>
    <div className="bg-blue-800    text-white  w-full h-auto py-3 flex flex-row px-20 space-x-4">
      <div className="flex flex-row w-3/5 bg-blue-800 font-semibold  justify-between">
        <div className="flex flex-row  font-bold space-x-1">
          <svg class="w-4 h-4 mt-1" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 0C1.11929 0 0 1.11929 0 2.5V4.5C0 10.299 4.70101 15 10.5 15H12.5C13.8807 15 15 13.8807 15 12.5V11.118C15 10.5499 14.679 10.0305 14.1708 9.77639L11.7549 8.56843C10.9384 8.1602 9.94971 8.56975 9.66105 9.43573L9.36328 10.329C9.25014 10.6684 8.90197 10.8705 8.55114 10.8003C6.35528 10.3612 4.63885 8.64472 4.19967 6.44886C4.12951 6.09803 4.33156 5.74986 4.67097 5.63672L5.7796 5.26718C6.52319 5.01932 6.95058 4.24075 6.76048 3.48035L6.17444 1.1362C6.0075 0.468446 5.40752 0 4.71922 0H2.5Z" fill="#A9518B">
            </path>
          </svg>

          <span>+234706080831295</span>
        </div>
        <div className="flex flex-row space-x-1">
          <svg class="w-4 h-4 mt-1" width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5C0 0.671572 0.671573 0 1.5 0H13.5C14.3284 0 15 0.671573 15 1.5V2.70758L7.50001 6.92632L0 2.70757V1.5Z" fill="#A9518B"></path><path d="M0 3.85491V11.5C0 12.3284 0.671573 13 1.5 13H13.5C14.3284 13 15 12.3284 15 11.5V3.85493L7.50001 8.07367L0 3.85491Z" fill="#A9518B">
            </path>
          </svg>
          <span>gerej@yahoo.com</span>
        </div >
        <div className="flex flex-row space-x-1">
          <svg className="w-4 h-4 mt-1" width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 6.49606C5 5.66924 5.67183 4.99738 6.5 4.99738C7.32817 4.99738 8 5.66924 8 6.49606C8 7.3229 7.32816 7.99478 6.5 7.99478C5.67184 7.99478 5 7.3229 5 6.49606Z" fill="#A9518B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.49606C0 2.90877 2.91117 0 6.5 0C10.0888 0 13 2.90877 13 6.49606C13 9.1701 11.6617 11.2886 10.2284 12.7209C9.51016 13.4387 8.75773 13.9953 8.11325 14.3751C7.79117 14.5649 7.49017 14.7141 7.22849 14.8174C6.98144 14.9149 6.72211 14.9909 6.5 14.9909C6.27789 14.9909 6.01856 14.9149 5.77151 14.8174C5.50983 14.7141 5.20883 14.5649 4.88675 14.3751C4.24227 13.9953 3.48984 13.4387 2.77156 12.7209C1.33829 11.2886 0 9.1701 0 6.49606ZM6.5 3.99738C5.12017 3.99738 4 5.11633 4 6.49606C4 7.87579 5.12016 8.99478 6.5 8.99478C7.87984 8.99478 9 7.87579 9 6.49606C9 5.11633 7.87983 3.99738 6.5 3.99738Z" fill="#A9518B"></path></svg>
          <span>3517 Langher Road, Windsor Mill 21244</span>
        </div>
      </div>
      <div className="flex flex-row w-2/5 space-x-10  justify-end">
        <div>
           <svg class="w-4 h-4" width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9773 0.466912C14.964 0.266341 14.8319 0.0932336 14.642 0.0274889C14.452 -0.0382557 14.2412 0.0161463 14.1067 0.165586C13.7611 0.549742 13.3243 0.810055 12.881 0.928746C12.2644 0.353123 11.436 -1.08342e-05 10.5256 -1.08342e-05C8.57181 -1.08342e-05 6.98923 1.58612 6.98923 3.54109V3.98089C3.99799 3.74973 2.39838 1.47745 1.96675 0.324665C1.89698 0.138329 1.72337 0.0110929 1.52468 0.000675007C1.32598 -0.0097429 1.14002 0.0986403 1.05114 0.276659C0.00441813 2.37335 -0.156858 4.40693 0.603899 6.1386C1.27032 7.65553 2.61055 8.86388 4.51008 9.66444C3.64679 10.2762 2.19379 11 0.500039 11C0.279771 11 0.0854497 11.1441 0.0215445 11.3549C-0.0423608 11.5657 0.0392055 11.7935 0.222392 11.9158C1.8465 13.0002 3.54865 13.0001 5.13184 13L5.1803 13C10.041 13 13.98 9.05377 13.98 4.18748V3.70919C14.3434 3.33981 14.6264 2.9617 14.7998 2.47287C14.9932 1.92743 15.0322 1.29497 14.9773 0.466912Z" fill="#AABACB"></path></svg>
        </div>
        <div>
          <svg class="w-5 h-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.4741 11.909 14.7263 8 14.9836V9H10V8H8V6.5C8 5.67157 8.67157 5 9.5 5H10V4H9.5C8.11929 4 7 5.11929 7 6.5V8H5V9H7V14.9836C3.09098 14.7263 0 11.4741 0 7.5Z" fill="#AABACB"></path></svg>
        </div>
        <div>
          <svg class="w-5 h-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5Z" fill="#AABACB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0C2.01472 0 0 2.01472 0 4.5V10.5C0 12.9853 2.01472 15 4.5 15H10.5C12.9853 15 15 12.9853 15 10.5V4.5C15 2.01472 12.9853 0 10.5 0H4.5ZM4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5ZM11 4H12V3H11V4Z" fill="#AABACB"></path></svg>
        </div>
      </div>
    </div>
    <div className="bg-white text-black flex flex-row border px-20 justify-between">
        <div className='flex flex-col w-1/2'>
          <Link to='/'>
            <img className='w-20 h-16' src={log} alt='log'/>
            <h1 className='font-bold text-3xl'>Northern Star</h1>
          </Link>
          
        </div>
      <div className='flex flex-row w-1/2 justify-between font-semibold items-center'>
        <div>
          <Link to='about'>About Us</Link>
        </div>
        <div>Contact Us</div>
        <div> Log In</div>
        <div className='bg-purple-500 px-3 py-2'>Sign Up</div>
      </div>
    </div>
    </div>
    <Offcanvas className='lg:hidden xl:hidden'/>
    </>
  )
}