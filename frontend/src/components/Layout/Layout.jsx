
import React from 'react';

import Header from './../Header/Header';

import Footer from './../Footer/Footer';
import Routers from '../../router/Routers';
import Home from '../../pages/Home';



function Layout() {
  return( 
    <>
      <Header/>
      <Home/>
      <Footer/>
      <Routers/>
    </>
  );
};

export default Layout;