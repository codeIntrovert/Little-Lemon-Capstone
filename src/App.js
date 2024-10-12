import React from 'react';
import Nav from './components/nav';
import Header from './components/header';
import Cards from './components/cards';
import Booking from './components/booking';
import Footer from './components/footer';
import './assets/App.css';
function App() {
  const availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
  return (
    <body className='bg-[#021611] h-full w-full z-0 text-white dark'>
      <Nav />
      <Header />
      <Booking availableTimes={availableTimes} />
      <Cards />
      <Footer />
    </body>
  );
}

export default App;
