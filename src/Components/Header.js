import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='lg:mx-20 mx-6 py-6'>
        {/**********NavBar********** */}
        <nav className='flex justify-between items-center'>

            {/*********Logo******** */}
            <div className='font-bold text-xl'>Bamd<span className='text-yellow-600 '>oo</span></div>

            {/**************humburger********* */}
            <div className='lg:hidden'>
              <FaBars size={20} onClick={() =>setOpenMenu(true)}/>
            </div>

            {/**********menus*********** */}
            <ul className='lg:flex lg:justify-center lg:items-center lg:font-semibold sm: hidden'>
               <li className='hover:text-yellow-600'><a href='#index'>Destinations</a></li>
               <li className='hover:text-yellow-600'><a href='#index'>Hotels</a></li>
               <li className='hover:text-yellow-600'><a href='#index'>Flights</a></li>
               <li className='hover:text-yellow-600'><a href='#index'>Bookings</a></li>

               {/*********cancel-menu******** */}
               <div className='lg:hidden absolute top-2 right-8'>
               <FaTimes onClick={() => setOpenMenu(false)}/>
               </div>
            </ul>

             {/**********Registration********** */}
             <div className='lg:flex lg:justify-center lg:items-center sm: hidden'>
                  <button className='lg:mr-10 hover:text-yellow-600 lg:font-semibold'><a href='#index'>Login</a></button><br/>
                  <button className='px-4 py-2 border rounded-md border-black
                 hover:border-yellow-600 hover:text-yellow-600
                 lg:font-semibold'><a href='#index'>Sign up</a></button>
               </div>

            
            {/***********Menus for mobile view********** */}
            {
              openMenu && (
                <ul className='lg:flex lg:justify-center lg:items-center lg:font-semibold block absolute 
            lg:relative w-full bg-slate-900 z-40 top-0 text-center left-0 py-20 text-white 
            text-[20px] h-full space-y-4 px-4 transition-all'>
               <li className='hover:text-yellow-600'><a href=''>Destinations</a></li>
               <li className='hover:text-yellow-600'><a href=''>Hotels</a></li>
               <li className='hover:text-yellow-600'><a href=''>Flights</a></li>
               <li className='hover:text-yellow-600'><a href=''>Bookings</a></li>

               {/*********cancel-menu******** */}
               <div className='lg:hidden absolute top-2 right-8'>
               <FaTimes onClick={() => setOpenMenu(false)}/>
               </div>


               {/**********Registration********** */}
               <div className='lg:flex lg:justify-center lg:items-center block space-y-4 pt-2'>
                  <button className='lg:mr-10 hover:text-yellow-600 lg:font-semibold'><a href='#index'>Login</a></button><br/>
                  <button className='px-4 py-3 border rounded-md lg:border-black border-yellow-600
                 hover:border-yellow-600 hover:text-yellow-600 w-full
                 lg:font-semibold'><a href='#index'>Sign up</a></button>
               </div>
            </ul>
              )
            }
        </nav>
    </div>
  )
}

export default Header