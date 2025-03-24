import React from 'react';

const MainContainer = ({ children }) => {
  return (
    // <div className="pacifico-regular flex flex-col items-center justify-center w-[90%] max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-pink-300">
    <div className="baloo-da-2-regular flex flex-col items-center justify-center w-[90%] max-w-md p-8 bg-inh" >
      {children}
    </div>
  )
}

export default MainContainer