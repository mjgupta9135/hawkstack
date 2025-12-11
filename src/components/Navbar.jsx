import React from "react";
import redhat from "../assets/redhat.png"
import hawkstack from "../assets/hawkstack.png"

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 backdrop-blur-xl bg-[#080B1A] ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="bg-white px-2 py-1 rounded-xs">
                 <img src={hawkstack} alt="HawkStack" className="h-8 " />
            </div>
       
          <div className="bg-white px-2 py-1 W-28 rounded-xs">
                <img src={redhat} alt="Red Hat" className="h-8 " />
          </div>
          
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-poppins text-white ml-14">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">HawkStack’s Approach</a>
          <a href="#" className="hover:text-white transition">Red Hat Services</a>
          <a href="#" className="hover:text-white transition">RHCSA Certification</a>
        </div>
        <div className="flex items-center gap-4 text-white text-base">
          <button className="px-5 py-2 rounded-3xl bg-white/10 border  border-white/20 hover:bg-white/20 hover:border-red-500">
            Contact
          </button>

          <button className="px-5 py-2 rounded-3xl bg-blue-600 hover:bg-blue-700 hover:scale-110 duration-100 ease-in-out text-white shadow-lg shadow-blue-600/40">
            Talk to Learning Team
          </button>
        </div>
      </div>
    </nav>
  );
}
