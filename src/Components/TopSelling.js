import React, {useRef, useEffect} from 'react';
import {FaTelegramPlane} from 'react-icons/fa';
import rome from '../Assets/rome.jpg';
import europe from '../Assets/europe.jpg';
import australia from '../Assets/australia.jpg';
import gsap from 'gsap';

function TopSelling() {
    const italyRef = useRef();
    const sellingRef = useRef()
    const londonRef  = useRef();
    const australiaRef = useRef()

    useEffect(() => {
        const options = {
            root: null,
            rootMargin : '0px',
            threshold : 0.5
        }
        const observer = new IntersectionObserver( entries => {
            const [entry] = entries;
            const {isIntersecting} = entry;
            isIntersecting && gsap.to(italyRef.current, {
                duration : 2,
                opacity : 1,
                y : 0,
                ease: "power3.out"
            }); isIntersecting && gsap.to(londonRef.current, {
                duration : 2,
                opacity : 1,
                delay :1,
                y : 0,
                ease: "power3.out"
            }); isIntersecting && gsap.to(australiaRef.current, {
                duration : 3,
                opacity : 1,
                delay : 2,
                y : 0,
                ease: "power3.out"
            })
        }, options);
        observer.observe(sellingRef.current)
    }, [])
  return (
    <div className='mx-6 pb-6 lg:mx-20 mt-16'>
        <h4 className='font-semibold text-slate-900 text-center'>TOP SELLING</h4>
        <h1 className='font-bold text-[30px] font-serif mb-8 text-slate-900 text-center'>Top Destinations</h1>
        <div className='space-y-16 lg:flex lg:space-x-8 justify-between items-center' ref={sellingRef}>

            {/********card1********** */}
            <div className='bg-white overflow-hidden rounded-lg shadow-lg space-y-4 opacity-0 translate-y-[100%]
            shadow-gray-300 pb-8 lg:mt-16 lg:shadow-2xl hover:skew-x-3 transition-all' ref={italyRef}>
                <img src={rome} alt='rome'/>
                <div className='flex justify-between items-center px-6 pt-2'>
                    <p className='font-semibold '>Rome, Italy</p>
                    <p>$5.42k</p>
                </div>
                <div className='px-6 flex items-center space-x-2'>
                    <FaTelegramPlane size={20} className='mr-4'/> 10 Days Trip
                </div>
            </div>

            {/********card2********** */}
            <div className='bg-white overflow-hidden rounded-lg shadow-lg space-y-4 opacity-0 translate-y-[100%]
            shadow-gray-300 pb-8 lg:shadow-2xl hover:skew-x-3 transition-all' ref={londonRef}>
                <img src={europe} alt='europe'/>
                <div className='flex justify-between items-center px-6 pt-2'>
                    <p className='font-semibold '>London, Europe</p>
                    <p>$4.2k</p>
                </div>
                <div className='px-6 flex items-center space-x-2'>
                    <FaTelegramPlane size={20} className='mr-4'/> 12 Days Trip
                </div>
            </div>

            {/********card3********** */}
            <div className='bg-white overflow-hidden rounded-lg shadow-lg space-y-4 opacity-0 translate-y-[100%]
            shadow-gray-300 pb-8 lg:shadow-2xl hover:skew-x-3 transition-all' ref={australiaRef}>
                <img src={australia} alt='australia'/>
                <div className='flex justify-between items-center px-6 pt-2'>
                    <p className='font-semibold '>Australia, Australia</p>
                    <p>$52k</p>
                </div>
                <div className='px-6 flex items-center space-x-2'>
                    <FaTelegramPlane size={20} className='mr-4'/> 28 Days Trip
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSelling