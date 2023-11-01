
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from './pages/login/login';

import Home from './pages/home/home';
import Register from './pages/register/register';
import Lesson from './pages/lesson/lesson';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lesson" element={<Lesson />} />


        </Routes>

      </Router>




    </div>
  );
}

export default App;