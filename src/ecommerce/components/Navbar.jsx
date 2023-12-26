import { Link } from 'react-router-dom'

import { BsSearch } from "react-icons/bs";
import { LuMapPin, LuMenu } from "react-icons/lu";
import { FaUser, FaAngleDown  } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";


export const Navbar = () => {
  return (
    <header className='w-full min-h-[140px] flex justify-center pt-2
                       xl:mt-5'>
      <div className='w-11/12 flex flex-col gap-2
                      
                      xl:w-[1200px] '>
    {/* ---- Menu Top ---- */}
        <div className='flex flex-wrap justify-between
                        xl:flex-nowrap xl:h-12 xl:gap-5'>
    {/* ---- Logo ---- */}
          <div className='w-1/2 h-12 border-red-300 rounded-lg flex justify-center items-center bg-gray-200 text-center
                          xl:w-[200px] xl:h-full'>
            <Link to={'/'} className='text-gray-300 font-bold w-full'>LOGO</Link>
          </div>
    {/* ---- Form Search ---- */}
          <div className='w-full order-3 mt-2
                          xl:w-[calc(100%-440px)] xl:order-2 xl:h-full xl:mt-0'>
            <form className='w-full flex 
                            xl:h-full'>
              <input 
                className='w-[calc(100%-48px)] h-10 rounded-l-md indent-4 outline-none text-sm text-gray-200
                          xl:h-full xl:w-[100%-64px]'
                placeholder='Buscar productos, marcas y más...'
                type="text" />
              <button className='w-12 flex items-center justify-center text-gray-100 bg-gray-200 rounded-r-md
                                xl:w-16'>
                <BsSearch className=''/>
              </button>
            </form>
          </div>
          {/* ---- Social ---- */}
          <div className='w-1/2 h-12 flex flex-nowrap gap-1
                          lg:w-[200px] lg:order-3'>
            <div className='w-12 h-full rounded-full overflow-hidden'>
              <img 
                className='w-full h-full object-cover'
                src="https://i.imgur.com/773QfGA.jpg" alt="Perfil" />
            </div>
            <div className='w-[calc(100%-50px)] flex items-center justify-around'>
              <span className='w-[calc(100%-20px)] text-sm capitalize line-clamp-1 text-gray-200'>karolayn arguello</span>
              <button className='text-gray-200 text-sm'>
                <FaAngleDown />
              </button>
            </div>
          </div>
        </div>
        {/* ---- Menu Bot ---- */}
        <div className='flex justify-between h-14 items-center'>
        {/* ---- Address ---- */}
          <div className='hidden 
                          xl:w-[200px] xl:h-full xl:flex items-center xl:justify-center xl:gap-4'>
          <LuMapPin /> <Link>Agregar dirección</Link>
          </div>
        {/* ---- Navbar ---- */}
          <div className='w-full h-full relative order-2 text-left 
                          xl:w-[calc(100%-440px)]'>
            <button className='h-full text-4xl text-gray-200
                               lg:hidden'>
              <LuMenu/>
            </button>
            <nav className='w-[calc(100vw-5%)] left-[-5%] overflow-hidden absolute
                            xl:w-full xl:h-full xl:static'>
              <ul className='w-full h-0 text-center flex flex-col gap-0 bg-gray-200
                             xl:h-full xl:flex-row xl:justify-around xl:items-center xl:bg-transparent'>
                <li className='h-12'>
                  <Link to={'categories'}
                    className='capitalize w-full h-full flex items-center justify-center bg-gray-200 hover:bg-gray-600 text-gray-300
                               xl:bg-inherit xl:text-gray-200 xl:hover:bg-transparent'>Categorias</Link>
                </li>
                <li className='h-12'>
                  <Link className='capitalize w-full h-full flex items-center justify-center bg-gray-200 hover:bg-gray-600 text-gray-300
                                   xl:xl:bg-inherit xl:text-gray-200 xl:hover:bg-transparent'>Ofertas</Link>
                </li>
                <li className='h-12'>
                  <Link className='capitalize w-full h-full flex items-center justify-center bg-gray-200 hover:bg-gray-600 text-gray-300
                                   xl:xl:bg-inherit xl:text-gray-200 xl:hover:bg-transparent'>Hombre</Link>
                </li>
                <li className='h-12'>
                  <Link className='capitalize w-full h-full flex items-center justify-center bg-gray-200 hover:bg-gray-600 text-gray-300
                                   xl:xl:bg-inherit xl:text-gray-200 xl:hover:bg-transparent'>Mujer</Link>
                </li>
                <li className='h-12'>
                  <Link className='capitalize w-full h-full flex items-center justify-center bg-gray-200 hover:bg-gray-600 text-gray-300
                                   xl:xl:bg-inherit xl:text-gray-200 xl:hover:bg-transparent'>gaming</Link>
                </li>
                <li className='h-12'>
                  <Link className='capitalize w-full h-full flex items-center justify-center bg-gray-200 hover:bg-gray-600 text-gray-300
                                   xl:xl:bg-inherit xl:text-gray-200 xl:hover:bg-transparent'>vender</Link>
                </li>
                <li className='h-12'>
                  <Link className='capitalize w-full h-full flex items-center justify-center bg-gray-200 hover:bg-gray-600 text-gray-300
                                   xl:xl:bg-inherit xl:text-gray-200 xl:hover:bg-transparent'>cupones</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* ---- Notification / Cart / # ---- */}
          <div className='flex items-center justify-center order-2 mt-1 gap-2
                          xl:w-[200px] xl:mt-0 xl:justify-evenly'>
            <Link 
              to={'cart'}
              className='w-10 h-10 rounded flex justify-center items-center bg-gray-200
                         xl:w-12 xl:h-12'>
              <IoCartOutline  color='white' className='text-2xl'/>
            </Link>
            <Link className='w-10 h-10 rounded flex justify-center items-center bg-gray-200
                             xl:w-12 xl:h-12'>
              <FaRegHeart color='white' className='text-xl'/>
            </Link> 
            <Link className='w-10 h-10 rounded flex justify-center items-center bg-gray-200
                             xl:w-12 xl:h-12'>
              <MdNotificationsNone color='white' className='text-2xl'/>
            </Link> 
          </div>
        </div>
      </div>
    </header>
  )
}

