import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import loginAdmin from './Components/loginAdmin';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
      <Navbar />
      

      <Route exact path="/">
      <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/Signup">
        <Signup />
      </Route>

      <Route path="/loginAdmin">
        <loginAdmin />
      </Route>
      

    </>
  )
}

export default App