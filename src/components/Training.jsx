import React from 'react'
import training from "../assets/training-img.jpg"

const Training = () => {
  return (
     <div className="w-full bg-white py-10 px-2 flex justify-center">
      <div className="max-w-6xl  rounded-xl py-10 flex gap-20 bg-white relative">


        <div className="w-[50%] relative pt-30">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={training}
              alt="Training"
              className=" rounded-xl w-xl h-80"
            />
          </div>


          <div className="absolute bottom-20 -right-10 flex items-center gap-4 px-5 py-6 animate-slide-up bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] w-fit">


      <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center">
       <svg
          width="26"
           height="26"
           viewBox="0 0 24 24"
          fill="white"
       >
      <path d="M17 3H7C7 5.21 5.21 7 3 7V9C3 11.21 5.21 13 7 13C7 15.21 8.79 17 11 17V20H8V22H16V20H13V17C15.21 17 17 15.21 17 13C19.21 13 21 11.21 21 9V7C18.79 7 17 5.21 17 3ZM5 9V8.26C6.22 7.86 7.24 7 7.72 6H7C7 7.1 6.1 8 5 8V9ZM19 9C17.9 9 17 8.1 17 7H16.28C16.76 7.99 17.78 8.86 19 9V9Z"/>
       </svg>
    </div>



      <div className="flex flex-col">
        <span className="text-[20px] font-semibold text-gray-900 leading-none">98%</span>
        <span className="text-gray-500 text-sm mt-1">Pass Rate</span>
      </div>

    </div>

        </div>


        <div className="w-[50%] flex flex-col justify-center">


          <div>
            
          </div>
         <div className="inline-flex justify-center items-center gap-2 px-4 py-1 
                bg-indigo-50 border border-indigo-200 
                rounded-full text-indigo-600 text-sm w-fit mb-4">

              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#4F46E5" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
                <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
              </svg>

             About Our Training
           </div>

          <h2 className="text-5xl font-bold font-arial leading-tight mb-4">
            Hands-On{" "}
            <span className="bg-linear-to-r from-[#5373FF] to-[#EE0000] text-transparent bg-clip-text">
              Enterprise Training
            </span>{" "}
            for Real-World Success
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Our expert instructors bring years of enterprise experience to deliver 
            comprehensive Red Hat training. From foundational Linux skills to 
            advanced cloud architecture, we prepare you for industry certification 
            and career advancement.
          </p>


        <div className="flex items-start gap-12 mb-8">

 
       <div className="flex items-start gap-3">

       <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >

          <circle cx="8" cy="10" r="3" />
          <path d="M5 19c0-2.2 1.8-4 4-4" />


          <circle cx="15.5" cy="9" r="3.5" />
          <path d="M12 19c0-3 2.5-5 5.5-5" />
        </svg>
      </div>

    
    <div>
      <p className="font-semibold text-gray-900 text-lg">Expert Mentors</p>
      <p className="text-gray-500 text-sm leading-[1.3]">
        Industry veterans guide your<br />learning journey
      </p>
    </div>
  </div>

  
  <div className="flex items-start gap-3">

    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#DC2626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a6 6 0 0 0-6 6c0 2.3 1.3 4.4 3 5.5V16h6v-2.5c1.7-1.1 3-3.2 3-5.5a6 6 0 0 0-6-6z" />
      </svg>
    </div>


    <div>
      <p className="font-semibold text-gray-900 text-lg">Practical Labs</p>
      <p className="text-gray-500 text-sm leading-[1.3]">
        Real cloud environments<br />for hands-on practice
      </p>
    </div>
  </div>

</div>
         <button
  class="px-6 py-3 rounded-xl w-50 text-white font-medium
         bg-linear-to-r from-[#5373FF] to-[#155DFC]
         transition-all duration-300 ease-out
         origin-top-left hover:scale-110
         hover:shadow-xl hover:shadow-purple-500/30">
  Explore Programs
</button>


        </div>
      </div>
    </div>
  )
}

export default Training;
