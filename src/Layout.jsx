import React from 'react'
import Header from './Components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer.jsx';


export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


