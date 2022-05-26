import React, {useState, useEffect} from 'react';
import anime from '../Assets/anime.png';
import {FaTimes} from 'react-icons/fa'

function Modal() {

    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        setTimeout(() =>setShowInfo(true), 10000)
    }, [])

  return (
      <>
      {
          showInfo && <div className='flex mx-6 shadow-lg fixed bg-white z-20 items-center space-x-4
          top-[30%] shadow-black pt-16 lg:w-[450px] lg:right-20 lg:top-40'>
              <button className='absolute top-4 right-4 text-xl' onClick={() =>setShowInfo(false)}>
                  <FaTimes/>
              </button>
              <div>
                  <img src={anime} alt="anime"/>
              </div>
              <div className='px-2 space-y-3 pb-2'>
                  <h1 className='text-slate-900 text-2xl font-bold'>Welcome to Bamdoo</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, impedit? Repudiandae provident commodi, optio earum voluptatem possimus, tenetur.</p>
              </div>
          </div>
      }</>
  )
}

export default Modal