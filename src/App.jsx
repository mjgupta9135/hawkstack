
import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Training from './components/Training';
import Testimonial from './components/Testimonial';

import Footer from './components/Footer';
import RHSCAHeader from './components/RHSCAHeader';

const App = () => {
  return (
    <>
    <Navbar/>
   <Hero/>
   <Training/>
   <RHSCAHeader/>
   <Testimonial/>
   <Footer/>
   </>
  )
}

export default App;
