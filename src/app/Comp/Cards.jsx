import Link from 'next/link';
import React from 'react';

function Cards({ data }) {
    const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '..Read more';
    }
    return description;
  };
  return (
    <div className='grid sm:grid-cols-2 gap-5  items-center justify-center md:grid-cols-4  px-6 py-6'>
      {data.map((item, index) => (
        <div key={index} className='flex flex-col gap-4 justify-evenly bg-white shadow-md rounded-md  sm:w-[250px] sm:h-[400px] '>
          <div className='h-40 w-full overflow-hidden'>
            <Link href="/item/[id]" as={`/item/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className='h-full w-full object-contain mix-blend-darken'
            />
            </Link>
          </div>
          <div className='p-4 flex justify-end flex-col flex-grow'>
            <Link href="/item/[id]" as={`/item/${item.id}`}>
            <h3 className='text-sm font-bold'>{item.title}</h3>
            </Link>
            <h5 className='text-xs text-gray-500 font-semibold mb-2'>{truncateDescription(item.description, 100)} {/* Display up to 100 characters */}</h5>
            <div className='flex justify-between items-center mt-4'>
              <p className='text-xs font-bold '>
                {item.rating.rate} stars ({item.rating.count} reviews)
              </p>
              <div className='font-bold text-sm'>$ {item.price}</div>
            </div>
          <button className='mt-3 px-2 py-2 border-2 font-bold rounded-full text-sm border-black hover:bg-black hover:text-white duration-100'>
              Add to Cart
          </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
