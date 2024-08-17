<<<<<<< HEAD
=======
import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../LandingPage/HomePage'
import StudentSignUp from '../AuthComponents/StudentSignUp';
import StudentLogin from '../AuthComponents/StudentLogin';
import TutorSignUp from '../AuthComponents/TutorSignUp';
import TutorLogin from '../AuthComponents/TutorLogin';
import ParentSignUp from '../AuthComponents/ParentSignUp';
import ParentLogin from '../AuthComponents/ParentLogin';

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={HomePage}/>
        <Route path='/studentsignup' element={StudentSignUp} />
        <Route path='/studentlogin' element={StudentLogin}/>
        <Route path='/parentsignup' element={ParentSignUp} />
        <Route path='/parentlogin' element={ParentLogin} />
        <Route path='/tutorsignup' element={TutorSignUp}/>
        <Route path='/tutorlogin' element={TutorLogin}/>
    </Routes>
  )
}

export default AllRoutes
>>>>>>> bb3c73ecb1dc12de374cc8afa039b298bbe87e30
