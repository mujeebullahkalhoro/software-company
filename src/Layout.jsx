import React from 'react'
import Header from './components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';



export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


