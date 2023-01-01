import React, { useState } from 'react';
import { motion } from 'framer-motion';

function AppointmentPage() {
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

  const handleSubmit = (event) => {
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
    
  }
  return (
    <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-image flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="w-full text-center max-w-sm">
                <div className="mb-4">
                  <label className="block font-bold mb-2 text-white" htmlFor="selectedService">
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
          <label className="block font-bold mb-2 text-white" htmlFor="selectedStylist">
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
          <label className="block font-bold mb-2 text-white" htmlFor="appointmentTime">
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
          <label className="block font-bold mb-2 text-white" htmlFor="appointmentNotes">
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
          <label className="block font-bold mb-2 text-white" htmlFor="appointmentName">
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
          <label className="block font-bold mb-2 text-white" htmlFor="phoneNumber">
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
          <label className="block font-bold mb-2 text-white" htmlFor="emailAddress">
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
        <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Book Appointment
        </button>
        
      </form>
      {message && <p className="text-center bg-black rounded-2xl text-white border-2 border-white p-4 mt-4">{message}</p>} {/* show the message if it exists */}
    </motion.div>
  );
}

export default AppointmentPage;