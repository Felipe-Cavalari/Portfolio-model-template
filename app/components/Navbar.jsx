'use client'
import React, { useState } from 'react' 
import Link from 'next/link'
import Navlinks from './NavLinks'
import { IoMdMenu, IoMdClose  } from "react-icons/io";
import { Poppins } from 'next/font/google'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const poppins = Poppins({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
  })


const navLinks = [
    {
        title: 'Sobre mim',
        path: '#sobre_mim',
    },
    {
        title: 'Projetos',
        path: '#projetos',
    },
    {
        title: 'Contato',
        path: '#contato',
    }
  ]


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)


  return (
    <nav     
    className='border-b border-[#33353F] fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-4">
            <Link href={'/'} className={`text-slate-200 text-3xl font-extrabold ${poppins.className}`}>
                {/* <Image
                    src='/'
                    width={80}
                    height={0}
                    alt='Logo'
                /> */}
                <h1 className='text-4xl'>LOGO</h1>
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                            <IoMdMenu className='h-5 w-5'/>
                        </button>
                    )
                    :(
                        <button onClick={() => setNavbarOpen(false)} className='text-slate-200 items-center px-3 py-2 border rounded'>
                            <IoMdClose  className='h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id='navbar'>
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Navlinks href={link.path} title={link.title} />
                            </li>
                        )) 
                    }

                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar;