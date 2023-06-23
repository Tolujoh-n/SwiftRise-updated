// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import './App.css'
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'
import Review from './components/Review/Review';
import About from './components/About/About'



function App() {

  return (
    <>
      <Nav />
      <Hero/>
      <Login />
      <Signup />
      <Review />
      <About />
      
    </>
  )
}

export default App;
