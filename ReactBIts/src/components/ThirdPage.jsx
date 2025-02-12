import Particles from "./Effects/Particles"

// import React from 'react'


const ThirdPage = () => {
  return (
    <div className="h-screen w-full bg-black text-white p-10 relative overflow-hidden">
  {/* Particles as Background */}
  <div className="absolute top-0 left-0 w-full h-full z-0">
    <Particles />
  </div>

  {/* Main Content */}
  <div className="flex justify-center mt-72 w-[600px] bg-[lightgoldenrodyellow] h-[400px] ml-[620px] rounded-3xl relative z-10">
    <h1 className="text-7xl mt-4 font-longa font-light text-black tracking-widest">
      YOU CAN ONLY <br /> BUILD BRANDS <br /> PEOPLE LOVE <br />
      <span className="font-bruce text-4xl text-orange-400"> &nbsp; BY LOVING </span> YOUR  <br />
      <span className="z-10 absolute">AUDIENCE</span>
    </h1>
  </div>

  {/* "LIKE CRAZY" Positioned Correctly */}
  <div className="text-black bg-[#5626c7] w-64 h-14 absolute rotate-28 top-185 left-300 rounded-l-full z-20 flex items-center justify-center">
    <h1 className="text-4xl font-bold">LIKE CRAZY</h1>
  </div>
</div>
  )
}

export default ThirdPage
