import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

function Contact() {
  return (
    <div className='mt-20 mx-6 lg:mx-20 lg:flex justify-between lg:mt-40'>
        <div className='space-y-2 '>
            <h1 className='font-bold text-[30px] text-slate-900'>Bamdoo</h1>
            <p className='font-semibold'>Book your trip in minutes, get full control for much longer &#128640;</p>
        </div>
        <div className='mt-8 space-y-4 lg:mt-0'>
            <h2 className='font-bold text-slate-900'>Company</h2>
            <div className='space-y-2 text-gray-500'>
                <p className='hover:text-black transition-all'>About</p>
                <p className='hover:text-black transition-all'>Careers</p>
                <p className='hover:text-black transition-all'>Mobile</p>
            </div>
        </div>
        <div className='mt-4 space-y-4 lg:mt-0'>
            <h2 className='font-bold text-slate-900'>Contact</h2>
            <div className='space-y-2 text-gray-500'>
                <p className='hover:text-black transition-all'>Help/FAQ</p>
                <p className='hover:text-black transition-all'>Press</p>
                <p className='hover:text-black transition-all'>Affiliate</p>
            </div>
        </div>
        <div className='mt-4 space-y-4 lg:mt-0'>
            <h2 className='font-bold text-slate-900'>More</h2>
            <div className='space-y-2 text-gray-500'>
                <p className='hover:text-black transition-all'>Airline fees</p>
                <p className='hover:text-black transition-all'>Airline</p>
                <p className='hover:text-black transition-all'>Low fare tips</p>
            </div>
        </div>
        <div className='mt-6 flex justify-center items-center space-x-2'>
            <div className='flex justify-center items-center p-4 bg-gray-300 
            rounded-full hover:bg-gray-400'><FaFacebook size={25}/></div>
            <div className='flex justify-center items-center p-4 bg-gray-300 
            rounded-full hover:bg-gray-400'><FaInstagram size={25}/></div>
            <div className='flex justify-center items-center p-4 bg-gray-300 
            rounded-full hover:bg-gray-400'><FaTwitter size={25}/></div>
        </div>
    </div>
  )
}

export default Contact