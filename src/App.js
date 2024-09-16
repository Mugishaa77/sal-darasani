import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/LandingPage/HomePage';
import StudentLogin from './components/AuthComponents/StudentLogin';
import Navbar from './components/LandingPage/Navbar';
import FindTutor from './components/Pages/Find';
import Become from './components/Pages/Become';
import StudentSignUp from './components/AuthComponents/StudentSignUp';
import TutorLogin from './components/AuthComponents/TutorLogin';
import TutorSignUp from './components/AuthComponents/TutorSignUp';

function App() {
  return (
    <Router>
      {/* Navbar component outside Routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        {/* Pages */}
        <Route path="/find" element={<FindTutor />} />
        <Route path="/become" element={<Become />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
