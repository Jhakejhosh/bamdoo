import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'

function Emailing() {
  return (
    <div className='mt-20 bg-sky-200 p-6 pt-12 space-y-6 sm: rounded-tr-[70px] relative lg:px-60 
     lg:mx-20 lg:py-20'>
        <h1 className='text-center font-bold lg:text-slate-900 lg:text-center
        text-slate-600 text-lg lg:text-[30px]'>Subscribe to get information, latest news and other interesting offers about Bamdoo</h1>
        <form className='flex items-center relative lg:justify-center'>
            <input placeholder='Your mail' className='py-2 px-10 outline-none rounded-l-lg'/>
            <FiMail className='text-gray-400 absolute left-3 lg:left-[27%]'/>
            <button className='bg-red-600 text-white py-2 px-1 rounded-r-lg 
            hover:bg-red-700 transition-all lg:px-3'>Subscribe</button>
        </form>
        <div className='absolute right-2 top-[-30px] bg-blue-600 flex justify-center items-center 
        p-3 rounded-full text-white hover:bg-blue-700 transition-all'>
            <FaTelegramPlane size={20}/>
        </div>
    </div>
  )
}

export default Emailing