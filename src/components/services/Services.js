import hair1 from '../../asset/hair1.jpg';
import hair2 from '../../asset/hair2.jpg';
import hair3 from '../../asset/hair3.jpeg';
import hair5 from '../../asset/hair5.jpg';
import hair8 from '../../asset/hair8.jpg';
import hair9 from '../../asset/hair9.jpg';
import hair11 from '../../asset/hair11.jpg';
import hair13 from '../../asset/hair13.jpg';


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
      image: hair2,
      title: 'WASH, RETWIST AND STYLE',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',  },
    {
      id: 3,
      image: hair3,
      title: 'DETOX TREATMENT',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 4,
      image: hair9,
      title: 'HOT OIL TREATMENT',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 5,
      image: hair5,
      title: 'WASH, RETWIST AND STYLE',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
      id: 6,
      image: hair13,
      title: 'DETOX TREATMENT',
      price: '$225 and Up',
      description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
        id: 7,
        image: hair11,
        title: 'PERMANENT COLOR',
        price: '$225 and Up',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    },
    {
        id: 8,
        image: hair8,
        title: 'WASH, RETWIST AND STYLE',
        price: '$225 and Up',
        description: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    }
]

const Services = () => {
  return (
    <div name='services' className='w-screen bg-black py-24 '>
        <h2 className='text-center text-baseColor tracking-wide text-[3rem] md:text-[4rem] font-bold'>Hair Services</h2>

      <div className=' lg:mt-12 container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {
            data.map(({id, title, price, image, description}) => {
                return (
                    <div key={id} className="flex flex-col items-center mt-10 lg:mt-0">
                        <img src={image} className='w-[12rem] h-[12rem] object-cover rounded-full border-8 border-baseColor' alt="" />
                        <p className="mt-7 text-center text-2xl tracking-wide font-bold text-white">{title}</p>
                        <p className="mt-6 text-center font-bold text-2xl text-baseColor">{price}</p>
                        <p className='mt-5 text-gray-500 w-80 lg:w-[14rem] italic text-center'>
                            {description}   
                        </p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default Services;
