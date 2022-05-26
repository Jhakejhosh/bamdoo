import React, {useEffect, useRef} from 'react';
import {FaCloudMoonRain, FaBus, FaMicrophone, FaKey} from 'react-icons/fa';
import gsap from 'gsap';

function CategotrySection() {
   const categoryref = useRef();
   const weRef = useRef();
   const categorySection = useRef();
   const categoryCard = useRef();
   const card1Ref = useRef();
   const card2Ref = useRef();
   const card3Ref = useRef();
   const card4Ref = useRef()

   useEffect(() =>{
      const options = {
         root : null,
         rootMargin : "0px",
         threshold : 0.5
      }
      const observer = new IntersectionObserver(entries =>{
         const [entry] = entries;
         const {isIntersecting} = entry;
         isIntersecting && gsap.to(categoryref.current, {
            duration:2,
            x:0,
            opacity:1,
            ease:"power3.out"
         }); isIntersecting && gsap.to(weRef.current, {
            duration:2,
            y:0,
            opacity:1,
            delay:1,
            ease:"power3.out"
         }) 
      }, options);
      observer.observe(categorySection.current)
   }, []);

   useEffect(() =>{
      const options = {
         root : null,
         rootMargin : "0px",
         threshold : 0.8
      }
      const observer = new IntersectionObserver(entries =>{
         const [entry] = entries;
         const {isIntersecting} = entry;
         isIntersecting && gsap.to(card1Ref.current, {
            duration:2,
            x:0,
            opacity:1,
            ease:"power3.out"
         }); isIntersecting && gsap.to(card2Ref.current, {
            duration:2,
            x:0,
            opacity:1,
            delay:1,
            ease:"power3.out"
         }); isIntersecting && gsap.to(card3Ref.current, {
            duration:2,
            x:0,
            opacity:1,
            delay:2,
            ease:"power3.out"
         }); isIntersecting && gsap.to(card4Ref.current, {
            duration:2,
            x:0,
            opacity:1,
            delay:3,
            ease:"power3.out"
         })   
      }, options);
      observer.observe(categoryCard.current)
   }, [])
  return (
    <div className='py-16 mx-6 text-center' ref={categorySection}>
        <h4 className='font-semibold text-slate-900 translate-x-[-100%] opacity-0' 
        ref={categoryref}>CATEGORY</h4>
        <h1 className='font-bold text-[30px] font-serif mb-8 text-slate-900 translate-y-[-100%] opacity-0' 
        ref={weRef}>We Offer Best Services</h1>

        {/**********Category Cards*********** */}
        <div className='sm: block lg:flex justify-center items-center lg:space-x-10 lg:cursor-pointer 
        lg:mx-20 space-y-8 lg:space-y-0' ref={categoryCard}>

            {/*********card1********* */}
            <div className='lg:space-y-4 flex lg:block space-x-8 translate-x-[-100%] opacity-0' ref={card1Ref}>
                <div className='lg:flex justify-center items-center lg:p-4 relative'>
                    <div className='bg-slate-900 lg:bg-transparent z-10 w-12 h-12 p-2 
                    flex justify-center items-center lg:w-20 rounded-md'>
                       <FaCloudMoonRain size={40} className='z-10 text-white lg:text-slate-900'/>
                    </div>
                    <div className='bg-yellow-200 w-10 h-10 absolute bottom-1 right-[37%] sm: hidden 
                    lg:block'></div>
                </div>
                <div className='space-y-2 lg:space-y-4 text-left lg:text-center'>
                   <p className='text-[18px] text-slate-900 font-bold'>Calculated Weather</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit?
                   </p>
                </div>
            </div>

            {/*********card2********* */}
            <div className='lg:space-y-4 flex lg:block space-x-8 translate-x-[100%] opacity-0' ref={card2Ref}>
                <div className='lg:flex justify-center items-center lg:p-4 rounded-full relative'>
                   <div className='bg-slate-900 lg:bg-transparent z-10 w-12 h-12 p-2 
                    flex justify-center items-center lg:w-20 rounded-md'>
                       <FaBus size={40} className='text-white lg:text-slate-900'/>
                    </div>
                    <div className='bg-yellow-200 w-10 h-10 absolute bottom-1 right-[37%] sm: hidden 
                    lg:block'></div>
                </div>
                <div className='space-y-2 lg:space-y-4 text-left lg:text-center'>
                   <p className='text-[18px] text-slate-900 font-bold'>Best Flights</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit? 
                   </p>
                </div>
            </div>

            {/*********card3********* */}
            <div className='lg:space-y-4 flex lg:block space-x-8 translate-x-[-100%] opacity-0' ref={card3Ref}>
                <div className='lg:flex justify-center items-center lg:p-4 rounded-full relative'>
                   <div className='bg-slate-900 lg:bg-transparent z-10 w-12 h-12 p-2 
                    flex justify-center items-center lg:w-20 rounded-md'>
                       <FaMicrophone size={40} className='text-white lg:text-slate-900'/>
                    </div>   
                    <div className='bg-yellow-200 w-10 h-10 absolute bottom-1 right-[37%] sm: hidden 
                    lg:block'></div>
                </div>
                <div className='space-y-2 lg:space-y-4 text-left lg:text-center'>
                   <p className='text-[18px] text-slate-900 font-bold'>Local Events</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit? 
                   </p>
                </div>
            </div>

            {/*********card4********* */}
            <div className='lg:space-y-4 flex lg:block space-x-8 translate-x-[100%] opacity-0' ref={card4Ref}>
                <div className='lg:flex justify-center items-center lg:p-4 rounded-full relative'>
                   <div className='bg-slate-900 lg:bg-transparent z-10 w-12 h-12 p-2 
                    flex justify-center items-center lg:w-20 rounded-md'>
                       <FaKey size={40} className='text-white lg:text-slate-900'/>
                    </div>
                    <div className='bg-yellow-200 w-10 h-10 absolute bottom-1 right-[37%] sm: hidden 
                    lg:block'></div>
                </div>
                <div className='space-y-2 lg:space-y-4 text-left lg:text-center'>
                   <p className='text-[18px] text-slate-900 font-bold'>Customization</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit?  
                   </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategotrySection