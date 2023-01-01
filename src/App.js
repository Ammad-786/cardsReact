import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import AppointmentPage from './components/AppointmentPage';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      {/* <AppointmentPage/> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
