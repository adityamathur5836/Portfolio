import React from 'react';
import './index.css'
import Home from './routes/home'
import Projects from './routes/projects'
import Contact from './routes/contact'
import About from './routes/about'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/projects' element = {<Projects/>} />
      <Route path = '/about' element = {<About />} />
      <Route path = '/contact' element = {<Contact />} />
    </Routes>
    </>
  );
}

export default App;
