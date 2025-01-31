// import React, { useState, useEffect } from 'react';
// import { union, bluetooth, bg, scifi, f2 } from '../constants/constant';

// function Home() {
//   const [localTime, setLocalTime] = useState('');

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setLocalTime(now.toLocaleTimeString());
//     };
//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval); // Cleanup interval
//   }, []);

//   return (
//     <div className='text-white md:p-[24px] iceland-regular'>
//       <div className='w-full flex justify-between items-center'>
//         <div>
//           {/* Logo */}
//           {/* <img src='/path/to/logo.png' alt='Logo' className='h-8 w-auto' /> */}
//         </div>
//         <div className='ml-auto'>
//           <li className='text-grey list-none  uppercase text-[14px]'>
//             Local time: <span className='text-white'>{localTime}</span>
//           </li>
//         </div>
//       </div>

//       <div className='flex flex-col md:flex-row mt-8 space-x-4 h-full'>
//         <div className='hidden md:block'>

//           <div className="relative w-fit overflow-hidden  mb-8">
//             {/* Outer Div with Border */}
//             <div className="relative w-[180px] h-[160px] overflow-hidden">

//             {/* Inner Div */}
//             {/* <div className="relative w-full h-[150px]  bg-black z-10  border-red-500 border-[3px]"></div> */}
//               <div className="relative w-[170px] h-[150px]  bg-black z-10 mx-auto my-auto border-red-500 border-[3px]">
//                 <img
//                   src={f2}
//                   alt="AI Portrait"
//                   className="block w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//           </div>

//           <div className='flex md:flex-col gap-8'>
//             <div>
//               <p className='letter-spacing-10'>NAME</p>
//               <h5 className='text-red text-[18px] big-shoulders-display letter-spacing-10'>SUNDAY KEVIN NEZA</h5>
//             </div>
//             <div>
//               <p className='letter-spacing-10'>OCCUPATION</p>
//               <h5 className='text-red text-[18px] big-shoulders-display letter-spacing-10'>WEB DEVELOPER</h5>
//             </div>
//             <div>
//               <p className='letter-spacing-10'>CORPORATION</p>
//               <h5 className='text-red text-[18px] big-shoulders-display letter-spacing-10'>NULL</h5>
//             </div>
//             <div>
//               <p className='letter-spacing-10'>AVAILABILITY</p>
//               <div className='bg-[#b03030] text-[#000003] flex flex-row relative overflow-hidden'>
//                 <h5 className=' text-[18px] big-shoulders-display letter-spacing-10 z-50'>OPEN FOR HIRE</h5>
//                 <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
//               </div>
              
//             </div>
//             <div>
//               <p className='letter-spacing-10'>SOCIALS</p>
//               <div className='border-[#E84A4A] border  text-red flex flex-row relative overflow-hidden'>
//                 <h5 className=' text-[18px] big-shoulders-display letter-spacing-10 uppercase'>open connection</h5>
//                 <img src={bluetooth} alt='union' loading='lazy' className='ml-auto ' />
//               </div>
              
//             </div>
//           </div>
//         </div>
//         <div className='w-full h-full uppercase flexflex-col'>
//           <h5 className='text-center text-[18px]'>swimming through a vast network of interconnected devices and <br/> servers, spreading joy and whimsy to users across the globe</h5>
//           <p className='text-center opacity-70 text-[14px]'>Artwork generated with midjourney</p>
//           <img src={bg} alt='bg' loading='lazy' className='w-full h-full'/>
//           {/* <div
//           className="flex-1 bg-cover bg-no-repeat bg-center h-full md:h-screen"
//           style={{ backgroundImage: `url(${bg})` }}
//           >
//         </div> */}

//         {/* navigation */}

//         <div className='md:flex flex-row mt-auto space-x-4 hidden '>
//             <div className=" h-full border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105 ">
//               <div className='big-shoulders-display relative bg-[#b03030] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>about
//                 <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
//               </div>
//               <div className='flex flex-col gap-8 mt-4 px-2'>
//                 <div className="text-[14px]">
//                   <p className="text-[#7A7A7A]">
//                   Discover who I am, my journey, and what drives my passion for technology and creativity.
//                   </p>
//                 </div>

//               </div>
//             </div>


//             <div className=" h-full border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105">
//               <div className='big-shoulders-display relative bg-[#242425] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>experience
//                 <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
//               </div>
//               <div className='flex flex-col gap-8 mt-4 px-2'>
//                 <div className="text-[14px]">
//                   <p className="text-[#7A7A7A] ">
//                   Explore my professional background, skills, and the roles that have shaped my expertise.
//                   </p>
//                 </div>

//               </div>
//             </div>

//             <div className=" h-full border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105">
//               <div className='big-shoulders-display relative bg-[#242425] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap '>projects
//                 <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
//               </div>
//               <div className='flex flex-col gap-8 mt-4 px-2'>
//                 <div className="text-[14px]">
//                   <p className="text-[#7A7A7A]">
//                   Browse my latest projects, showcasing my work in web development, design, and technology.
//                   </p>
//                 </div>

