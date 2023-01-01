import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNowClick = () => {
    setShowForm(true);
  }

  const [selectedService, setSelectedService] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentNotes, setAppointmentNotes] = useState('');
  const [appointmentName, setAppointmentName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState(''); // add this line to add the message state

  // list of available services and stylists for the salon
  const services = ['Haircut', 'Color', 'Blowout', 'Updo'];
  const stylists = ['Alice', 'Bob', 'Charlie', 'Diane'];

  const handleFormSubmit = (event) => {
    console.log('handleSubmit function called');
    event.preventDefault();
    console.log('selectedService:', selectedService);
    console.log('selectedStylist:', selectedStylist);
    console.log('appointmentTime:', appointmentTime);
    console.log('appointmentNotes:', appointmentNotes);
    console.log('appointmentName:', appointmentName);
    console.log('phoneNumber:', phoneNumber);
    console.log('emailAddress:', emailAddress);
    console.log({
      selectedService,
      selectedStylist,
      appointmentTime,
      appointmentNotes,
      appointmentName,
      phoneNumber,
      emailAddress
    });
    // save the appointment details to the database or some other backend service
    setMessage('Appointment successfully booked...!'); // update the message state when the form is submitted
    
    setTimeout(() => {
      setMessage('');
    }, 5000);
  }

  return (
    <div id='home' className="bg-image">
       <div className="  md:h-screen py-14 md:p-20 mx-auto flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center text-white">Welcome to the Salon</h1>
          <p className="text-xl text-center text-[#b3b3b3] mb-8">We offer a wide range of beauty and hair services</p>
          {!showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8"
            >
              <div className="card-wrapper">
                <div className="card1 rounded-lg shadow-lg p-6 w-[280px] h-[280px] text-center">
                  <div className='bg-white rounded-lg h-[100%] opacity-70 hover:opacity-100 w-[100%] p-10'>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Haircuts</h2>
                    <p className="text-black mb-4">Get a fresh new haircut at our salon</p>
                    <button  className="bg-black text-white font-bold py-2 px-4 rounded-full" onClick={handleBookNowClick}>Book now</button>
                  </div>
                </div>
              </div>
              <div className="card-wrapper">
                <div className="card1 rounded-lg shadow-lg p-4 w-[280px] h-[280px] text-center">
                  <div className='bg-white rounded-lg h-[100%] opacity-70 hover:opacity-100 w-[100%] p-10'>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Salon services</h2>
                    <p className="text-base text-black mb-4">Choose from a variety of salon services, including color treatments, styling, and manicures</p>
                    <button  className="bg-black text-white font-bold py-2 px-4 rounded-full" onClick={handleBookNowClick}>
                      Book now
                    </button>
                  </div>
                  </div>
              </div>
              <div className="card-wrapper">
                <div className="card1 rounded-lg shadow-lg p-6 w-[280px] h-[280px] text-center">
                  <div className='bg-white rounded-lg h-[100%] opacity-70 hover:opacity-100 w-[100%] p-10'>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Special offers</h2>
                    <p className="text-black mb-4">Take advantage of our special offers and discounts</p>
                    <button  className="bg-black text-white font-bold py-2 px-4 rounded-full" onClick={handleBookNowClick}>Book now</button>
                  </div>
                </div>
              </div> 
            </motion.div>
          )}
          {showForm && (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" shadow  md:m-[-100px] p-8 md:p-4 md:mt-0 md:grid md:grid-cols-2 gap-4 bg-white text-center border-4 text-black rounded-2xl border-black"
              onSubmit={handleFormSubmit}
            >
              <div className="mb-2">
                  <label className="block font-bold mb-2 text-black" htmlFor="selectedService">
                    Service
                  </label>
                  <div className="relative">
                    <select
                      id="selectedService"
                      name="selectedService"
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      value={selectedService}
                      onChange={(event) => setSelectedService(event.target.value)}
                      required
                    >
                      <option value="" disabled>Choose a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2 text-black" htmlFor="selectedStylist">
                    Stylist
                  </label>
                  <div className="relative">
                    <select
                      id="selectedStylist"
                      name="selectedStylist"
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      value={selectedStylist}
                      onChange={(event) => setSelectedStylist(event.target.value)}
                      required
                    >
                      <option value="" disabled>Choose a stylist</option>
                      {stylists.map((stylist) => (
                        <option key={stylist} value={stylist}>{stylist}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2 text-black" htmlFor="appointmentTime">
                  Appointment Time
                  </label>
                  <input
                  type="datetime-local"
                  id="appointmentTime"
                  name="appointmentTime"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={appointmentTime}
                  onChange={(event) => setAppointmentTime(event.target.value)}
                  required
                  />
                  </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2 text-black" htmlFor="appointmentNotes">
                    Notes
                  </label>
                  <textarea
                    id="appointmentNotes"
                    name="appointmentNotes"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={appointmentNotes}
                    onChange={(event) => setAppointmentNotes(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2 text-black" htmlFor="appointmentName">
                  Name
                  </label>
                  <input
                    type="text"
                    id="appointmentName"
                    name="appointmentName"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={appointmentName}
                    onChange={(event) => setAppointmentName(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2 text-black" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-2 text-black" htmlFor="emailAddress">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={emailAddress}
                    onChange={(event) => setEmailAddress(event.target.value)}
                    required
                  />
                </div>
                  <button type="submit" className="px-4 py-2 w-[150px] mx-auto justify-center font-bold text-white bg-black rounded-full hover:bg-orange-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                      Book Appointment
                  </button>
                  <button
                    type="button"
                    className="bg-black w-12 top-3 mx-auto justify-center text-white font-bold py-4 px-4 rounded-full ml-4"
                    onClick={() => setShowForm(false)}
                  >
                   <FaTimes />
                  </button>
            </motion.form>
          )}
       </div>

      {message && (
        <motion.p
          initial={{ rotateX: -90, rotateY: 90 }}
          animate={{ rotateX: 0, rotateY: 0 }}
          exit={{ rotateX: 90, rotateY: -90 }}
          className="text-center w-[500px] justify-center mx-auto bg-black rounded-2xl text-white border-2 border-white py-2  mt-4 "
        >
          {message}
        </motion.p>
      )} 
    </div>
  );
}

export default Home;