// // {      <div className='w-11/12
//         xl:w-[1200px] flex flex-col'>
//     {/* ---- Menu Top ---- */}
//         <div className='flex flex-wrap h-12 justify-between
//                         xl:gap-5 xl: '>
//     {/* ---- Logo ---- */}
//           <div className='w-2/5
//                           lg:w-[200px] border-gray-200 border-4 flex items-center justify-center'>
//             <Link className='text-gray-200 font-bold'>LOGO</Link>
//           </div>
//     {/* ---- Form Search ---- */}
//           <div className='w-full order-3 mt-3
//                           lg:w-[calc(100%-440px)] h-full'>
//             <form className='w-full h-full flex '>
//               <input 
//                 className='w-full h-full bg-gray-300 outline-none border-none rounded-l-lg indent-5'
//                 placeholder='Buscar productos, marcas y más...'
//                 type="text" />
//               <button className='w-16 h-full bg-gray-200 flex justify-center items-center rounded-r-lg hover:bg-succes_hover'>
//                 <BsSearch className='text-2xl text-gray-100'/>
//               </button>
//             </form>
//           </div>
//           {/* ---- Social ---- */}
//           <div className='w-2/5
//                           lg:w-[200px] h-full flex gap-2 justify-end'>
//             <div className='h-full min-w-[48px] max-w-[48px] bg-slate-600 rounded-full overflow-hidden'>
//               <img 
//                 className='object-contain'
//                 src="https://i.imgur.com/773QfGA.jpg" alt="" />
//             </div>
//             <div className='flex flex-col justify-center'>
//               <span className='text-gray-200 text-left line-clamp-1 capitalize'>karolayn arguello asd</span>
//               <button className='text-gray-200 font-medium text-left text-xs flex gap-1 items-center'>
//                 Configuracion
//                 <FaAngleDown />
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* ---- Menu Bot ---- */}
//         <div className='flex gap-5
//                         xl:h-12'>
//           <div className='xl:w-[200px] h-full flex items-center justify-center gap-4'>
//           <LuMapPin /> <Link>Agregar dirección</Link>
//           </div>
//         {/* ---- Navbar ---- */}
//           <div className='xl:w-[calc(100%-440px)] h-full'>
//             <nav className='h-full'>
//               <ul className='flex w-full h-full justify-evenly'>
//                 <li className='h-full flex items-center justify-center hover:text-slate-600'>
//                   <Link to={'categories'}
//                     className='capitalize '>Categorias</Link>
//                 </li>
//                 <li className='h-full flex items-center justify-center hover:text-slate-600'>
//                   <Link className='capitalize '>Ofertas</Link>
//                 </li>
//                 <li className='h-full flex items-center justify-center hover:text-slate-600'>
//                   <Link className='capitalize '>Hombre</Link>
//                 </li>
//                 <li className='h-full flex items-center justify-center hover:text-slate-600'>
//                   <Link className='capitalize '>Mujer</Link>
//                 </li>
//                 <li className='h-full flex items-center justify-center hover:text-slate-600'>
//                   <Link className='capitalize '>gaming</Link>
//                 </li>
//                 <li className='h-full flex items-center justify-center hover:text-slate-600'>
//                   <Link className='capitalize '>vender</Link>
//                 </li>
//                 <li className='h-full flex items-center justify-center hover:text-slate-600'>
//                   <Link className='capitalize '>cupones</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           {/* ---- Notification / Cart / # ---- */}
//           <div className='xl:w-[200px] h-full flex justify-between'>
//             <Link className='w-12 h-full rounded-lg flex items-center justify-center bg-gray-200'>
//               <IoCartOutline  color='white' className='text-2xl'/>
//             </Link>
//             <Link className='w-12 h-full rounded-lg flex items-center justify-center bg-gray-200'>
//               <MdNotificationsNone color='white' className='text-2xl'/>
//             </Link> 
//             <Link className='w-12 h-full rounded-lg flex items-center justify-center bg-gray-200'>
//               <FaUser color='white' className='text-2xl' />
//             </Link>
//           </div>
//         </div>}
