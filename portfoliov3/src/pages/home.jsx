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
import { union, bluetooth, bg, scifi, f2, linkedIn, twitter, instagram, monitor } from '../constants/constant';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "ARZE",
    category: "React Website",
    description: "Built this website with multiple routers, UI elements, and tricky styling.",
    image: "/path-to-arze-image.png",
    link: "#",
    date: "Published 3 months ago",
  },
  {
    title: "Vermillion",
    category: "React Website",
    description: "Developed a modern, interactive UI for an eCommerce platform.",
    image: "/path-to-vermillion-image.png",
    link: "#",
    date: "Published 3 months ago",
  },
  {
    title: "Thunderfoot",
    category: "React Website",
    description: "Designed and implemented a fully responsive agency website.",
    image: "/path-to-thunderfoot-image.png",
    link: "#",
    date: "Published 3 months ago",
  },
];

function Home() {
  const [localTime, setLocalTime] = useState('');
  const [activeNav, setActiveNav] = useState('default');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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

  const renderContent = () => {
    switch (activeNav) {
      case 'about':
        return (
          <div className="fade-in hidden md:flex flex-col w-full h-full">
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
          <div className="hidden md:block fade-in">
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
            <div className="hidden md:block fade-in w-full px-6">
              <h5 className="text-center text-[18px] text-white">CREATIONS</h5>
              <div className="relative w-full p-6 mx-auto">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1} // ✅ Only one slide at a time
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  navigation={true}
                  pagination={{ clickable: true }}
                  className="w-full flex flex-1"
                >
                  {projects.map((project, index) => (
                    <SwiperSlide key={index} className="flex justify-center w-full p-3 md:p-8">
                      <div className="relative border border-[#E84A4A] rounded-lg p-4 group hover:scale-105 transition-transform duration-300 overflow-hidden bg-[#141414] w-full">
                        {/* Top Label */}
                        <div className="absolute top-0 left-0 text-xs text-gray-400 px-4 py-2 bg-black/50">
                          {project.date}
                        </div>
                        {/* Image */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[300px] object-cover transition-opacity duration-300"
                        />
                        {/* Text Content */}
                        <div className="mt-4 text-center">
                          <h3 className="text-[#E84A4A] font-semibold text-lg">{project.title}</h3>
                          <p className="text-[#7A7A7A] text-sm uppercase">{project.category}</p>
                          <p className="text-[#7A7A7A] text-xs mt-2">{project.description}</p>
                          {/* View Live Button */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block border border-red-500 px-6 py-2 text-red-400 text-sm tracking-wide uppercase transition-colors duration-300 hover:bg-red-500 hover:text-black"
                          >
                            View Live
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          );
          case 'contact':
            return (
              <div className="hidden md:flex items-center justify-center contact-page relative text-white h-screen w-full">
                {/* Background Image */}
                <div
                  className="absolute top-0 left-0 w-full h-full transform rotate-[-8deg] scale-125 z-0 overflow-hidden"
                >
                  <img
                    src={monitor}
                    alt="Background"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
          
                {/* Form Container */}
                <div className="relative z-10 flex flex-1 items-center justify-center h-full px-6">
                  <form className="w-full max-w-2xl max-h-max h-full bg-[#290a0ad2] bg-opacity-90 p-6 rounded-lg shadow-lg border border-[#E84A4A]">
                    <h2 className="text-[18px] mb-1 uppercase text-left">Connect with me</h2>
                    <p className="text-[#7A7A7A] mb-4 text-left">Wanna chat? Or just share something cool?</p>
                    
                    <div className="form-group mb-4">
                      <label htmlFor="name" className="block text-sm text-[#E84A4A] uppercase mb-2">
                        How should I call you?
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="w-full p-3 text-sm bg-black border border-[#7A7A77] rounded focus:outline-none focus:ring-2 focus:ring-[#E84A4A]"
                      />
                    </div>
                    
                    <div className="form-group mb-4">
                      <label htmlFor="email" className="block text-sm text-[#E84A4A] uppercase mb-2">
                        Sending From
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your.name@example.com"
                        className="w-full p-3 text-sm bg-black border border-[#7A7A77] rounded focus:outline-none focus:ring-2 focus:ring-[#E84A4A]"
                      />
                    </div>
                    
                    <div className="form-group mb-6">
                      <label htmlFor="message" className="block text-sm text-[#E84A4A] uppercase mb-2">
                        Transmitted Data
                      </label>
                      <textarea
                        id="message"
                        rows="5"
                        placeholder="Hi, I write to you about ..."
                        className="w-full p-3 text-sm bg-black border border-[#7A7A77] rounded focus:outline-none focus:ring-2 focus:ring-[#E84A4A]"
                      ></textarea>
                    </div>
                    
                    <div className="form-actions flex justify-between">
                      <button
                        type="submit"
                        className="bg-[#E84A4A] text-black ml-auto px-6 py-2 uppercase text-sm font-bold rounded shadow hover:bg-[#b03030] transition-colors duration-300"
                      >
                        Send Message [Enter]
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            );
          
      default:
        return (
          <div className="fade-in">
            <h5 className="text-center text-[18px]">Swimming through a vast network of interconnected devices and <br/> servers, spreading joy and whimsy to users across the globe</h5>
            <p className="text-center opacity-70 text-[14px]">Artwork generated with midjourney</p>
            <img src={bg} alt='bg' loading='lazy' className='w-full h-full'/>
          </div>
        );
    }
  };

  return (
    <div className='text-white md:p-[24px] p-4 iceland-regular w-full'>
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

      <div className='flex flex-col md:flex-row mt-8 md:space-x-4 h-full'>
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

        <div className='w-full  h-full uppercase flex flex-col overflow-hidden'>
          {/* Render content based on active navigation */}
          {renderContent()}

          {/* Navigation */}
          <div className='md:flex ml-1 flex-row mt-auto space-x-4 hidden'>
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

        {/* Small screen (mobile) user details */}
<div className='flex flex-col md:hidden flex-1 gap-8 px-4'>
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
    <div className='bg-[#b03030] text-[#000003] flex flex-row relative overflow-hidden p-2 rounded-md'>
      <h5 className='text-[18px] big-shoulders-display letter-spacing-10 z-50'>OPEN FOR HIRE</h5>
      <img src={union} alt='union' loading='lazy' className='ml-auto absolute bottom-[-4px] right-[-20px] z-10' />
    </div>
  </div>
  <div>
    <p className='letter-spacing-10'>SOCIALS</p>
    <div className='border-[#E84A4A] border text-red flex flex-row justify-around overflow-hidden p-2 rounded-md'>
      <img src={linkedIn} alt='union' loading='lazy' className='' />
      <img src={twitter} alt='union' loading='lazy' className='' />
      <img src={instagram} alt='union' loading='lazy' className='' />
    </div>
  </div>
</div>

{/* Small screen personal introduction */}
<div className="fade-in md:hidden mt-8 flex flex-col items-center w-full h-full text-center px-4">
  <h5 className="text-white text-[18px] mb-4">WELCOME TO MY PERSONAL WEBSITE.</h5>

  <img 
    src={f2} 
    alt="me" 
    loading="lazy" 
    className="mx-auto w-[80%] md:w-[50%] rounded-lg shadow-lg"
  />

  <div className="flex flex-col justify-center text-[#7A7A7A] mt-4 space-y-3 px-4">
    <p>
      I have created this website to feel like a game/sci-fi interface.
      All text inside tries to reflect this.
    </p>
    <p>
      You will find "achievements" or "quests" that show the progress
      in my professional life and are related to what I am working on.
    </p>
  </div>
</div>

{/* Small screen experience section */}
<div className="md:hidden fade-in px-4 mt-8">
  <h5 className='text-center text-[18px] text-white'>Experiences</h5>
  <p className='text-center opacity-70 text-[#7A7A7A]'>
    Explore my professional background, skills, and the roles that have shaped my expertise.
  </p>
  <div className="space-y-6 mt-4">
    {experiences.map((exp, index) => (
      <div
        key={index}
        className="relative border border-[#e84a4a49] p-4 rounded-lg transition-transform duration-300 hover:scale-95 overflow-hidden bg-[#1A1A1A]"
      >
        <div
          className="absolute top-0 left-0 bg-[#E84A4A]"
          style={{
            width: '100%',
            height: '100%',
            clipPath: 'polygon(0 0, 20px 0, 0 20px)',
            zIndex: 1,
          }}
        ></div>
        <h3 className="text-[#E84A4A] text-xl font-semibold">{exp.title}</h3>
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

{/* Small screen projects carousel (Auto-Sliding) */}
<div className="md:hidden mt-8 fade-in w-full px-4">
  <h5 className="text-center text-[18px] text-white">CREATIONS</h5>
  <div className="relative w-full mx-auto mt-4">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={15}
      slidesPerView={1} // ✅ Show one project at a time
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={{ clickable: true }}
      pagination={{ clickable: true, dynamicBullets: true }}
      className="w-full"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index} className="flex justify-center p-3">
          <div className="relative border border-[#E84A4A] rounded-lg p-4 group hover:scale-105 transition-transform duration-300 overflow-hidden bg-[#141414] w-full max-w-[350px]">
            <div className="absolute top-0 left-0 text-xs text-gray-400 px-4 py-2 bg-black/50">
              {project.date}
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[280px] object-cover transition-opacity duration-300"
            />
            <div className="mt-4 text-center">
              <h3 className="text-[#E84A4A] font-semibold text-lg">{project.title}</h3>
              <p className="text-[#7A7A7A] text-sm uppercase">{project.category}</p>
              <p className="text-[#7A7A7A] text-xs mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border border-red-500 px-6 py-2 text-red-400 text-sm tracking-wide uppercase transition-colors duration-300 hover:bg-red-500 hover:text-black"
              >
                View Live
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>


<div className={`mt-8 flex md:hidden items-center justify-center bg-black bg-opacity-90 transition-opacity opacity-100}`}>
      <div className="relative w-[90%] max-w-md bg-black border border-[#E84A4A] p-6 shadow-lg">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#E84A4A] pb-3 mb-4">
          <div>
            <h2 className="text-white text-lg uppercase font-bold">Open For Hire</h2>
            <p className="text-[#7A7A7A] text-xs">I would love to hear about your projects!</p>
          </div>
        </div>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-[#E84A4A] uppercase text-sm mb-1">
              How should I call you?
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 text-sm bg-black border border-[#7A7A77] rounded focus:outline-none focus:ring-2 focus:ring-[#E84A4A]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#E84A4A] uppercase text-sm mb-1">
              Sending From
            </label>
            <input
              type="email"
              placeholder="your.name@acme.com"
              className="w-full p-3 text-sm bg-black border border-[#7A7A77] rounded focus:outline-none focus:ring-2 focus:ring-[#E84A4A]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#E84A4A] uppercase text-sm mb-1">
              Transmitted Data
            </label>
            <textarea
              rows="4"
              placeholder="Hi, I write to you about ..."
              className="w-full p-3 text-sm bg-black border border-[#7A7A77] rounded focus:outline-none focus:ring-2 focus:ring-[#E84A4A]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#E84A4A] text-black py-3 uppercase text-sm font-bold tracking-wide rounded shadow hover:bg-[#b03030] transition-colors duration-300"
          >
            Send Message [Enter]
          </button>
        </form>
      </div>
    </div>

        </div>
    </div>
  );
}

export default Home;