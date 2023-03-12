import { ImQuotesLeft } from "react-icons/im";

const Abouts = () => {
  return (
    <div name="about" className='w-screen bg-black text-white pt-24 pb-[4rem]'>
      <div className="container mx-auto grid lg:grid-cols-2 lg:gap-10 w-full">
        <div className="flex flex-col w-full ">
            <h2 className='text-[4rem] md:text-[3rem] mx-4 font-semibold md:-ml-[0.07rem]'>About Salon</h2>
            <p className='text-3xl mx-4 md:mx-0 font-semibold mt-2 leading-[2.7rem] '>
                To provide a safe and enjoyable environment 
                for all of our clients and work with our 
                clients to achieve the results to services 
                they request, while focusing their hair, nail, 
                and skin health.
            </p>
            <p className='mt-7 mx-4 md:mx-0 leading-[2.2rem] tracking-wide text-xl'>
                Sample text. Click to Egestas egestas fringilla 
                phasellus faucibus scelerisque eleifend donec 
                pretium vulputate. Pharetra magna ac placerat 
                vestibulum. Quam lacus suspendisse faucibus 
                interdum posuere lorem. Egestas tellus rutrum 
                tellus pellentesque eu tincidunt. Neque vitae 
                tempus quam pellentesque nec.
            </p>
            <button className='text-start mx-4 md:mx-0 bg-baseColor w-[10rem] flex justify-center text-2xl tracking-wide font-bold rounded-md mt-6 pb-4 pt-2 text-black hover:bg-white'>Learn More</button>
        </div>

        <div className="flex flex-col w-full mt-8 lg:mt-0">
            <div className="p-5 mx-4 md:mx-0 flex flex-col bg-baseColor rounded-md cursor-default border-transparent hover:border-baseColor border-2 hover:bg-transparent transition-all duration-300 text-black hover:text-white">
                <ImQuotesLeft className="text-white text-3xl mb-2" />
                <p className=" mb-2 text-lg leading-[1.5rem] tracking-wide">
                    Proin sed libero enim sed faucibus 
                    turpis. At imperdiet dui accumsan sit 
                    amet nulla facilisi morbi tempus. Ut 
                    sem nulla pharetra diam sit amet nisl. 
                    Enim nunc
                </p>
                <p className=" text-2xl font-bold">Celia Almeda</p>
            </div>

            <div className="mt-7 p-5 mx-4 md:mx-0 flex flex-col bg-baseColor rounded-md cursor-default border-transparent hover:border-baseColor border-2 hover:bg-transparent transition-all duration-300 text-black hover:text-white">
                <ImQuotesLeft className="text-white text-3xl mb-2" />
                <p className="mb-2 text-lg leading-[1.5rem] tracking-wide">
                    Proin sed libero enim sed faucibus 
                    turpis. At imperdiet dui accumsan sit 
                    amet nulla facilisi morbi tempus. Ut 
                    sem nulla pharetra diam sit amet nisl. 
                    Enim nunc
                </p>
                <p className="text-2xl font-bold">Celia Almeda</p>
            </div>

            <div className="mt-7 p-5 mx-4 md:mx-0 flex flex-col bg-baseColor rounded-md cursor-default border-transparent hover:border-baseColor border-2 hover:bg-transparent transition-all duration-300 text-black hover:text-white">
                <ImQuotesLeft className="text-white text-3xl mb-2" />
                <p className="mb-2 text-lg leading-[1.5rem] tracking-wide">
                    Proin sed libero enim sed faucibus 
                    turpis. At imperdiet dui accumsan sit 
                    amet nulla facilisi morbi tempus. Ut 
                    sem nulla pharetra diam sit amet nisl. 
                    Enim nunc
                </p>
                <p className="text-2xl font-bold">Celia Almeda</p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Abouts;
