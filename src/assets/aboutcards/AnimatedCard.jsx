import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Card = () => {
  return (
    <div className="card">
      <h3>Card Title</h3>
      <p>Card content</p>
    </div>
  );
};

const AnimatedCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ perspective: 1000 }}>
      <button onClick={handleClick}>Toggle Visibility</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, rotateY: 180 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1 }}
          >
            <Card />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedCard;




