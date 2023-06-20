import { useState } from 'react'
import './App.css'
import Header from './Components/header.jsx'
import Registration from './Components/Registration/Reg';
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <Login />
      <Registration />
    </div>
  );
}
  
export default App
