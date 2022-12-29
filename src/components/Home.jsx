import React from 'react';

const Home = () => {

  return (
    <div>
       <div className=" bg-[#333]  md:h-screen mx-auto p-20 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center text-white">Welcome to the Salon</h1>
          <p className="text-xl text-center text-[#b3b3b3] mb-8">We offer a wide range of beauty and hair services</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 ">
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
                <div className="card1 rounded-lg shadow-lg p-6 w-[280px] h-[280px] text-center">
                  <div className='bg-white rounded-lg h-[100%] opacity-70 hover:opacity-100 w-[100%] p-10'>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Haircuts</h2>
                    <p className="text-black mb-4">Get a fresh new haircut at our salon</p>
                    <button className="bg-black text-white font-bold py-2 px-4 rounded-full">Book now</button>
                  </div>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="card1 rounded-lg shadow-lg p-6 w-[280px] h-[280px] text-center">
                  <div className='bg-white rounded-lg h-[100%] opacity-70 hover:opacity-100 w-[100%] p-10'>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Haircuts</h2>
                    <p className="text-black mb-4">Get a fresh new haircut at our salon</p>
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