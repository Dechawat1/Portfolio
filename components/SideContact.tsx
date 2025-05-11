import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLine } from "react-icons/fa6";
import Link from 'next/link';

export default function SideContact() {
  return (
    <div className="fixed top-0 left-0 w-16 lg:flex flex-col hidden">
      {/* line */}
      <div className="h-[35vh] relative">
        <div className='h-full border border-primary absolute top-0 left-1/2 -translate-x-1/2'></div>
      </div>
      {/* icons */}
      <div className='text-text flex flex-col gap-2 items-center mt-2'>
        <Link target='_blank' href={'https://www.facebook.com/'}>
          <FaFacebookSquare size={24} className='bg-white text-blue-600 rounded-sm hover:scale-105' title='Facebook'/>
        </Link>
        <Link target='_blank' href={'https://www.instagram.com/'}>
          <FiInstagram size={24} className='bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md hover:scale-105' title='Instagram'/>
        </Link>
        <Link target='_blank' href={'https://line.me/ti/p/'}>
          <FaLine size={24} className='text-green-600 bg-white rounded-md hover:scale-105' title='Line'/>
        </Link>

      </div>

    </div>
  )


}
