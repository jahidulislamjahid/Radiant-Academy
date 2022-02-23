import React, { useEffect, useState } from 'react';
import {
  BsPencil
} from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
import categoryData from "../../utilities/FakeData/category.json";

const BrowseCategorySection = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(categoryData)
  }, []);

  return (
    <section className='container mx-auto px-2 lg:px-4'>
      <div className='container mx-auto px-5'>
        <h1 className='text-5xl font-bold text-center mt-[5rem] mb-8 text-violet-800'>Browse By Category</h1>
        <Link href="/forum/create-topic" passHref>
          <button className='rounded-md bg-rose-500 text-white font-semibold px-4 py-2 hover:bg-slate-700 duration-300 inline-flex'>
            {/* this button will link to the forum post page if there is a registered user */}
            New Topic <span className='ml-2 mt-1'><BsPencil /></span>
          </button>
        </Link>


        <div className='grid container mx-auto my-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4'>
          {
            categoryData.map(category =>
              <Link href="/forum/result-page" key={category.no} passHref>
                <div className=' bg-slate-200 rounded-md drop-shadow-md cursor-pointer'>
                  <div className='flex m-5 px-5'>
                    <span className='mt-1 mr-2 text-2xl'>
                      {category.icon}
                    </span>
                    <h1 className='font-bold text-lg'>{category.title}</h1>
                  </div>
                  <p className='font-semifold text-base m-5 px-5'>{category.desc}</p>
                </div>
              </Link>

            )
          }
        </div >
      </div >
    </section >
  );
};

export default BrowseCategorySection;