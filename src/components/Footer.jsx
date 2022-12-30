import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 ">
    <div className="container mx-auto flex flex-wrap items-center text-center md:text-left justify-center md:justify-between">
      <div className="w-full lg:w-6/12 px-4">
        <h3 className="text-3xl font-bold leading-none mb-4">
          About Our Salon
        </h3>
        <p className="mb-8 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br/> dignissim
          enim a tellus auctor, at cursus diam maximus.<br/> Vivamus a aliquet turpis.
          Proin in euismod risus, at eleifend arcu.
        </p>
      </div>
      <div className="w-full lg:w-4/12 px-4">
        <h3 className="text-3xl font-bold leading-none mb-4">Contact</h3>
        <ul className="list-unstyled text-lg mb-0">
          <li className="mb-4">
            <a href="/" className="text-white hover:text-gray-400">
              555-555-5555
            </a>
          </li>
          <li className="mb-4">
            <a href="/" className="text-white hover:text-gray-400">
              info@salon.com
            </a>
          </li>
          <li className="mb-4">
            <a href="/" className="text-white hover:text-gray-400">
              123 Main St, Anytown USA
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-2/12 px-4">
        <h3 className="text-3xl font-bold leading-none mb-4">Follow Us</h3>
        <ul className="mx-auto flex flex-row md:flex-col justify-between  md:items-left text-lg px-4 md:px-0 mb-0">
          <li className="mb-4">
            <a
              href="/"
              className="text-white hover:text-gray-400 flex items-center"
            >
              <FaFacebook className="mr-2" /> Facebook
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/"
              className="text-white hover:text-gray-400 flex items-center"
            >
              <FaInstagram className="mr-2" /> Instagram
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/"
              className="text-white hover:text-gray-400 flex items-center"
            >
              <FaTwitter className="mr-2" /> Twitter
            </a>
          </li>
        </ul>
        </div>
        </div>
    </footer>      
)


export default Footer;