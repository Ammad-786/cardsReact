import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Card1 = ({ onClose }) => {
  return (
    <div className="card-about flex flex-col bg-white rounded-lg shadow-md gap-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-lg leading-loose mb-4">
            Our team of experienced stylists is dedicated to providing the best service to our clients. Meet our team of professionals below:
          </p>
          <ul>
            <li className="text-lg leading-loose">Jane Doe</li>
            <li className="text-lg leading-loose">John Doe</li>
            <li className="text-lg leading-loose">Jill Doe</li>
          </ul>
          <button className="absolute top-0 right-0 m-4" onClick={onClose}>
            <FaTimes />
          </button>
    </div>
  );
};

const AnimatedCard1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative h-screen md:h-0 flex flex-col " style={{ perspective: 1000 }}>
      <button className="text-gray-700 p-4 rounded-3xl border-2 border-black  hover:text-gray-900" onClick={handleClick}>Our Team</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute top-0 left-0"
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1 }}
          >
            <Card1 onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Card2 = ({ onClose }) => {
  return (
    <div className="card2 flex flex-col bg-white rounded-lg shadow-md gap-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-loose mb-4">
            Our team of experienced stylists is dedicated to providing the best service to our clients. Meet our team of professionals below:
          </p>
          <ul>
            <li className="text-lg leading-loose">Jane Doe</li>
            <li className="text-lg leading-loose">John Doe</li>
            <li className="text-lg leading-loose">Jill Doe</li>
          </ul>
          <button className="absolute top-0 right-0 m-4" onClick={onClose}>
            <FaTimes />
          </button>
    </div>
  );
};

const AnimatedCard2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative flex  flex-col " style={{ perspective: 1000 }}>
      <button className="text-gray-700 p-4 rounded-3xl border-2 border-black  hover:text-gray-900" onClick={handleClick}>Our Skill</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute top-0 left-0"
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1 }}
          >
            <Card2 onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="bg-gray-100 p-20 md:h-screen mx-auto items-center justify-center md:flex  md:flex-col ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>
        <p className="text-lg leading-loose mb-4 text-center">
          Our team of experienced stylists is dedicated to providing the best service to our clients. Meet our team of professionals below:
        </p>
        <ul className="flex flex-wrap mx-auto justify-center">
          <li className="w-1/2 px-2 mb-4 ">
            <AnimatedCard1 />
          </li>
          <li className="w-1/2 px-2 mb-4">
            <AnimatedCard2 />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;