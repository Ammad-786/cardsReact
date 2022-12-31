import React from 'react'
import { motion } from 'framer-motion'
// import colorbg from "../servicecards/card2.jpg"

const ColorCard = () => {
  return (
    <motion.div
      className="relative rounded-lg shadow-lg border-4 border-green-400 bg-black hover:bg-white"
      whileHover={{ scale: 1.05, rotateY: 5, rotateZ: 60 }}>
      <motion.div className="relative px-4 py-6 z-10 bg-neon-green-500 text-white hover:text-black"
      whileHover={{ scale: 1.05, rotateY: 0, rotateX: 20  }}>
        <h2 className="text-2xl font-bold mb-2">Color</h2>
        <p className=" mb-4">Get the perfect color for your hair with our expert colorists.</p>
        <ul className=" mb-4">
          <li>Root touch-up</li>
          <li>Full color</li>
          <li>Highlights</li>
          <li>Balayage</li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Prices</h3>
        <p className= "mb-4">Color prices start at $80.</p>
      </motion.div>
      <div className="absolute inset-0 rounded-lg shadow-inner ">
        {/* <img className="absolute top-0 h-full w-full object-cover rounded-t-lg" src={colorbg} alt="Color" /> */}
      </div>
    </motion.div>
  )
}

export default ColorCard