import React from 'react'

function Navbar() {
  return (
    <div className='bg-green-950/95 text-white'>
        <div className='max-w-7xl flex justify-between items-center text-xs mx-auto px-2 py-4'>      
            <div >+917584758475</div>
            <div>Get 50% off on Selected items <span className='md:mx-1'></span> | <span className='md:mx-1'>Shop Now</span></div>
            <div className='md:flex space-x-6 hidden'>
                <div>Eng</div>
                <div>Location</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
