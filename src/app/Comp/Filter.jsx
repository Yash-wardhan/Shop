import React from 'react'
import {BsArrowDown} from 'react-icons/bs'

function Filter() {
  return (
    <div className='md:flex justify-between items-center mt-4 py-4 hidden '>
      <div className='space-x-4 flex items-center justify-center  '>
        <a href="#" className='px-4 py-2 font-semibold flex items-center rounded-full text-sm bg-[#ddd] justify-between'>Headphone Type <BsArrowDown className='mx-2' size={15}/></a>
        <a href="#" className='px-4 py-2 font-semibold flex items-center rounded-full text-sm bg-[#ddd]'>Price</a>
        <a href="#" className='px-4 py-2 font-semibold flex items-center rounded-full text-sm bg-[#ddd]'>Review</a>
        <a href="#" className='px-4 py-2 font-semibold flex items-center rounded-full text-sm bg-[#ddd]'>Color</a>
        <a href="#" className='px-4 py-2 font-semibold flex items-center rounded-full text-sm bg-[#ddd]'>Materials</a>
        <a href="#" className='px-4 py-2 font-semibold flex items-center rounded-full text-sm bg-[#ddd]'>Offer</a>
        <a href="#" className='px-4 py-2 font-semibold flex items-center rounded-full text-sm bg-[#ddd]'>All Filter</a>
      </div>
      <div className='px-4 py-2 rounded-full border-2 font-semibold text-sm'>
        <button>Sort by</button>
      </div>
    </div>
  )
}

export default Filter
