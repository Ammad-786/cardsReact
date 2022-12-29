import React from 'react'
import { motion } from 'framer-motion'
// import stylingbg from "../servicecards/card2.jpg"

const StylingCard = () => {
  return (
    <motion.div className="relative rounded-lg shadow-lg border-4 border-green-400 bg-black hover:bg-white"
      whileHover={{ scale: 1.05, rotateY: 20, rotateZ: 360 }}>
      {/* <img className="absolute top-0 h-full w-full object-cover rounded-t-lg" src={stylingbg} alt="Styling" /> */}
      <motion.div className="relative px-4 py-6 text-white hover:text-black"
        whileHover={{ scale: 1.05, rotateY: 20 }}>
        <h2 className="text-2xl font-bold  mb-2">Styling</h2>
        <p className=" mb-4">Get your hair styled to perfection for any occasion.</p>
        <ul className="  mb-4">
          <li>Updos</li>
          <li>Blowouts</li>
          <li>Curling</li>
          <li>Straightening</li>
        </ul>
        <h3 className="text-lg font-bold  mb-2">Prices</h3>
        <p className=" mb-4">Styling prices start at $40.</p>
      </motion.div>
    </motion.div>
  )
}

export default StylingCard