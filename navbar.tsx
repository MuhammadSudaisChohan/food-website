import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoIosMenu } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='container pt-6'>
      <div className="flex justify-between items-center ml-20 mt-5">
        <Image src="/assests/logo.png" width={50} height={50} alt='logo'/>

        <ul className='md:flex hidden gap-8 items-center font-semibold text-[14px]'>
        <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Dish</li>
          <li>Contact</li>

          <button className='bg-orange-500 text-white px-6 py-2 rounded-xl '>SignUp</button>
        </ul>
        <IoIosMenu className='md:hidden text-orange-500 size-10'/>
      </div>
  
    </div>
  )
}

export default Navbar
