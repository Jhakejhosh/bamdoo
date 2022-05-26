import React, {useRef, useEffect} from 'react';
import {FiSquare, FiCreditCard, FiSettings, FiHeart} from 'react-icons/fi';
import {FaLeaf, FaBook, FaTelegramPlane, FaPeopleCarry} from 'react-icons/fa';
import monaco from '../Assets/monaco.jpg';
import castle from '../Assets/castle.jpg';
import gsap from 'gsap';

function Booking() {
    const bookingRef = useRef();
    const iconRef = useRef();
    const ongoingRef = useRef();
    const imgRef = useRef();

    useEffect(() => {
        const squareOptions = {
            threshold : 0.7,
            root: null,
            rootMargin: "0px"
        }
        const squareObserver = new IntersectionObserver(entries => {
            const [entry] = entries;
            const {isIntersecting} = entry;
            isIntersecting && gsap.to(imgRef.current, {
                duration : 2,
                opacity:1,
                ease : "power3.out"
            }); isIntersecting && gsap.to(ongoingRef.current, {
                duration : 2,
                opacity:1,
                x:0,
                delay:1,
                ease : "power3.out"
            }); isIntersecting && gsap.to(iconRef.current, {
                duration : 2,
                opacity:1,
                delay:2,
                y:0,
                ease : "power3.out"
            })
        }, squareOptions);
        squareObserver.observe(bookingRef.current)
    }, [])
  return (
    <div className='mt-40 mx-6 sm: space-y-10 lg:mx-20 lg:flex lg:space-x-8' ref={bookingRef}>

        {/*********Booking introduction******* */}
        <div className='lg:w-[70%]'>
           <h4 className='font-semibold text-slate-900 text-center lg:text-left'>EASY AND FAST</h4>
           <h1 className='font-bold text-[30px] font-serif mb-12 text-slate-900  lg:text-left
           text-center'>Book Your Next Trip In 3 Easy Steps</h1>

           {/********Steps********** */}
           <div className='space-y-8'>
               {/********step1******** */}
               <div className='flex space-x-4'>
                   <div className='bg-yellow-600 text-center p-3 w-12 h-12 
                   rounded-md'><FiSquare size={22} className='text-white'/></div>
                   <div>
                      <p className='font-bold text-slate-900 text-md'>Choose Destination</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit</p>
                   </div>
               </div>

               {/********step2******** */}
               <div className='flex space-x-4'>
                   <div className='bg-red-600 text-center p-3 w-12 h-12 
                   rounded-md'><FiCreditCard size={22} className='text-white'/></div>
                   <div>
                      <p className='font-bold text-slate-900 text-md'>Make Payment</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit</p>
                   </div>
               </div>

               {/********step3******** */}
               <div className='flex space-x-4'>
                   <div className='bg-blue-600 text-center p-3 w-12 h-12 
                   rounded-md'><FiSettings size={22} className='text-white'/></div>
                   <div>
                      <p className='font-bold text-slate-900 text-md'>Reach Airport on Selected Date</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit</p>
                   </div>
               </div>
           </div>
        </div>

        {/*********Examples of Tours******* */}
        <div className='relative w-full flex justify-center items-center'>
            <div className='bg-white overflow-hidden rounded-lg shadow-blue-500
            space-y-4 pb-6 lg:w-[400px] lg:p-6 lg:shadow-gray-300 lg:shadow-2xl'>
                <img src={monaco} alt='monaco' className='lg:rounded-lg opacity-0'ref={imgRef}/>
                <p className='mx-4 font-bold text-lg lg:mx-0'>Trip to Monaco</p>
                <p className='mx-4 text-gray-700 lg:mx-0'>14-29 June| by Joshua </p>
                <div className='flex space-x-4 mx-4 lg:mx-0 translate-y-[100%] opacity-0' ref={iconRef}>
                    <div className='bg-gray-200 text-gray-700 flex justify-center 
                    items-center p-4 rounded-full'><FaLeaf/></div>
                    <div className='bg-gray-200 text-gray-700 flex justify-center 
                    items-center p-4 rounded-full'><FaBook/></div>
                    <div className='bg-gray-200 text-gray-700 flex justify-center 
                    items-center p-4 rounded-full'><FaTelegramPlane/></div>
                </div>
                <div className='flex justify-between items-center mx-4 mb-6 lg:mx-0'>
                    <div className='text-gray-700 flex 
                    items-center'><FaPeopleCarry className='mr-4' size={20}/> 24 people going</div>
                    <FiHeart className='text-blue-500' size={20}/>
                </div>
            </div>

            {/*********absolutely positioned blur color********** */}
            <div className='sm: w-[300px] h-[300px] bg-blue-500 lg:block absolute lg:top-[-80px]
            top-[-40px] right-[-70px] rounded-full z-[-1] blur-3xl lg:right-16'></div>

            {/**********absolutely positioned card******* */}
           <div className='flex space-x-4 bg-white p-2 shadow-xl rounded-md shadow-black opacity-0 translate-x-[100%]
           absolute bottom-60 right-[-20px] lg:bottom-20 lg:right-[-10px] lg:w-[300px] lg:shadow-gray-200' 
           ref={ongoingRef}>
               <img src={castle} alt='castle' className='w-12 h-12 rounded-full object-cover'/>
               <div className='space-y-0 lg:space-y-1'>
                  <p>Ongoing</p>
                  <p className='font-bold'>Trip to Germany</p>
                  <p className='font-semibold'><span className='text-blue-500'>40%</span> completed</p>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Booking