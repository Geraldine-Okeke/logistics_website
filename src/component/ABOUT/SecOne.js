import bg from './images/secone.png'
export default function SecOne(){
  const containerStyle = {
    backgroundColor: 'rgb(100, 3, 129)' ,
    position: 'relative',
  };

  const imageStyle = {
    backgroundImage: `url(${bg})`,
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
    <div className="flex border flex-col gap-6 mt-28 mb-10 text-center  px-10 py-10 text-white" style={containerStyle}>
    <div className='py-36 space-y-10'>
      <h1 className='font-bold text-4xl'>We Are Global Logistic Provider</h1>
      <span className='font-semibold text-xl'>Universal parcel tracking to track your package from UPS, FedEx, DHL, USPS, China Post, and more.</span>
    </div>
    
    <div style={imageStyle} className='w-full flex flex-row'></div>
    </div>

    </>
  )
}