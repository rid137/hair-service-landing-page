import  blackBg  from '../../asset/blackBg.jpg';

const WhyUs = () => {
  return (
    <div name='speciality' className='w-screen bg-black text-white pt-24 pb-[12rem] -mt-16'>
      <div className="container mx-auto grid lg:grid-cols-2 lg:gap-10 w-full">
            <div className="flex flex-col w-full ">
                <h2 className='text-[4rem] md:text-[4rem] mx-4 font-semibold md:-ml-[0.07rem]'>Why Us?</h2>
                <p className='text-3xl mx-4 md:mx-0 font-semibold mt-6 leading-[2.7rem] '>
                    We specialize in locking
                    all textures of hair from straight to 
                    curly to wavy to kinky. We also lock 
                    relaxed hair.
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
            
            <div className=' mx-4 md:mx-0 mt-16 md:mt:0'>
                <img src={blackBg} className='w-full h-full' alt="" />
            </div>
        
        </div>
    </div>
  );
}

export default WhyUs;
