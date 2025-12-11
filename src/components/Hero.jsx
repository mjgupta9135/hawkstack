import React from 'react'
import cloud from "../assets/cloud-lock.png";
import rhsa from "../assets/rhcsa-badge.png";
import cubes from "../assets/cubes.png"

const Hero = () => {
  return (
     <div className="bg-[#080B1A] text-white w-full pt-6">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

    
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
            <span className="text-blue-400">🔍</span>
            Red Hat Certified Training
          </div>

          <h1 className="mt-8 text-5xl w-7xl font-bold leading-tight">
            <span className="bg-linear-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              RHCSA Certification &
            </span>
            <br  className='mt-4'/>
             Enterprise Cloud Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Master Red Hat Enterprise Linux and accelerate your career with
            industry-recognized certifications and hands-on cloud training.
          </p>

          
          <div className="flex gap-4 mt-10">
            <div class="relative group inline-block">
 
  <div
    class="absolute inset-0 mx-auto w-[90%] h-[70%] blur-xl opacity-70 
           bg-blue-500/60 rounded-full group-hover:scale-[1.25] 
           group-hover:translate-x-2 group-hover:translate-y-2
           transition-all duration-500 ease-out"
  ></div>

  
  <button
    class="relative z-10 px-8 py-3 rounded-xl bg-blue-600 text-white 
           font-medium shadow-lg shadow-blue-600/40 
           group-hover:scale-[1.06] group-hover:-scale-105
           origin-right-bottom transition-all duration-300"
  >
    Enroll for RHCSA / Training
  </button>
</div>


            <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20">
              View Courses
            </button>
          </div>

          
          <div className="flex items-center gap-16 mt-6 pb-10">

  {/* 99.9% */}
  <div className="flex flex-col items-start">
    <span className="text-3xl font-semibold text-blue-400">99.9%</span>
    <span className="text-gray-400 text-sm">Uptime SLA</span>
  </div>

  {/* 500K+ */}
  <div className="flex flex-col items-start">
    <span className="text-3xl font-semibold text-red-400">500K+</span>
    <span className="text-gray-400 text-sm">Threats Blocked</span>
  </div>

  {/* 24/7 */}
  <div className="flex flex-col items-start">
    <span className="text-3xl font-semibold text-green-400">24/7</span>
    <span className="text-gray-400 text-sm">Monitoring</span>
  </div>

</div>

         
        </div>

        {/* RIGHT SIDE IMAGE BLOCK */}
        <div className="relative flex justify-center ">
          <img
            src={cloud}
            alt="cloud lock"
            className="w-[235px] h-44 scale-130 z-10 absolute -top-10 -left-6 drop-shadow-xl animate-slide-right"
          />

          <img
            src={cubes}
            alt="cubes"
            className="w-[440px] h-[450px] drop-shadow-2xl"
          />

          <div className="absolute top-30 right-13 px-4 py-3 animate-slide-down bg-white/10 border border-white/20 rounded-xl backdrop-blur-lg flex items-center gap-3">
             <div className="absolute inset-0 rounded-2xl"
       style={{
         boxShadow:
           "0 0 20px rgba(0, 255, 120, 0.4), 0 0 35px rgba(0, 255, 120, 0.25)"
       }}
  ></div>

  {/* Green rounded square */}
  <div className="w-8 h-8 rounded-sm bg-linear-to-br from-green-400  to-green-600 flex items-center justify-center">
    
    {/* White pentagon inside */}
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 6L23 11V19C23 21.1 21.9 23 20 23.8L16 26L12 23.8C10.1 23 9 21.1 9 19V11L16 6Z"
        fill="white"
      />
    </svg>

  </div>

        
            <div className='flex flex-col'> 
                <span className='text-xs text-[#99A1AF]'>Security Status</span>
                 <span className="text-base text-gray-200">
                    All Systems Protected
                </span>
            </div>
           
          </div>

          <img
            src={rhsa}
            alt="RHCSA"
            className="w-28 scale-200 animate-slide-up bg-transparent absolute bottom-20 left-10"
          />
        </div>

      </div>
        <div  className='right-28 bottom-31 absolute'>
            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-blue-500/40 backdrop-blur-md shadow-lg flex items-center gap-6 w-fit">

  {/* Left Section */}
  <div className="flex flex-col items-start">
    <span className="text-2xl font-semibold text-blue-400">10M+</span>
    <span className="text-gray-300 text-sm">Events/Day</span>
  </div>

  {/* Divider */}
  <div className="w-px h-10 bg-white/15"></div>

  {/* Right Section */}
  <div className="flex flex-col items-start">
    <span className="text-2xl font-semibold text-red-500">50ms</span>
    <span className="text-gray-300 text-sm">Response</span>
  </div>

</div>

        </div>
             
    </div>
  )
}

export default Hero
