import React from 'react'

function Hero() {
  return (
    <div className='bg-Poster bg-center w-full h-40 mt-4 md:h-56'>
        <div className='px-2 md:px-28 md:w-3/4 h-full flex flex-col justify-center md:justify-center space-y-4'>
            <div className='text-2xl md:text-4xl text-black font-bold'>Grab Upto 50% Off On Selected Headphone</div>
            <div className='flex items-center mt-5'>
                <a href="" className='bg-green-950/95 px-2 py-2 text-sm md:px-4 md:py-2 text-white rounded-full'>Buy Now</a>
            </div>
        </div>
    </div>
  )
}

export default Hero
