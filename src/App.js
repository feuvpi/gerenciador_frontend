import React, { useState } from 'react';
import { Router, Route, Routes } from "react-router-dom";
// PAGES
import FormAuth from './components/FormAuth'
import FormRegister from './components/FormRegister.jsx';
import { AuthContext } from "./contexts/auth";
import Axios from "axios"
import AppRpoutes from "./AppRoutes"
import AppRoutes from './AppRoutes';


function App() {

  /*
  const login = (email, password) => {
    Axios.post("http://localhost:3000/auth/authenticate", {
    email: email,
    password: password,
  }).then((response) => {
    if(!response.data.message){
    } else {
      console.log("this " + response.data.message);
    }
  });
  }

  const [user, setUser] = useState(null);


  const logout = () => {};
  */

  return (

    <>
      <AppRoutes/>
    </>
    

  );
}

export default App;



/*
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About'
import Support from './components/Support'
import AllInOne from './components/AllInOne'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Support />
    <AllInOne />
    <Pricing />
    <Footer/>
    </>
  );
}

export default App;
*/

