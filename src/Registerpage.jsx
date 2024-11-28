// src/RegisterModal.js
import React, { useEffect, useState } from "react";

import { FaFlag } from "react-icons/fa";
const RegisterModal = ({toggleVisibility}) => {

  const [days,setDays] = useState([]);
  


 useEffect(()=>{
  const daysArray = Array.from({length:31},(_,index) => index + 1);
  setDays(daysArray);
 },[]);

 
 const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

 const [years,setYears]  = useState([]);
 const currentyear = new Date().getFullYear() ;

 useEffect(()=>{
  const yearsArray = Array.from({length:currentyear - 1900 + 1 },(_,index) => index + 1900);
  setYears(yearsArray);
 },[]);

 const states = ['Assam','Gujarat','Kerla','Rajasthan','Punjab','Uttar Pradesh','UttaraKhand'];
 const cities = ['Delhi','Lucknow','Kanpur','Agra','Chandigarh','Pune'];
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 px-2 ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[500px] md:max-w-[500px] lg:max-w-[500px] p-8 ">
        <div className="flex justify-end">
          <button onClick={toggleVisibility} className="text-gray-500 text-3xl hover:text-gray-800">&times;</button>
        </div>
        <h2 className="text-center text-2xl font-semibold text-[#42b72a] mb-6">Create New Account</h2>

        <div className="grid grid-cols-2  gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded focus:outline-none"
          />
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
             <img className="h-3 w-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" /> {/* Icon next to the input */}
            </span>
            <input
              type="tel"
              placeholder="Phone"
              className="border p-2 pl-10 rounded focus:outline-none w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border p-2 rounded focus:outline-none"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-950">Date of Birth</label>
          <div className="flex space-x-2 mt-2">
            <select className="border p-2 rounded w-full text-gray-500 focus:outline-none">
              <option className="text-gray-500">Day</option>
              {
                days.map((val)=>(
                  
              <option key={val} className="text-gray-500">{val}</option>
                ))
              } 
              
            </select>
            <select className="border p-2 rounded text-gray-500 w-full focus:outline-none">
              <option className="text-gray-500">Month</option>
              {
                months.map((month)=>(
                  <option key={month}>{month}</option>
                ))
              }
                
  
              
            </select>
            <select className="border p-2 rounded text-gray-500 w-full focus:outline-none">
              <option className="text-gray-500">Year</option>
              {
                years.map((year)=>(
                  <option key={year}>{year} </option>
                ))
              }
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-950">Gender</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-1">
              <input type="radio" name="gender" className="border" />
              <span className="text-gray-950">Male</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="radio" name="gender" className="border" />
              <span className="text-gray-950">Female</span>
            </label>
            <label className="flex items-center space-x-1">
              <input type="radio" name="gender" className="border" />
              <span className="text-gray-950">Other</span>
            </label>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <select className="border p-2 rounded text-gray-500 focus:outline-none">
            <option className="text-gray-500">State</option>
            {
              states.map((state,idx)=>(
                <option key={state[idx]}>{state} </option>
              ))
            }
          </select>
          <select className="border p-2 rounded text-gray-500 focus:outline-none">
            <option className="text-gray-500">City</option>
            {
              cities.map((city,idx)=>(
                <option key={city[idx]}>{city} </option>
              ))
            }
          </select>
        </div>

        <p className="text-xs text-gray-500 mt-4 ">
          By Continuing, You Agree to Lzy Crazy <span className="text-blue-600 underline">Terms & Conditions</span> and Confirm that You have Read Lzy Crazy <span className="text-blue-600 underline">Privacy Policy</span>.
        </p>

        <div className="mt-6">
          <button className="w-full bg-[#040c4a] text-white py-2 rounded font-semibold">SIGNUP</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
