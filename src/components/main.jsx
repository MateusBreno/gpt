import React from 'react';
import Header from './header';
import Footer from './footer';
import Cards from './card';

const Main = () => {

  return (
    <div className='main'>
      <Header />
      <Cards/>
      <Footer />
    </div>
  );
}

export default Main;