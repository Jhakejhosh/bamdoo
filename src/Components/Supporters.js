import React from 'react';
import eradventure from '../Assets/eradventure.png';
import travelTime from '../Assets/travel time.png';
import ds from '../Assets/ds.png';
import youtube from '../Assets/youtube.png';
import safari from '../Assets/safari.png'

function Supporters() {
  return (
    <div className='grid grid-cols-2 gap-8 mx-6 mt-20 lg:mt-40 lg:flex lg:mx-20 
    justify-between'>
       <img src={eradventure} alt='eradventure' className='hover:scale-x-75 transition-all lg:w-30 h-16 
       lg:hover:shadow-lg lg:scale-x-75 lg:hover:shadow-gray-500 lg:hover:px-8 rounded-md'/>
       <img src={travelTime} alt='travelTime' className='hover:scale-x-75 transition-all lg:w-30 h-16 
       lg:hover:shadow-lg lg:scale-x-75 lg:hover:shadow-gray-500 lg:hover:px-8 rounded-md'/>
       <img src={ds} alt='ds' className='hover:scale-x-75 transition-all lg:w-30 h-16 
       lg:hover:shadow-lg lg:scale-x-75 lg:hover:shadow-gray-500 lg:hover:px-8 rounded-md'/>
       <img src={youtube} alt='youtube' className='hover:scale-x-75 transition-all lg:w-30 h-16 
       lg:hover:shadow-lg lg:scale-x-75 lg:hover:shadow-gray-500 lg:hover:px-8 rounded-md'/>
       <img src={safari} alt='safari' className='hover:scale-x-75 transition-all lg:w-30 h-16 
       lg:hover:shadow-lg lg:scale-x-75 lg:hover:shadow-gray-500 lg:hover:px-8 rounded-md'/> 
    </div>
  )
}

export default Supporters