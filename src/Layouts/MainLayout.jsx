import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BottomMenu from '../components/BottomMenu'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <BottomMenu />
    <Footer />
    </>
  )
}

export default MainLayout