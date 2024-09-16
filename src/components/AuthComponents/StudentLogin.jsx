import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './../../pictures/darasani.png';
import { PiEyeBold, PiEyeClosed } from 'react-icons/pi';
import api from './../Api/Api';

const StudentLogin = ({ setUserRole }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/studentLogin", formData);
      if (response.status === 200) {
        const data = response?.data;
        setSuccessMsg("Login successful!");
        localStorage.setItem("userID", data.id);
        navigate("/studentaccount");
      } else {
        setErrMsg("An error occurred while logging in");
        setTimeout(() => {
          setErrMsg("");
        }, 3000);
      }
    } catch (error) {
      console.error(error);
      setErrMsg("An error occurred while logging in");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
  };

  return (
    <div className="bg-custom-gradient h-screen flex flex-col items-center justify-center">
      <div className="w-80 h-auto flex flex-col items-center mb-8">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-[200px]" />
        </Link>
      </div>

      <div className="signup-container w-full max-w-md p-6 bg-gradient-to-tr from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.2)] backdrop-blur-10xl border-[1px] border-[rgba(255,255,255,0.18)] shadow-md rounded-lg flex flex-col items-center">
        <div className="mt-[5px] w-full max-w-md">
          <h5 className="text-3xl font-bold mb-4 text-center text-black">Log In</h5>
          <p className="text-center text-black mb-[10px]">
            Not a student? <Link to={"/studentsignup"} className="text-logo-blue font-medium underline">Sign up</Link> instead
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input placeholder="Enter your username" type="text" id="username" name="username"
                className="p-2 w-full text-sm rounded-md bg-transparent focus:outline-none border-[2px] border-text-color text-text-color placeholder-text-color" 
                required value={formData.username} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <div className="relative">
                <PasswordInput 
                  name="password" placeholder="Enter your password" type="password"
                  id="password" required value={formData.password} 
                  onChange={handleChange} showPassword={showPassword} onTogglePassword={() => setShowPassword(!showPassword)} />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="login-btn uppercase bg-dark-bg text-white font-semibold px-4 py-2 rounded-md hover:bg-hover-blue w-full mt-7">
                Log In
              </button>
            </div>
          </form>

          <p className="text-center mt-4">{successMsg}</p>
          <p className="text-center mt-2 text-red-500">{errorMsg}</p>
        </div>
      </div>
    </div>
  );
};

const PasswordInput = ({ name, placeholder, value, onChange, showPassword, onTogglePassword }) => {
  return (
    <div className="relative">
      <input type={showPassword ? "text" : "password"} id={name} name={name}
        className="p-2 w-full text-sm rounded-md bg-transparent focus:outline-none border-[2px] border-text-color text-text-color placeholder-text-color pr-10"
        placeholder={placeholder} required value={value} onChange={onChange} />
      <button type="button" onClick={onTogglePassword} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-color text-[16px]">
        {showPassword ? <PiEyeBold /> : <PiEyeClosed />}
      </button>
    </div>
  );
};

export default StudentLogin;
