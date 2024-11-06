import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Box, Container, Typography } from '@mui/material';
import Content from './components/Content';

function App() {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}>
        <NavBar></NavBar>
        <Content></Content>
        <Footer></Footer>
      </Box>
    </>
  );
}

export default App;
