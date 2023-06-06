import { useState } from "react";
import { Link, animateScroll as scroll, } from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import mainlogo from '../../asset/mainlogo.jpg'
import logo from '../../asset/logo.svg'


const Navbar = () => {
    const [showSideNav, setShowSideNav] = useState(false)

    
  return (
    <div className="bg-[#ccc] w-full h-16 relative">
        <nav>
            <div className='container mx-auto w-full h-fit  pt-2 flex items-center justify-between'>
                <div className="w-12 rounded-md mx-7 lg:mx-0 cursor-pointer">
                    {/* <img src={logo} alt="" /> */}
                    <img src={mainlogo} className='rounded-sm' alt="" />
                </div>   
                <div className="hover:text-baseColor cursor-pointer mx-7 transition-all duration-150 lg:mx-0" onClick={() => setShowSideNav(!showSideNav)}>
                    <AiOutlineMenu className="text-4xl" />
                </div>         
            </div>

            <div className={`bg-sideNavColor z-50 fixed top-0 left-0 ${showSideNav ? 'w-[50vw] lg:w-[20vw]' : 'w-[0vw]' } h-[100vh] transition-all duration-300`}>
                <div className={` pt-6 ${showSideNav ? 'block' : 'hidden'}`}>
                    <div className=" hover:text-baseColor transition-all duration-150">
                        <AiOutlineClose className="text-white text-4xl hover:text-baseColor absolute right-2 cursor-pointer" onClick={() => setShowSideNav(!showSideNav)}/>
                    </div>
                    <ul className="flex flex-col items-center pt-10">
                        <li className="overflow-hidden px-10 py-1 mt-3"><Link className="text-white cursor-pointer text-xl font-bold hover:bg-slate-500 lg:hover:bg-transparent px-10 py-1 rounded-sm lg:hover:tracking-[2.5px] lg:hover:text-baseColor transition-all duration-500" onClick={() => setShowSideNav(!showSideNav)} to="home" smooth={true}  duration={500}> <a href="#home">Home</a> </Link></li>
                        <li className="overflow-hidden px-10 py-1 mt-2"><Link className="text-white cursor-pointer text-xl font-bold hover:bg-slate-500 lg:hover:bg-transparent px-10 py-1 rounded-sm lg:hover:tracking-[2.5px] lg:hover:text-baseColor transition-all duration-500" onClick={() => setShowSideNav(!showSideNav)} to="services" smooth={true} offset={50} duration={300}> <a href="#service">Services</a></Link></li>
                        <li className="overflow-hidden px-10 py-1 mt-2"><Link className="text-white cursor-pointer text-xl font-bold hover:bg-slate-500 lg:hover:bg-transparent px-10 py-1 rounded-sm lg:hover:tracking-[2.5px] lg:hover:text-baseColor transition-all duration-500" onClick={() => setShowSideNav(!showSideNav)} to="bookings" smooth={true} offset={50} duration={300}> <a href="#bookings">Bookings</a> </Link></li>
                        <li className="overflow-hidden px-10 py-1 mt-2"><Link className="text-white cursor-pointer text-xl font-bold hover:bg-slate-500 lg:hover:bg-transparent px-10 py-1 rounded-sm lg:hover:tracking-[2.5px] lg:hover:text-baseColor transition-all duration-500" onClick={() => setShowSideNav(!showSideNav)} to="about" smooth={true} offset={50} duration={300}> <a href="#about">About</a> </Link></li>
                        <li className="overflow-hidden px-10 py-1 mt-2"><Link className="text-white cursor-pointer text-xl font-bold hover:bg-slate-500 lg:hover:bg-transparent px-10 py-1 rounded-sm lg:hover:tracking-[2.5px] lg:hover:text-baseColor transition-all duration-500" onClick={() => setShowSideNav(!showSideNav)} to="speciality" smooth={true} offset={50} duration={300}> <a href="#speciality">Speciality</a> </Link></li>
                        <li className="overflow-hidden px-10 py-1 mt-2"><Link className="text-white cursor-pointer text-xl font-bold hover:bg-slate-500 lg:hover:bg-transparent px-10 py-1 rounded-sm lg:hover:tracking-[2.5px] lg:hover:text-baseColor transition-all duration-500" onClick={() => setShowSideNav(!showSideNav)} to="store" smooth={true} offset={50} duration={300}> <a href="#store">Store</a> </Link></li>
                        <li className="overflow-hidden px-10 py-1 mt-2"><Link className="text-white cursor-pointer text-xl font-bold hover:bg-slate-500 lg:hover:bg-transparent px-10 py-1 rounded-sm lg:hover:tracking-[2.5px] lg:hover:text-baseColor transition-all duration-500" onClick={() => setShowSideNav(!showSideNav)} to="contact" smooth={true} offset={50} duration={300}> <a href="#contact">Contact</a> </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
