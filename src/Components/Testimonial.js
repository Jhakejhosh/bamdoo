import React, {useState} from 'react';
import people from './Data';
import {FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown} from 'react-icons/fa'

function Testimonial() {
    
    const [index, setIndex] = useState(0);
    const [readMore, setReadMore] = useState(false)
    const {job, name, info, image} = people[index];

    const changeNumber = (number) => {
      if (number > people.length-1) {
        return 0
      }
      if (number < 0 ) {
        return people.length-1
      }
      return number
    }

    const prevDirection = () => {
      setIndex(() => {
        const newIndex = index - 1
        return changeNumber(newIndex)
      })
    };
    const nextDirection = () => {
      setIndex(() => {
        const newIndex = index + 1
        return changeNumber(newIndex)
      })
    }


  return (
    <div className='lg:mx-20 lg:flex mt-40'>
        {/*************Testimonial introduction******** */}
        <div className='mx-6'>
           <h4 className='font-semibold text-slate-900 text-center lg:text-left'>TESTIMONIALS</h4>
           <h1 className='font-bold text-[30px] font-serif mb-8 text-slate-900 text-center lg:text-left'>
               What People Say About Us
           </h1>
        </div>

        {/*********arrows for mobile device******* */}
        <div className='flex space-x-2 justify-between mx-6 mb-4 lg:hidden'>
          <FaArrowLeft onClick={prevDirection}/>
          <FaArrowRight onClick={nextDirection}/>
        </div>
        
        {/*********arrows for large device********* */}
        <div className='sm: hidden lg:block space-y-3 absolute right-8'>
          <FaArrowUp onClick={prevDirection} className='hover:text-gray-500'/>
          <FaArrowDown onClick={nextDirection} className='hover:text-gray-500'/>
        </div>

        {/**************People********** */}
        <div className='lg:block space-x-2 mx-6 shadow-xl p-3 rounded-md lg:rounded-lg relative 
        bg-white lg:w-[700px] lg:shadow-gray-400'>
           <img src={image} alt={name} className='w-16 h-16 rounded-full object-cover'/>
           <div className='space-y-2 lg:px-16'>
               <p>{readMore ? info : `${info.substring(0,100)}...`} 
               <button onClick={() => setReadMore(!readMore)} 
               className='text-blue-500'>{readMore ? "Show less" : "Read more"}</button></p>
               <p className='font-semibold'>{name}</p>
               <p>{job}</p>
           </div>
        </div>
    </div>
  )
}

export default Testimonial