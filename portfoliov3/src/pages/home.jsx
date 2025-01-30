import React, { useState, useEffect } from 'react';
import { union, bluetooth, bg, scifi, f2 } from '../constants/constant';

function Home() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className='text-white md:p-[24px] iceland-regular'>
      <div className='w-full flex justify-between items-center'>
        <div>
          {/* Logo */}
          {/* <img src='/path/to/logo.png' alt='Logo' className='h-8 w-auto' /> */}
        </div>
        <div className='ml-auto'>
          <li className='text-grey list-none  uppercase text-[14px]'>
            Local time: <span className='text-white'>{localTime}</span>
          </li>
        </div>
      </div>

      <div className='flex flex-row mt-8 space-x-4 h-full'>
        <div className=''>

          <div className="relative w-fit overflow-hidden  mb-8">
            {/* Outer Div with Border */}
            <div className="relative w-[180px] h-[160px] overflow-hidden">

            {/* Inner Div */}
            {/* <div className="relative w-full h-[150px]  bg-black z-10  border-red-500 border-[3px]"></div> */}
              <div className="relative w-[170px] h-[150px]  bg-black z-10 mx-auto my-auto border-red-500 border-[3px]">
                <img
                  src={f2}
                  alt="AI Portrait"
                  className="block w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          <div className='flex md:flex-col gap-8'>
            <div>
              <p className='letter-spacing-10'>NAME</p>
              <h5 className='text-red text-[18px] big-shoulders-display letter-spacing-10'>SUNDAY KEVIN NEZA</h5>
            </div>
            <div>
              <p className='letter-spacing-10'>OCCUPATION</p>
              <h5 className='text-red text-[18px] big-shoulders-display letter-spacing-10'>WEB DEVELOPER</h5>
            </div>
            <div>
              <p className='letter-spacing-10'>CORPORATION</p>
              <h5 className='text-red text-[18px] big-shoulders-display letter-spacing-10'>NULL</h5>
            </div>
            <div>
              <p className='letter-spacing-10'>AVAILABILITY</p>
              <div className='bg-[#b03030] text-[#000003] flex flex-row relative overflow-hidden'>
                <h5 className=' text-[18px] big-shoulders-display letter-spacing-10 z-50'>OPEN FOR HIRE</h5>
                <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
              </div>
              
            </div>
            <div>
              <p className='letter-spacing-10'>SOCIALS</p>
              <div className='border-[#E84A4A] border  text-red flex flex-row relative overflow-hidden'>
                <h5 className=' text-[18px] big-shoulders-display letter-spacing-10 uppercase'>open connection</h5>
                <img src={bluetooth} alt='union' loading='lazy' className='ml-auto ' />
              </div>
              
            </div>
          </div>
        </div>
        <div className='w-full h-full uppercase flexflex-col'>
          <h5 className='text-center text-[18px]'>swimming through a vast network of interconnected devices and <br/> servers, spreading joy and whimsy to users across the globe</h5>
          <p className='text-center opacity-70 text-[14px]'>Artwork generated with midjourney</p>
          <img src={bg} alt='bg' loading='lazy' className='w-full h-full'/>
          {/* <div
          className="flex-1 bg-cover bg-no-repeat bg-center h-full md:h-screen"
          style={{ backgroundImage: `url(${bg})` }}
          >
        </div> */}

        <div className='flex flex-row mt-auto space-x-4'>
            <div className=" mt-auto border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105 ">
              <div className='big-shoulders-display relative bg-[#b03030] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>about
                <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
              </div>
              <div className='flex flex-col gap-8 mt-4 px-2'>
                <div className="text-[14px]">
                  <p className="text-[#7A7A7A]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                  </p>
                </div>

              </div>
            </div>


            <div className=" mt-auto border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105">
              <div className='big-shoulders-display relative bg-[#b03030] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>experience
                <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
              </div>
              <div className='flex flex-col gap-8 mt-4 px-2'>
                <div className="text-[14px]">
                  <p className="text-[#7A7A7A]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                  </p>
                </div>

              </div>
            </div>

            <div className=" mt-auto border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105">
              <div className='big-shoulders-display relative bg-[#b03030] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap '>projects
                <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
              </div>
              <div className='flex flex-col gap-8 mt-4 px-2'>
                <div className="text-[14px]">
                  <p className="text-[#7A7A7A]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                  </p>
                </div>

              </div>
            </div>

            <div className=" mt-auto border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105">
              <div className='big-shoulders-display relative bg-[#b03030] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>contact
                <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
              </div>
              <div className='flex flex-col gap-8 mt-4 px-2'>
                <div className="text-[14px]">
                  <p className="text-[#7A7A7A]">
                  Suscipit est consequatur nemo voluptatem est labore saepe.
                  </p>
                </div>

              </div>
            </div>
        </div>
        </div>
        {/* <div
          className="flex-1 bg-cover bg-center h-full md:h-auto"
          style={{ backgroundImage: `url(${bg})` }}
        >
        </div> */}
 {/* right side */}
      
        <div className=" border-l-[4px] border-[#E84A4A] max-h-[450px] uppercase relative overflow-hidden w-[22%]">
        <div className=' right-[-8px] top-[8px] '>
        
              <div className='big-shoulders-display relative bg-[#b03030] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>active quest
              <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' /></div>
              <div className='d1 text-[#7A7A7A] px-2'>the react skill-up line</div>
              
              <div className='flex flex-col gap-8 mt-4 px-2'>
                <div className=''>
                  <p className='letter-spacing-10 uppercase'>quest name</p>
                  <h5 className='text-red text-[18px] big-shoulders-display letter-spacing-10 uppercase text-nowrap'>WEB DASHBOARD</h5>
                </div>
                <div className="text-[14px]">
                  <h5>GOAL</h5>
                  <p className="text-[#7A7A7A]">
                    Implement a fully functional dashboard for analytics and content management. 
                    Use charts to represent real-time data and implement CRUD (Create, Read, Update, Delete) functionality 
                    for seamless content management.
                  </p>
                </div>

              </div>
            </div>
</div>

      </div>
    </div>
  );
}

export default Home;
