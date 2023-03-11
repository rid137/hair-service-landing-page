import  blackBg  from '../../asset/blackBg.jpg';
import  imgList1  from '../../asset/imgList1.jpg';
import  imgList2  from '../../asset/imgList2.jpg';
import  imgList3  from '../../asset/imgList3.jpg';
import  imgList4  from '../../asset/imgList4.jpg';
import  imgList5  from '../../asset/imgList5.jpg';
import  imgList6  from '../../asset/imgList6.jpg';
import hair1 from '../../asset/hair1.jpg';


const Bookings = () => {
  return (
    <>
        <div name='bookings'  className='pt-[4rem] pb-[2rem]  w-screen bg-black text-baseColor'>
            <h2 className='text-center text-4xl leading-[3rem] lg:leading-[3.5rem] container mx-auto overflow-hidden mt-4 font-bold lg:text-[3rem]'>
                To book and for exact pricing please call us at 123-456-7868
            </h2>
        </div>  
        <div className='bg-baseColor  w-screen  pb-32'>
            <div className="w-screen h-64 bg-black "></div>
            <div className="-mt-[12rem] grid lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:gap-10 items-center justify-center mx-4 -pt-32  md:container md:mx-auto">
                <div className=" cursor-pointer overflow-y-hidden group h-[30rem] w-[30rem] md:h-[20rem] md:w-[20rem] [perspective:1000px] ">
                    <div className="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className='w-full h-full object-cover shadow-xl shadow-black/40' src={hair1} alt="" />
                        </div>
                        <div className="absolute inset-0 h-full w-full  bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold overflow-hidden">Dare Seyi</h1>
                                <p className="text-lg">Photographer & Art</p>
                                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-0 cursor-pointer overflow-y-hidden group h-[30rem] w-[30rem] md:h-[20rem] md:w-[20rem] [perspective:1000px] ">
                    <div className="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className='w-full h-full   object-cover shadow-xl shadow-black/40' src={hair1} alt="" />
                        </div>
                        <div className="absolute inset-0 h-full w-full  bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold overflow-hidden">Dare Seyi</h1>
                                <p className="text-lg">Photographer & Art</p>
                                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-10  lg:mt-0 cursor-pointer overflow-y-hidden group h-[30rem] w-[30rem] md:h-[20rem] md:w-[20rem] [perspective:1000px] ">
                    <div className="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className='w-full h-full  object-cover shadow-xl shadow-black/40' src={hair1} alt="" />
                        </div>
                        <div className="absolute inset-0 h-full w-full  bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold overflow-hidden">Dare Seyi</h1>
                                <p className="text-lg">Photographer & Art</p>
                                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-10 lg:mt-0 cursor-pointer overflow-y-hidden group h-[30rem] w-[30rem] md:h-[20rem] md:w-[20rem] [perspective:1000px] ">
                    <div className="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className='w-full h-full   object-cover shadow-xl shadow-black/40' src={hair1} alt="" />
                        </div>
                        <div className="absolute inset-0 h-full w-full  bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold overflow-hidden">Dare Seyi</h1>
                                <p className="text-lg">Photographer & Art</p>
                                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-10 lg:mt-0 cursor-pointer overflow-y-hidden group h-[30rem] w-[30rem] md:h-[20rem] md:w-[20rem] [perspective:1000px] ">
                    <div className="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className='w-full h-full   object-cover shadow-xl shadow-black/40' src={hair1} alt="" />
                        </div>
                        <div className="absolute inset-0 h-full w-full  bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold overflow-hidden">Dare Seyi</h1>
                                <p className="text-lg">Photographer & Art</p>
                                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 md:mt-10 lg:mt-0 cursor-pointer overflow-y-hidden group h-[30rem] w-[30rem] md:h-[20rem] md:w-[20rem] [perspective:1000px] ">
                    <div className="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0">
                            <img className='w-full h-full   object-cover shadow-xl shadow-black/40' src={hair1} alt="" />
                        </div>
                        <div className="absolute inset-0 h-full w-full  bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)]  [backface-visibility:hidden]">
                            <div className="flex min-h-full flex-col items-center justify-center">
                                <h1 className="text-3xl font-bold overflow-hidden">Dare Seyi</h1>
                                <p className="text-lg">Photographer & Art</p>
                                <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-screen mt-48 container mx-auto grid gap-6 md:grid-cols-2">
                <div className='mx-4 md:mx-0'>
                    <img src={hair1} className='md:h-[35rem] w-[30rem]' alt="" />
                </div>
                <div className='mx-4 md:mx-0'>
                    <div className="flex flex-col items-end">
                        <h3 className='text-2xl font-bold'>Who we are</h3>
                        <p className='text-right text-md leading-6 mt-5 pb-8 border-b border-black'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="flex flex-col items-end mt-14">
                    <h3 className='text-2xl font-bold'>What we do</h3>
                    <p className='text-right text-md leading-6 mt-5 pb-8 border-b border-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                </div>
            </div>

        </div>  
    </>
  );
}

export default Bookings;
