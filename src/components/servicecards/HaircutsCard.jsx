import React from 'react';
import { motion } from 'framer-motion';
// import haircutsbg from "../servicecards/card2.jpg";

const HaircutsCard = () => {
  return (
    <motion.div className="relative rounded-lg shadow-lg border-4 border-green-400 bg-black hover:bg-white"
    whileHover={{ scale: 1.05, rotateY: 180 }}>
      {/* <img className="absolute top-0 h-full w-full object-cover rounded-t-lg" src={haircutsbg} alt="Haircuts" /> */}
      <motion.div className="relative px-4 py-6 text-white hover:text-black"
      whileHover={{ scale: 1.05, rotateY: 180 }}>
        <h2 className="text-2xl font-bold  mb-2">Haircuts</h2>
        <p className=" mb-4">Our skilled stylists will give you the perfect haircut for any occasion.</p>
        <ul className="  mb-4">
          <li>Women's haircuts</li>
          <li>Men's haircuts</li>
          <li>Children's haircuts</li>
          <li>Special occasion haircuts</li>
        </ul>
        <h3 className="text-lg font-bold  mb-2">Prices</h3>
        <p className=" mb-4">Haircut prices start at $30.</p>
      </motion.div>
    </motion.div>
  )
}

export default HaircutsCard