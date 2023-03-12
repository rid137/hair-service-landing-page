import  backBg2  from '../../asset/backBg2.jpeg';
import { Link, animateScroll as scroll, } from 'react-scroll'


const HeroSection = () => {
  return (
    <div className='bg-black pb-5 pt-7 lg:pt-12 w-screen'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col mx-4  lg:mx-0 mt-10">
            <h1 className='text-baseColor leading-[3.7rem] lg:leading-[4.8rem] text-[3rem] h-full overflow-y-hidden lg:text-[4.5rem] font-bold'> <span className='font'>All'bout Hair</span> <span> Naturale</span></h1>
            <p className='text-white mt-10 leading-7 tracking-wider font-bold'>
                Simple Text. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Curabitur id 
                suscipit ex. Suspendisse rhoncus laoreet 
                purus quis elementum.
            </p>
            <div className='flex flex-col md:flex-row items-start justify-start text-left mt-10'>
                <Link className='text-white cursor-pointer border-2 border-white text-center px-8 pb-2 pt-1 rounded-md  text-2xl tracking-wider hover:bg-white hover:text-black mr-6 transition-all duration-200'  to="services" smooth={true} offset={50} duration={300}> Services</Link>
                <Link className='text-black cursor-pointer  text-center mt-5 md:mt-0 md:px-8 px-6 pb-2 pt-2 rounded-md  text-2xl tracking-wider bg-baseColor hover:bg-white hover:text-black' to="bookings" smooth={true} offset={50} duration={300}>Book Now</Link>
                {/* <button className='text-black  text-center mt-5 md:mt-0 md:px-8 px-6 pb-2 pt-2 rounded-md  text-2xl tracking-wider bg-baseColor hover:bg-white hover:text-black'>Book Now</button> */}
            </div>
        </div>
        
        <div className='mt-24 lg:mt-0 mx-7 lg:mx-0 bg-cover'>
            <img src={backBg2} className=' w-[75rem] h-[25rem]  object-cover' alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
