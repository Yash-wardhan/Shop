import React from 'react'

function NavbarHero() {
  return (
    <div className='flex justify-between items-center md:px-2 md:py-5'>
      <div className='flex items-center space-x-2 font-bold text-xl text-green-950/90'><img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Shopping_cart_icon.svg" alt="Shop" className='w-10 ' /><h3>Shopcart</h3></div>
      <div className='hidden md:flex space-x-6 text-sm font-semibold'>
        <a href="#">Categories</a>
        <a href="#">Deals</a>
        <a href="#">What's New</a>
        <a href="#">Delivery</a>
      </div>
      <div className='flex space-x-6 text-sm font-semibold'>
        <h1>Input</h1>
        <a href="#">Account</a>
        <a href="#">Carts</a>
      </div>
    </div>
  )
}

export default NavbarHero
