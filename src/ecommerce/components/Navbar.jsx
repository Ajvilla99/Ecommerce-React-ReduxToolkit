import { Link } from 'react-router-dom'

import { BsGrid, BsSearch } from "react-icons/bs";
import { FaUser, FaAngleDown  } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import './Navbar.css'

export const Navbar = () => {
  return (
    <header className='w-full'>
      {/* Menu top */}
      <div className='menu-top w-full pt-[40px] pb-[20px] px-[10%] flex justify-between items-center'>
        {/* Logo */}
        <div className='logo-container w-[10%]'>
          <Link className='h-[45px] border-2 flex items-center justify-center'>
            LOGO
          </Link>
        </div>
        {/* Search Bar */}
        <div className='search-container'>
          <form className='form-search flex flex-row-reverse'>
            <div className='form-search-container flex'>
            <input 
              className='input-search w-[380px] h-[45px] indent-2 outline-none border-r-[2px] border-gray-100'
              type="text" placeholder='Buscar producto...'/>
              <div className='bg-gray-100'>
                <button 
                  type='button'
                  className='btn-categories w-[160px] h-[45px] bg-white rounded-e-[8px] flex items-center justify-evenly'>
                  <span>All Categories</span> <FaAngleDown />
                </button>
              </div>
            </div>
            <button 
              className='w-[70px] bg-gray-200 text-gray-100 text-[22px] flex items-center justify-center rounded-s-[8px]'
              type="submit">
              <BsSearch />
            </button>
          </form>
        </div>
        {/* User Menu */}
        <div className='user-menu flex'>
          <div className='flex mr-[20px]'>
            <div className='flex gap-2'>
              <div className='w-[45px] h-[45px] rounded-[8px] bg-gray-200 flex items-center justify-center'>
              <FaUser className=' text-gray-100 text-[20px]'/>
              </div>
              <div>
                <ul className='text-gray-200'>
                  <li className='text-[14px]'>My User</li>
                  <li className='text-[16px] font-semibold'>Account Detail</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <Link className='w-[45px] h-[45px] flex items-center justify-center bg-[#ffffff] rounded-[8px]'>
              <MdNotificationsNone className='text-[24px]'/>
            </Link>
            <Link className='w-[45px] h-[45px] flex items-center justify-center bg-[#ffffff] rounded-[8px]'>
              <IoCartOutline className='text-[24px]'/>
            </Link>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className='w-full flex justify-center'>
        <div className='nav-container w-[80%] h-[80px] mt-8 bg-[#eee] rounded-[16px] flex items-center justify-end px-[40px]'>
          <div className='hidden'>
            {/* <BsGrid /> */}
          </div>
          <nav className=''>
            <ul className='flex gap-4 nav-ul'>
              <li className='h-full text-center text-gray-200 uppercase font-semibold'><Link className='max-w-full flex items-center justify-center relative link-nav'>Home</Link></li>
              <li className='h-full text-center text-gray-200 uppercase font-semibold'><Link className='max-w-full flex items-center justify-center relative link-nav'>Categorias</Link></li>
              <li className='h-full text-center text-gray-200 uppercase font-semibold'><Link className='max-w-full flex items-center justify-center relative link-nav'>Men</Link></li>
              <li className='h-full text-center text-gray-200 uppercase font-semibold'><Link className='max-w-full flex items-center justify-center relative link-nav'>Woman</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
