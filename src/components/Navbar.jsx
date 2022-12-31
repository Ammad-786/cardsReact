import React, { useState } from 'react'
import "../index.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <div className='bg-gray-800 shadow-md relative md:fixed w-full z-10 top-0'>
        <nav  className="bg-black  p-4 md:p-6 flex md:grid md:grid-cols-3 md: items-center justify-between border-b-2 border-white  md:justify-center">
            <div className="flex text-2xl text-white p-8 md:p-0 justify-center">NEEDLE CUTS</div>
            <div className="md:hidden">
                <button className="text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={toggleMenu}>
                {menuOpen ? <FaTimes className="h-6 w-6 fill-current" /> : <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>}
                </button>
            </div>
            <div  className=" hidden md:flex justify-center">
                <a href="/" className="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700">Home</a>
                <a href="/" className="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700">About</a>
                <a href="/" className="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700">Services</a>
                <a href="/" className="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700">Contact</a>
            </div>
            <div className="social-icons hidden md:flex justify-center">
                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                <a href="/"><FaTwitter /></a>
                <a href="/"><FaInstagram /></a>
            </div>

            <div className={`className="bg-black p-8 grid  grid-cols-1 text-center  items-center justify-center md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
                <a href="/" className="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700 block">Home</a>
                <a href="/" className="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700 block">About</a>
                <a href="/" className="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700 block">Services</a>
                <a href="/" className="text-white font-bold px-4 py-2 rounded-lg hover:bg-gray-700 block">Contact</a>
            </div>
        </nav>
            
    </div>
  )
}

export default Navbar