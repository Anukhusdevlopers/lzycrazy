import React from 'react'

const Loginfrom = ({toggleVisibility}) => {
  return (
    <>  
        <div className="formbox w-full max-w-[300px] lg:max-w-[400px] bg-white rounded-xl shadow-md border-2 border-gray-100 p-3 lg:p-4">
            <input
              type="text"
              className="w-full py-2 px-3 rounded-md border-gray-200 border-2 text-sm lg:text-lg"
              placeholder="Email Address or Phone Number"
            />
            <input
              type="password"
              className="w-full py-2 px-3 rounded-md mt-4 border-gray-200 border-2 text-sm lg:text-lg"
              placeholder="Password"
            />
            <button className="py-2 bg-[#040c4a] hover:bg-[#1c70de] w-full text-white font-semibold rounded-md mt-5 text-sm lg:text-base">
              Log In
            </button>
            <p className="text-blue-600 text-center mt-4 text-sm lg:text-base">Forgotten Password</p>
            <hr className="mt-5 mb-6" />
            <button onClick={toggleVisibility} className="py-2 bg-[#42b72a] w-full text-white font-semibold rounded-md text-sm lg:text-base">
              Create New Account
            </button>
          </div>
       
    </>
  )
}

export default Loginfrom