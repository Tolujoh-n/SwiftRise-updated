import { useState } from 'react';
import './App.css'
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'
import About us from './components/About us/About'
import Review from './components/Review/Review';

function App() {

  return (
    <>
      <Nav />
      <Hero/>
      <Login />
      <Signup />
      <About us />
      <Review />
    </>
  )
}

export default App;
