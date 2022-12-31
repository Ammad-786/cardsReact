import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
