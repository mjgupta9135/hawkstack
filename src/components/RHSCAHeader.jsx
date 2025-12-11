import React from 'react'
import { CheckCircle } from "lucide-react";

const RHSCAHeader = () => {
  return (
     <div className="w-full min-h-screen bg-[#080B14] relative text-white pt-32 pb-20 px-6 flex flex-col items-center font-sans overflow-hidden">

      {/* BACKGROUND GRADIENT GLOWS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b1d2b_0%,#07080d_70%)]"></div>
      <div className="absolute top-20 right-40 w-72 h-72 bg-red-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-20 left-40 w-72 h-72 bg-blue-600/20 blur-[130px] rounded-full"></div>

      {/* SMALL ICON WITH GRADIENT BOX */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#FF4D4D] to-[#5A48FF] flex items-center justify-center shadow-[0_10px_40px_rgba(255,0,80,0.35)]">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 17l-4 2 1-4-3-3 4-.5L12 7l2 4.5 4 .5-3 3 1 4z"/>
          </svg>
        </div>
      </div>

      {/* MAIN TITLE */}
      <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight z-10">
        <span className="bg-linear-to-r from-[#6D4DFF] to-[#FF2D55] text-transparent bg-clip-text">
          Red Hat Certified System
        </span>
        <br />
        <span className="text-white">Administrator (RHCSA®)</span>
      </h1>

      {/* SUBTEXT */}
      <p className="text-gray-300 text-center text-xl max-w-3xl mt-6 leading-relaxed z-10">
        An IT professional who can perform core system administration on Red Hat Enterprise Linux. 
        Credential earned after passing RHCSA Exam (EX200).
      </p>

      {/* FEATURES BOXES */}
      <div className="flex flex-col md:flex-row gap-6 mt-14 z-10">

        {/* CARD 1 */}
        <div className="w-[340px] h-[130px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center text-center">
          <CheckCircle className="w-7 h-7 text-red-500 mb-3" />
          <p className="text-gray-300 text-lg">Performance-Based Exam</p>
        </div>

        {/* CARD 2 */}
        <div className="w-[340px] h-[130px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center text-center">
          <CheckCircle className="w-7 h-7 text-blue-500 mb-3" />
          <p className="text-gray-300 text-lg">Industry Recognized</p>
        </div>

        {/* CARD 3 */}
        <div className="w-[340px] h-[130px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center text-center">
          <CheckCircle className="w-7 h-7 text-green-500 mb-3" />
          <p className="text-gray-300 text-lg">Career Advancement</p>
        </div>

      </div>
    </div>
  )
}

export default RHSCAHeader
