import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from '../src/views/Home/Home';
import Comunidad from '../src/views/Comunidad/Comunidad';
import Historia from '../src/views/Historia/Historia';
import Moviles from '../src/views/Moviles/Moviles'

import NavbarComp from './components/Navbar/Navbar';
import FooterComp from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/moviles" element={<Moviles />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterComp />
      </Router>
    </div>
  )
}

export default App
