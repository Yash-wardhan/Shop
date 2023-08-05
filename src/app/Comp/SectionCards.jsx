'use client'
import React, { useState, useEffect } from 'react';
import Cards from './Cards';

function SectionCards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div class="max-w-screen-lg m-auto catalog-product grid grid-cols-3 gap-8 py-8">
    <h3 class="col-span-3 font-bold"> Offer </h3>
    <div class="border border-gray-200 p-4">
            <div class="animate-pulse space-y-2">
                <div class="bg-gray-200 h-48"></div>
                <div class="flex-1 space-y-2">
                    <div class="h-16 bg-gray-200 full"></div>
                    <div class="space-x-2 flex">
                        <div class="h-8 bg-gray-200 w-full"></div>
                        <div class="h-8 bg-gray-200 w-full"></div>
                    </div>
                </div>
            </div>
    </div>

    <div class="border border-gray-200 p-4">
        <div class="animate-pulse space-y-2">
            <div class="bg-gray-200 h-48"></div>
            <div class="flex-1 space-y-2">
                <div class="h-16 bg-gray-200 full"></div>
                <div class="space-x-2 flex">
                    <div class="h-8 bg-gray-200 w-full"></div>
                    <div class="h-8 bg-gray-200 w-full"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="border border-gray-200 p-4">
        <div class="animate-pulse space-y-2">
            <div class="bg-gray-200 h-48"></div>
            <div class="flex-1 space-y-2">
                <div class="h-16 bg-gray-200 full"></div>
                <div class="space-x-2 flex">
                    <div class="h-8 bg-gray-200 w-full"></div>
                    <div class="h-8 bg-gray-200 w-full"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="border border-gray-200 p-4">
        <div class="animate-pulse space-y-2">
            <div class="bg-gray-200 h-48"></div>
            <div class="flex-1 space-y-2">
                <div class="h-16 bg-gray-200 full"></div>
                <div class="space-x-2 flex">
                    <div class="h-8 bg-gray-200 w-full"></div>
                    <div class="h-8 bg-gray-200 w-full"></div>
                </div>
            </div>
        </div>
    </div>
    <h3 class="col-span-3 font-bold"> Option 02 </h3>
    <div class="border border-gray-200 p-4">
        <div class="animate-pulse space-y-2">
            <div class="bg-gray-200 w-48 h-48"></div>
            <div class="flex-1 space-y-2">
                <div class="h-6 bg-gray-200 full"></div>
                <div class="h-6 bg-gray-200 w-2/3"></div>
            </div>
        </div>
    </div>
    <div class="border border-gray-200 p-4">
        <div class="animate-pulse space-y-2">
            <div class="bg-gray-200 w-48 h-48"></div>
            <div class="flex-1 space-y-2">
                <div class="h-6 bg-gray-200 full"></div>
                <div class="h-6 bg-gray-200 w-2/3"></div>
            </div>
        </div>
    </div>
    <div class="border border-gray-200 p-4">
        <div class="animate-pulse space-y-2">
            <div class="bg-gray-200 w-48 h-48"></div>
            <div class="flex-1 space-y-2">
                <div class="h-6 bg-gray-200 full"></div>
                <div class="h-6 bg-gray-200 w-2/3"></div>
            </div>
        </div>
    </div>

    <h3 class="col-span-3 font-bold"> Option 03 </h3>
    <div class="border border-gray-200 p-4 col-span-3">
        <div class="animate-pulse space-y-8">
            <div class="flex space-x-4">
            <div class="bg-gray-200 h-24 w-24 rounded-full"></div>
                <div class="space-y-2 flex-1 pt-4">
                 <div class="h-6 bg-gray-200 w-1/2"></div>
                 <div class="h-6 bg-gray-200 w-1/3"></div>
                </div>
            </div>
            <div class="flex-1 space-y-2">
                <div class="h-6 bg-gray-200 full"></div>
                <div class="h-6 bg-gray-200 w-3/3"></div>
            </div>
        </div>
    </div>

</div>
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div className='flex flex-col justify-center items-center gap-6 px-2 py-2'>
      <Cards data = {data}/>
    </div>
  );
}

export default SectionCards;
