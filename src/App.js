import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
