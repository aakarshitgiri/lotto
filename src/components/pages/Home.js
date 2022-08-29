import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Footer from '../footer';
import Admin from '../AdminPanel/adminPanel';
import User from '../User/user';



function Home() {
  return (
    <>
      <Navbar />
      <Admin /> {/* show when admin address match  */}
      <User /> {/* Default  */}
      <Footer />

    </>
  );
}

export default Home;







