import  imgList3  from '../../asset/imgList3.jpg';
import hair1 from '../../asset/hair1.jpg';
import hair2 from '../../asset/hair2.jpg';
import hair3 from '../../asset/hair3.jpeg';
import hair5 from '../../asset/hair5.jpg';
import hair6 from '../../asset/hair6.jpg';
import hair9 from '../../asset/hair9.jpg';
import hair11 from '../../asset/hair11.jpg';
import hair13 from '../../asset/hair13.jpg';
import hair10 from '../../asset/hair10.jpg';    





const data = [
    {
      id: 1,
      image: hair1,
      title: 'PERMANENT COLOR',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 2,
      image: hair3,
      title: 'WASH, RETWIST AND STYLE',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',  },
    {
      id: 3,
      image: hair2,
      title: 'DETOX TREATMENT',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 4,
      image: hair5,
      title: 'HOT OIL TREATMENT',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 5,
      image: hair6,
      title: 'WASH, RETWIST AND STYLE',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 6,
      image: hair10,
      title: 'DETOX TREATMENT',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
        id: 7,
        image: hair13,
        title: 'DETOX TREATMENT',
        price: '$225 and Up',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
        id: 8,
        image: hair9,
        title: 'DETOX TREATMENT',
        price: '$225 and Up',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
        id: 9,
        image: hair11,
        title: 'DETOX TREATMENT',
        price: '$225 and Up',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
]


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

                {
                    data.map(({id, image, price, title, description}) => {
                        return (
                            <div key={id} className="mb-10 md:mb-0 cursor-pointer overflow-y-hidden group h-[30rem] w-[30rem] md:h-[20rem] md:w-[20rem] group perspective bg-transparent">
                                <div className="relative h-full w-full  shadow-xl transition-all duration-1000 preserve-3d hover:my-rotate-y-180">
                                    <div className="absolute backface-hidden w-full h-full" >
                                        <img className='w-full h-full object-cover' src={image} alt="" />
                                    </div>
                                    <div className="absolute h-full w-full  bg-gray-200 px-12 text-center text-slate-200 my-rotate-y-180 backface-hidden overflow-hidden">
                                        <div className="flex h-full flex-col items-center justify-center text-gray-700 text-center">
                                            <h1 className="text-3xl font-bold overflow-hidden">{title}</h1>
                                            <p className="text-lg">{price}</p>
                                            <p className="text-base">{description}</p>
                                            <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className="w-screen mt-48 container mx-auto grid gap-6 md:grid-cols-2">
                <div className='mx-4 md:mx-0'>
                    <img src={hair11} className='md:h-[35rem] w-[30rem] object-cover' alt="" />
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
