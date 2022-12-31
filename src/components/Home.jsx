import React from 'react';

const Home = () => {

  return (
    <div id="home">
       <div className=" bg-[#333]  md:h-screen py-14 md:p-20 mx-auto flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center text-white">Welcome to the Salon</h1>
          <p className="text-xl text-center text-[#b3b3b3] mb-8">We offer a wide range of beauty and hair services</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8">
            <div className="card-wrapper">
              <div className="card1 rounded-lg shadow-lg p-6 w-[280px] h-[280px] text-center">
                <div className='bg-white rounded-lg h-[100%] opacity-70 hover:opacity-100 w-[100%] p-10'>
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Haircuts</h2>
                  <p className="text-black mb-4">Get a fresh new haircut at our salon</p>
                  <button className="bg-black text-white font-bold py-2 px-4 rounded-full">Book now</button>
                </div>
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card1 rounded-lg shadow-lg p-4 w-[280px] h-[280px] text-center">
                <div className='bg-white rounded-lg h-[100%] opacity-70 hover:opacity-100 w-[100%] p-10'>
                  <h2 className="text-lg font-bold text-gray-800 mb-4">Salon services</h2>
                  <p className="text-base text-black mb-4">Choose from a variety of salon services, including color treatments, styling, and manicures</p>
                  <button className="bg-black text-white font-bold py-2 px-4 rounded-full">Book now</button>
                </div>
              </div>
            </div>

              <div className="card-wrapper">
                <div className="card1 rounded-lg shadow-lg p-6 w-[280px] h-[280px] text-center">
                  <div className='bg-white rounded-lg h-[100%] opacity-70 hover:opacity-100 w-[100%] p-10'>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Special offers</h2>
                    <p className="text-black mb-4">Take advantage of our special offers and discounts</p>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-full">Book now</button>
                  </div>
                </div>
              </div>
            </div>
        </div> 
    </div>
  )
}

export default Home