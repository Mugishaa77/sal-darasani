import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Navbar from './components/LandingPage/Navbar';
import HomePage from './components/LandingPage/HomePage';
import FindTutor from './components/Pages/Find';
import Become from './components/Pages/Become';

// AuthComponents
import StudentSignUp from './components/AuthComponents/StudentSignUp';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar component outside Routes */}
        <Navbar />
        
        {/* Routes configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find" element={<FindTutor />} />
          <Route path="/signup" element={<StudentSignUp />} />
          <Route path="/become" element={<Become />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
