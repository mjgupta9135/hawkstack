import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-[#201f1f] pt-20 text-white flex flex-col items-center p-4 relative overflow-hidden font-sans">

      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-[700px] h-[700px] bg-red-600/20 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="text-center mb-24 z-10">
       <div className="inline-block mb-6">
  <span
    className="
      rounded-full px-5  py-3 text-sm font-medium
      text-white
      bg-[linear-gradient(90deg,#EE0000_0%,#5373FF_100%)]
      shadow-[0_0_15px_rgba(255,255,255,0.10)]
      border border-white/20
    "
  >
    Client Success Stories
  </span>
</div>

        <h2 className="text-7xl my-text  mb-4 tracking-tight">
          Client Testimonials
        </h2>
        <p className="text-gray-400 text-lg">
          Real results from enterprise leaders who trust HawkStack
        </p>
      </div>

      {/* ======================= CARDS CONTAINER ======================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full mb-12 z-10">

        {/* ==================== CARD 1 (RED) ==================== */}
        <div className="bg-[rgba(255,255,255,0.1)]
 border   border-white/5 rounded-2xl p-10 relative 
                        h-[500px] w-full flex flex-col justify-between group hover:border-white/10 transition">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none"></div>

          {/* Top content */}
          <div>
            <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Quote className="text-white w-6 h-6 fill-current" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
              ))}
            </div>

            <p className="text-2xl text-gray-200 font-light italic leading-relaxed">
              "HawkStack delivered exceptional results in our cloud migration project. Their Red Hat expertise was invaluable."
            </p>
          </div>

          {/* Footer */}
          <div className="flex flex-col  gap-8 mb-[60px]">
            <span className="bg-red-600 w-14 mt-4 text-white text-xs font-bold px-2 py-1 rounded">
              Kyndrl
            </span>
             <div className="text-sm flex flex-col gap-4 text-gray-300">
              <div className="text-white text-base font-medium">Technology Director</div>
              <div className="text-gray-400">Global Technology Services</div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 w-2 h-2 bg-red-600 rounded-full"></div>
        </div>

        {/* ==================== CARD 2 (BLUE) ==================== */}
        <div className="bg-[rgba(255,255,255,0.1)] border-white/5 rounded-2xl p-10 relative 
                        h-[500px] w-full flex flex-col justify-between group hover:border-white/10 transition">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Quote className="text-white w-6 h-6 fill-current" />
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
              ))}
            </div>

            <p className="text-2xl text-gray-200 font-light italic leading-relaxed">
              "Professional team with deep technical knowledge. They helped us modernize our infrastructure with confidence."
            </p>
          </div>

          {/* Footer */}
          <div className="flex flex-col  gap-8 mb-[60px]">
            <span className="bg-blue-600 w-10 mt-4 text-white text-xs font-bold px-2 py-1 rounded">
              HCL
            </span>
            <div className="text-sm flex flex-col gap-4 text-gray-300">
              <div className="text-white text-base font-medium">IT Operations Manager</div>
              <div className="text-gray-400">Enterprise Infrastructure</div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 w-2 h-2 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* ====================== CTA SECTION ====================== */}
      <div className="w-full max-w-4xl z-10">
        <div className="relative bg-[#111] border border-blue-500/30 rounded-xl p-12 overflow-hidden text-center">

          {/* CTA BG Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-red-900/10 to-blue-900/10 z-0"></div>
          <div className="absolute -left-10 top-1/2 w-40 h-40 bg-red-500/10 blur-3xl rounded-full"></div>
          <div className="absolute -right-10 top-1/2 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-4xl my-text mb-3 text-white">
              Ready to transform your infrastructure?
            </h3>
            <p className="text-[#99A1AF] text-xl mb-8">
              Join the ranks of successful enterprises powered by HawkStack
            </p>

           <button className=" w-[375px] h-[75px]
  group relative inline-flex items-center justify-center 
  px-8 py-3 text-white font-medium rounded-lg 
  bg-linear-to-r from-red-600 via-purple-500 to-blue-600
  transition-all duration-500 ease-out
  hover:bg-linear-to-r hover:from-blue-600 hover:via-purple-500 hover:to-red-600
">

  <span className="mr-2 text-xl transition-all duration-300">
    Get Started with HawkStack
  </span>

  {/* Arrow Icon */}
  <svg 
    className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" 
    fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
  </svg>

  {/* Glow layer */}
  <div className="
    absolute inset-0 rounded-lg 
    bg-linear-to-r from-red-600 via-purple-500 to-blue-600 
    blur-lg opacity-40 -z-10
    transition-all duration-500
    group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:via-purple-500 group-hover:to-red-600
  "></div>

</button>


          </div>
        </div>

        <p className="text-center text-gray-600 text-lg mt-8">
          Trusted by Fortune 500 companies worldwide
        </p>
      </div>

    </div>
  );
};

export default Testimonials;
