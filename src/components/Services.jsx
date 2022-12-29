import React from 'react';
import HaircutsCard from './servicecards/HaircutsCard';
import StylingCard from './servicecards/StylingCard';
import ColorCard from './servicecards/ColorCard';

const Services = () => {
  return (
    <div>
        <div className="container flex flex-col mx-auto p-20 items-center text-center text-white justify-center ">
            <h1 className="text-2xl font-bold mt-12 mb-6">Our Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <HaircutsCard />
            <StylingCard />
            <ColorCard />
            </div>
        </div>
    </div>   
  );
};

export default Services;




