import React, { useState } from 'react';
import { motion } from 'framer-motion';

function AppointmentPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentNotes, setAppointmentNotes] = useState('');

  // list of available services and stylists for the salon
  const services = ['Haircut', 'Color', 'Blowout', 'Updo'];
  const stylists = ['Alice', 'Bob', 'Charlie', 'Diane'];

  const handleSubmit = (event) => {
    event.preventDefault();
    // save the appointment details to the database or some other backend service
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block font-bold mb-2 text-gray-700" htmlFor="selectedService">
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
          <label className="block font-bold mb-2 text-gray-700" htmlFor="selectedStylist">
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
              <label className="block font-bold mb-2 text-gray-700" htmlFor="appointmentTime">
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
              <label className="block font-bold mb-2 text-gray-700" htmlFor="appointmentNotes">
              Notes
              </label>
              <textarea
              id="appointmentNotes"
              name="appointmentNotes"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={appointmentNotes}
              onChange={(event) => setAppointmentNotes(event.target.value)}
              />
              </div>
              <div className="flex items-center justify-between">
              <button
                       type="submit"
                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                     >
              Book Appointment
              </button>
            </div>
          </form>
        </motion.div>
      );
    }
              
export default AppointmentPage;