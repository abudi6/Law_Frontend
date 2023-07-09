// to do (as of this commit)
// - fix the navbar with this https://codepen.io/antonioio/pen/BeVxaN
// -- bootstrap instead of bare css is the way to go (?)
// - create the login page
// - make the login the default page

// App.js (main file)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import BSearch from './pages/BSearch';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/b_search" element={<BSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
