import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from '../components/Navbar';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Box p='130px 32px 32px'>
        <Outlet />
      </Box>
    </>
  )
}

export default SharedLayout