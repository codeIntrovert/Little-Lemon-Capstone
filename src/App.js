import React from 'react';
import Nav from './components/nav';
import Header from './components/header';
import Cards from './components/cards';
import Booking from './components/booking';
import Footer from './components/footer';
import './assets/App.css';
function App() {
  return (
    <body className='bg-[#021611] h-full w-full z-0 text-white dark'>
      <Nav />
      <Header />
      <Booking />
      <Cards />
      <Footer />
    </body>
  );
}

export default App;
