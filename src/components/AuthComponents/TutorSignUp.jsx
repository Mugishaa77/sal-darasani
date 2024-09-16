import React, { useState } from "react";
import logo from './../../pictures/darasani.png';
import { useNavigate, Link } from "react-router-dom";
import { PiEyeBold, PiEyeClosed } from 'react-icons/pi';

function TutorSignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleAddAccount = async () => {
    try {
      const isPasswordValid = password === confirmPassword;
      const isPhoneNumberValid = /^254\d{9}$/.test(phoneNumber);
      const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

      if (!isPasswordValid) {
        setErrMsg("Password Mismatch!");
      } else if (!isPhoneNumberValid) {
        setErrMsg("Invalid phone number format. It should start with 254 and be 12 digits long."); 
      } else if (!isEmailValid) {
        setErrMsg("Invalid email format.");
      } else {
        const response = await fetch("http://0.0.0.0:8000/tutorsignup", {
          method: "POST",
          mode: 'cors',
          body: JSON.stringify({
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            username, 
            phone_number: phoneNumber
          }),          
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          navigate("/tutorlogin");
        } else {
          const errorResponse = await response.json();
          setErrMsg(errorResponse.error || "Couldn't create the account. Try again.");
          setTimeout(() => {
            setErrMsg("");
          }, 3000);
        }
      }
    } catch (err) {
      setErrMsg("Try again.");
      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    }
  };

  return (
    <>
      <p className="text-red-500 text-center">{errMsg}</p>

      <div className="bg-custom-gradient h-screen flex flex-col items-center justify-center">
        <div className="w-80 h-auto flex flex-col items-center mb-8">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-[200px]" />
          </Link>
        </div>

        <div className="signup-container w-full max-w-md p-6 bg-gradient-to-tr from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.2)] backdrop-blur-10xl border-[1px] border-[rgba(255,255,255,0.18)] shadow-md rounded-lg flex flex-col items-center">
          <h5 className="text-3xl font-bold mb-4 text-center text-black">Register</h5>
          <p className="text-center text-black mb-[10px]">
            Already a tutor? <Link to={"/tutorlogin"} className="text-logo-blue font-medium underline">Sign in</Link> instead
          </p>

          <form className="w-full">
            <div className="flex gap-4 mb-4">
              <input placeholder="Your First Name" type="text" id="first_name" name="first_name"
                className="p-2 w-full text-sm rounded-md bg-transparent focus:outline-none border-[2px] border-text-color text-text-color placeholder-text-color" 
                required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input placeholder="Your Last Name" type="text" id="last_name" name="last_name"
                className="p-2 w-full text-sm rounded-md bg-transparent focus:outline-none border-[2px] border-text-color text-text-color placeholder-text-color" 
                required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className="flex gap-4 mb-4">
              <input placeholder="email@example.com" type="email" id="email" name="email"
                className="p-2 w-full text-sm rounded-md bg-transparent focus:outline-none border-[2px] border-text-color text-text-color placeholder-text-color" 
                required value={email} onChange={(e) => setEmail(e.target.value)} />
              <input placeholder="2547********" type="text" id="phone_number" name="phone_number"
                className="p-2 w-full text-sm rounded-md bg-transparent focus:outline-none border-[2px] border-text-color text-text-color placeholder-text-color" 
                required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            
            <input placeholder="Username" type="text" id="username" name="username"
              className="p-2 w-full mb-4 text-sm rounded-md bg-transparent focus:outline-none border-[2px] border-text-color text-text-color placeholder-text-color" 
              required value={username} onChange={(e) => setUsername(e.target.value)} />

            <div className="mb-4">
              <PasswordInput name="password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} showPassword={showPassword} 
                onTogglePassword={() => setShowPassword(!showPassword)}
              />
            </div>
            
            <div className="mb-4">
              <PasswordInput name="confirmPassword" placeholder="Confirm Password" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} showPassword={showPassword} 
                onTogglePassword={() => setShowPassword(!showPassword)} />
            </div>
            
            <div className="text-center">
              <button type="button"
                className="create-account uppercase bg-dark-bg text-white font-semibold px-4 py-2 rounded-md hover:bg-hover-blue w-full mt-7"
                onClick={handleAddAccount} > Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const PasswordInput = ({ name, placeholder, value, onChange, showPassword, onTogglePassword }) => {
  return (
    <div className="relative">
      <input type={showPassword ? "text" : "password"} id={name} name={name}
        className="p-2 w-full text-sm rounded-md bg-transparent focus:outline-none border-[2px] border-text-color text-text-color placeholder-text-color pr-10"
        placeholder={placeholder} required value={value} onChange={onChange} />
      <button type="button" onClick={onTogglePassword} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-color text-[16px]" >
        {showPassword ? <PiEyeBold /> : <PiEyeClosed />}
      </button>
    </div>
  );
};

export default TutorSignUp;
