// to do (as of this commit)
// - fix the navbar with this https://codepen.io/antonioio/pen/BeVxaN
// -- bootstrap instead of bare css is the way to go (?)
// - create the login page
// - make the login the default page

// App.js (main file)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
