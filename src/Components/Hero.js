import React, {useEffect, useRef} from 'react';
import { FaPlay } from 'react-icons/fa';
import Traveller from '../Assets/fam traveller.png';
import bus from '../Assets/bus.png';
import gsap from 'gsap';

function Hero() {
    const bestRef = useRef();
    const travelRef = useRef();
    const loremRef = useRef();
    const findRef = useRef();
    const playRef = useRef(); const imgRef = useRef()

    useEffect(() => {
        gsap.to(bestRef.current, {
            duration : 2,
            delay:1,
            x : 0,
            ease : "power3.out"
        }); gsap.to(travelRef.current, {
            duration : 2,
            opacity : 1,
            delay:2,
            y : 0,
            ease : "power3.out"
        }); gsap.to(loremRef.current, {
            duration : 2,
            delay : 3,
            opacity : 1,
            ease : "power3.out"
        }); gsap.to(findRef.current, {
            duration : 2,
            y : 0,
            opacity : 1,
            delay : 4,
            ease : "power3.out"
        });gsap.to(playRef.current, {
            duration : 2,
            x : 0,
            opacity : 1,
            delay: 5,
            ease : "power3.out"
        }); gsap.to(imgRef.current, {
            duration : 2,
            opacity : 1,
            delay : 6,
            ease : "power3.out"
        })
    }, [])
  return (
    <div className='lg:mx-20 lg:flex lg:justify-between lg:items-center space-x-1 relative mx-6'>
        {/*************Hero introduction*************** */}
        <div className='lg:space-y-4 lg:w-[60%] lg:pr-8 sm: py-8 sm: text-center sm: pb-10 lg:text-left'>
            <h4 className='text-red-600 font-bold sm: text-[16px] translate-x-[-100%]' 
            ref={bestRef}>BEST DESTINATIONS AROUND THE WORLDS</h4>
            <h1 className='text-slate-900 font-extrabold font-serif 
            lg:text-[55px] text-[40px] translate-y-[100%] opacity-0' 
            ref={travelRef}>Travel, enjoy and live a new and full life</h1>
            <p className='font-semibold opacity-0' 
            ref={loremRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit? 
                Repudiandae provident commodi, optio earum voluptatem possimus, tenetur, 
                officia doloribus eaque velit labore! Nam adipisci, distinctio 
                laboriosam suscipit veniam ratione.
            </p>

            {/***********Buttons********* */}
            <div className='flex space-x-6 items-center mt-4'>
                <span className='bg-yellow-600 text-white 
                px-4 py-2 rounded-md cursor-pointer shadow-lg hover:bg-yellow-700 
                shadow-yellow-600 translate-y-[-100%] opacity-0' ref={findRef}>Find out more</span>
                <span className='flex items-center font-semibold translate-x-[100%] opacity-0' 
                ref={playRef}>
                    <FaPlay className='mr-4 text-white bg-red-600 
                    w-10 h-10 p-4 rounded-full shadow-lg cursor-pointer shadow-red-600 
                    hover:bg-red-700' size={10}/> Play Demo
                </span>
            </div>
        </div>

        {/***********Hero image*********** */}
        <div className='lg:w-[80%] opacity-0' ref={imgRef}>
            <img src={Traveller} alt='traveller'className='lg:w-full'/>
        </div>

        {/***********absolutely positioned images*********** */}
        <div className='absolute bottom-[30%] lg:bottom-[60%] lg:left-[40%]'>
            <img src={bus} alt='bus' className='w-[90px]'/>
        </div>
        <div className='absolute bottom-[30%] right-0 lg:bottom-[60%]'>
            <img src={bus} alt='bus' className='w-[50px] lg:w-[90px]'/>
        </div>

    </div>
  )
}

export default Hero