//               </div>
//             </div>

//             <div className="h-full border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105">
//               <div className='big-shoulders-display relative bg-[#242425] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>contact
//                 <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
//               </div>
//               <div className='flex flex-col gap-8 mt-4 px-2'>
//                 <div className="text-[14px]">
//                   <p className="text-[#7A7A7A] ">
//                   Get in touch with me for collaborations, inquiries, or just to say hello!
//                   </p>
//                 </div>

//               </div>
//             </div>
//         </div>
//         </div>
//         {/* <div
//           className="flex-1 bg-cover bg-center h-full md:h-auto"
//           style={{ backgroundImage: `url(${bg})` }}
//         >
//         </div> */}
//  {/* right side */}
      
//         <div className="md:block hidden border-l-[4px] border-[#E84A4A] max-h-[450px] uppercase relative overflow-hidden w-[22%]">
//         <div className=' right-[-8px] top-[8px] '>
        
//               <div className='big-shoulders-display relative bg-[#b03030] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>active quest
//               <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' /></div>
//               <div className='d1 text-[#7A7A7A] px-2'>the react skill-up line</div>
              
//               <div className='flex flex-col gap-8 mt-4 px-2'>
//                 <div className=''>
//                   <p className='letter-spacing-10 uppercase'>quest name</p>
//                   <h5 className='text-red text-[18px] big-shoulders-display letter-spacing-10 uppercase text-nowrap'>WEB DASHBOARD</h5>
//                 </div>
//                 <div className="text-[14px]">
//                   <h5>GOAL</h5>
//                   <p className="text-[#7A7A7A]">
//                     Implement a fully functional dashboard for analytics and content management. 
//                     Use charts to represent real-time data and implement CRUD (Create, Read, Update, Delete) functionality 
//                     for seamless content management.
//                   </p>
//                 </div>

//               </div>
//             </div>
// </div>

//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import { union, bluetooth, bg, scifi, f2 } from '../constants/constant';

