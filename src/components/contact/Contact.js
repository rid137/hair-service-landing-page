import  blackBg1  from '../../asset/blackBg1.jpeg';
import  blackBg  from '../../asset/blackBg.jpg';
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";



const Contact = () => {
  return (
    <div name='contact' style={backgroundStyle} className="text-white  w-screen  "> 
        <div className="grid md:grid-cols-2 md:gap-10 mt-20 container mx-auto">
            <div className="flex flex-col mx-4 md:mx-0">
                <h2 className='text-[3rem] font-bold overflow-hidden'>Contact Us</h2>
                <div className="flex items-center text-[1.8rem] mt-12">
                    <IoCall className='font-bold text-baseColor mr-3'/>
                    <p className='font-bold'>Call Us</p>
                </div>
                <p className='mt-4 tracking-wide text-lg'>1 (234) 567-891, 1 (234) 987-654</p>
                <div className="flex items-center text-[1.8rem] mt-10">
                    <IoLocationSharp className='font-bold text-baseColor mr-3'/>
                    <p className='font-bold'>Location</p>
                </div>
                <p className='mt-4 tracking-wide text-lg'>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                <div className="flex items-center text-[1.8rem] mt-10">
                    <BsFillClockFill className='text-[1.5rem] font-bold text-baseColor mr-3'/>
                    <p className='font-bold'>Hours</p>
                </div>
                <p className='mt-4 tracking-wide text-lg'>Mon - Fri …… 10 am - 8 pm, Sat, Sun ....… 9am - 7pm</p>
            </div>

            <div className="flex flex-col mt-32 md:mt-32 mx-4 md:mx-0">
                <form action="">
                    <div className="flex items-center flex-col md:flex-row">
                        <div className='md:mr-4 w-full md:w-[15rem]'>
                            <label htmlFor="" className='block font-bold text-lg tracking-wider'>Email</label>
                            <input type="text" className='md:w-[15rem] w-full bg-transparent border-b-2 mt-4 outline-none' placeholder='Enter email' />
                        </div>
                        <div className='w-full md:w-[15rem] mt-8 md:mt-0'>
                            <label htmlFor="" className='block font-bold text-lg tracking-wider'>Name</label>
                            <input type="text" className='md:w-[15rem] w-full bg-transparent border-b-2 mt-4 outline-none' placeholder='Enter your name' />
                        </div>
                    </div>
                    <label htmlFor="" className='block my-5 font-bold text-lg tracking-wider'>Address</label>
                    <input type="text" className='w-full bg-transparent border-b-2 outline-none ' placeholder='Enter your address'/>
                    <label htmlFor="" className='block my-5 font-bold text-lg tracking-wider'>Message</label>
                    <textarea name="" className='w-full bg-transparent border-b-2 outline-none ' placeholder='Enter your message' id="" cols="15" rows="7"></textarea>
                    <button className='bg-baseColor w-full my-6 py-3 rounded-lg text-black text-xl font-bold tracking-wider hover:bg-white'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  );
}


const backgroundStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, .6),rgba(0, 0, 0, .6)),url(${blackBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    minHeight: '40rem',
    // objectFit: 'cover'
}

export default Contact;
