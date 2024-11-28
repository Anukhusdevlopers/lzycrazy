import React, { useState } from 'react';
import video from './assets/video.mp4';
import 'remixicon/fonts/remixicon.css';
import './index.css'
import Loginfrom from './Loginfrom';
import logo from './assets/logo.png'
import RegisterModal from "./Registerpage";

const Login = () => {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      
          <div className='relative'>
          {!isVisible && <RegisterModal toggleVisibility={toggleVisibility}/>}
            <div className="loginpage relative  min-h-[92vh] py-10 px-4 w-full  flex justify-center items-center">
              <div className='min-h-24 w-[90%] flex  flex-col lg:flex-row '>
              {/* Left Video Section */}
              <div className="leftpart w-full lg:w-2/3 flex justify-center items-end">
                <div className="video_cnct min-h-[40vh] flex flex-col items-center p-2 lg:p-0">
                 
                 <img className='w-full max-w-[12rem]' src={logo} alt="" />
                  <div className="search mb-4 w-full max-w-[16rem] rounded-3xl border-2 border-gray-300 flex items-center">
                    <input
                      type="text"
                      placeholder="Coming Soon ..."
                      className="w-full p-2 text-sm lg:text-base rounded-3xl"
                    />
                    <i className="ri-mic-fill text-gray-500 text-lg mx-1"></i>
                    <i className="ri-search-line text-gray-500 text-lg mx-1"></i>
                  </div>
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    className="rounded-2xl h-[40vh] w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[600px] border-2"
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Right Form Section */}
              <div className="formpart mt-4 w-full lg:w-2/5 flex  p-2 lg:p-0 lg:items-end   justify-center">

                <Loginfrom toggleVisibility={toggleVisibility} />



              </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="h-auto w-full px-2 lg:px-10 py-5 flex flex-col lg:flex-row justify-between items-center border-t-2 border-gray-300 text-center lg:text-left">
              <div className="left_elm flex flex-wrap gap-2 lg:gap-10 text-xs lg:text-base mb-4 lg:mb-0">
                <p>About</p>
                <p>Advertising</p>
                <p>Business</p>
                <p>Investor</p>
                <p>We are Hiring</p>
              </div>
              <div className="right_elm flex gap-2 lg:gap-10 text-xs lg:text-base">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Help</p>
              </div>
            </footer>

            {/* <div className='Registerpage z-10 h-screen w-full bg-slate-100 absolute flex justify-center items-center'>
            
            </div> */}
          </div>
        


      

    </>
  );
};

export default Login;