function Home() {
  const [localTime, setLocalTime] = useState('');
  const [activeNav, setActiveNav] = useState('default'); // State to track active navigation

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  // Function to handle navigation clicks
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

    const experiences = [
      {
        title: "Lead Front-End Web Developer",
        date: "2024 - Present",
        updates: [
          "Optimized web pages, reducing load times by 40%.",
          "Enhanced user experience using scalable architectures.",
          "Improved navigation and accessibility with responsive designs.",
        ],
      },
      {
        title: "Tutor & Front-End Web Developer Intern",
        date: "2024",
        updates: [
          "Led a front-end development course for 28 students.",
          "Developed full-stack features for a scholarship web app.",
          "Integrated React.js, Node.js, and MongoDB for seamless functionality.",
        ],
      },
      {
        title: "Freelance Web Developer",
        date: "2021 - Present",
        updates: [
          "Delivered custom solutions across multiple industries.",
          "Built landing pages and complex web apps using React.js and Node.js.",
        ],
      },
      {
        title: "Learning Management System Project",
        date: "Project",
        updates: [
          "Developed a role-based LMS for teachers, students, and admins.",
          "Integrated JWT authentication and dynamic portals.",
        ],
      },
    ];

  // Function to render content based on active navigation
  const renderContent = () => {
    switch (activeNav) {
      case 'about':
        return (
          <div className="fade-in flex flex-col w-full h-full">
            <h5 className="text-white text-[18px] text-center">WELCOME TO MY PERSONAL WEBSITE.</h5>
            <p className="text-[#7A7A7A] mt-4 text-center">
              I have created this website to feel like a game/sci-fi interface. All text inside
              tries to reflect this.
            </p>
            <div className='flex fllex-row'>
            <div className="w-1/2 h-[500px] flex items-center justify-center">
              <h1 className="text-[14vw] font-bold text-[#E84A4A] big-shoulders-display h-full flex items-center justify-center">
                HI!
              </h1>
            </div>
              <div className="w-1/2 flex flex-col justify-center px-6">
                <h5 className="text-white text-[18px]">
                  WELCOME TO MY PERSONAL WEBSITE.
                </h5>
                <p className="text-[#7A7A7A] mt-4">
                  I have created this website to feel like a game/sci-fi
                  interface. All text inside tries to reflect this.
                </p>
                <p className="text-[#7A7A7A] mt-2">
                  You will find "achievements" or "quests" that show the progress
                  in my professional life and are related to what I am working on.
                </p>
              </div>
            </div>
            
          </div>
        );
      case 'experience':
        return (
          <div className="fade-in">
            <h5 className='text-center text-[18px]'>Experience</h5>
            <p className='text-center opacity-70 text-[#7A7A7A]'>
              Explore my professional background, skills, and the roles that have shaped my expertise.
            </p>
            <div className="space-y-6">
            {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative border border-[#e84a4a49] p-4 border-t-l-rounded-[0px] rounded-lg transition-transform duration-300 hover:scale-95 overflow-hidden"
>
  {/* Pseudo-element for the colored diagonal */}
  <div
    className="absolute top-0 left-0 bg-[#E84A4A]"
    style={{
      width: '100%',
      height: '100%',
      clipPath: 'polygon(0 0, 20px 0, 0 20px)',
      zIndex: 1,
    }}
  ></div>
            <h3 className="text-red text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400 text-sm italic mb-3">{exp.date}</p>
            <ul className="text-gray-300 text-sm list-disc pl-5 space-y-1">
              {exp.updates.map((update, idx) => (
                <li key={idx}>{update}</li>
              ))}
            </ul>
          </div>
        ))}
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="fade-in">
            <h5 className='text-center text-[18px]'>Projects</h5>
            <p className='text-center opacity-70 text-[#7A7A7A]'>
              Browse my latest projects, showcasing my work in web development, design, and technology.
            </p>
          </div>
        );
      case 'contact':
        return (
          <div className="fade-in">
            <h5 className='text-center text-[18px]'>Contact</h5>
            <p className='text-center opacity-70 text-[#7A7A7A]'>
              Get in touch with me for collaborations, inquiries, or just to say hello!
            </p>
          </div>
        );
      default:
        return (
          <div className="fade-in">
            <h5 className='text-center text-[18px]'>Swimming through a vast network of interconnected devices and <br/> servers, spreading joy and whimsy to users across the globe</h5>
            <p className='text-center opacity-70 text-[14px]'>Artwork generated with midjourney</p>
            <img src={bg} alt='bg' loading='lazy' className='w-full h-full'/>
          </div>
        );
    }
  };

  return (
    <div className='text-white md:p-[24px] iceland-regular'>
      <div className='w-full flex justify-between items-center'>
        <div>
          {/* Logo */}
          {/* <img src='/path/to/logo.png' alt='Logo' className='h-8 w-auto' /> */}
        </div>
        <div className='ml-auto'>
          <li className='text-grey list-none uppercase text-[14px]'>
            Local time: <span className='text-white'>{localTime}</span>
          </li>
        </div>
      </div>

      <div className='flex flex-col md:flex-row mt-8 space-x-4 h-full'>
        <div className='hidden md:block'>
          <div className="relative w-fit overflow-hidden mb-8">
            <div className="relative w-[180px] h-[160px] overflow-hidden">
              <div className="relative w-[170px] h-[150px] bg-black z-10 mx-auto my-auto border-red-500 border-[3px]">
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
                <h5 className='text-[18px] big-shoulders-display letter-spacing-10 z-50'>OPEN FOR HIRE</h5>
                <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
              </div>
            </div>
            <div>
              <p className='letter-spacing-10'>SOCIALS</p>
              <div className='border-[#E84A4A] border text-red flex flex-row relative overflow-hidden'>
                <h5 className='text-[18px] big-shoulders-display letter-spacing-10 uppercase'>open connection</h5>
                <img src={bluetooth} alt='union' loading='lazy' className='ml-auto' />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full  h-full uppercase flex flex-col'>
          {/* Render content based on active navigation */}
          {renderContent()}

          {/* Navigation */}
          <div className='md:flex flex-row mt-auto space-x-4 hidden'>
            {['about', 'experience', 'projects', 'contact'].map((navItem) => (
              <div
                key={navItem}
                className={` mt-8 h-full border-l-[4px] border-[#E84A4A] uppercase relative overflow-hidden group transition-transform duration-300 hover:scale-105 cursor-pointer `}
                onClick={() => handleNavClick(navItem)}
              >
                <div className={`big-shoulders-display relative letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap ${
                  activeNav === navItem ? 'bg-[#b03030]' : 'bg-[#242425]'
                }`}>
                  {navItem}
                  <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
                </div>
                <div className='flex flex-col gap-8 mt-4 px-2'>
                  <div className="text-[14px]">
                    <p className="text-[#7A7A7A]">
                      {navItem === 'about' && 'Discover who I am, my journey, and what drives my passion for technology and creativity.'}
                      {navItem === 'experience' && 'Explore my professional background, skills, and the roles that have shaped my expertise.'}
                      {navItem === 'projects' && 'Browse my latest projects, showcasing my work in web development, design, and technology.'}
                      {navItem === 'contact' && 'Get in touch with me for collaborations, inquiries, or just to say hello!'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:block hidden border-l-[4px] border-[#E84A4A] max-h-[450px] uppercase relative overflow-hidden w-[22%]">
          <div className='right-[-8px] top-[8px]'>
            <div className='big-shoulders-display relative bg-[#b03030] letter-spacing-10 text-[18px] overflow-hidden px-2 text-nowrap'>
              active quest
              <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-30px] z-10' />
            </div>
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