import React from 'react';

const Store = () => {
  return (
    <div name='store' className='w-screen bg-baseColor '>
        <div className="flex flex-col-reverse md:flex-row  container mx-auto pt-16">
            <div className='md:w-[42vw] md:h-[40rem] w-[100vw] h-[40rem] mx-4 md:mx-0'>
                <iframe class="gmap_iframe" width="90%" height='70%' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=771&amp;height=1067&amp;hl=en&amp;q=palupo&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
            <div className="flex flex-col mb-12 md:mb-0 mx-4 md:mx-0 md:mt-6">
                <h3 className='text-4xl font-bold overflow-hidden'>Visit Us</h3>
                <p className='mt-6 '>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                <p className='text-2xl font-bold mt-6'>Hours</p>
                <p className='mt-5'>Monday - Saturday</p>
                <p>9am - 7pm</p>
                <p className='mt-6'>Sunday</p>
                <p>10am - 6pm</p>
                <p className='text-2xl font-bold mt-6'>Phone</p>
                <p className='mt-6'>1 (234) 567-891</p>
            </div>
        </div>
    </div>
  );
}

export default Store;
