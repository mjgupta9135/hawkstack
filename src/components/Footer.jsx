import React from 'react'
import { ArrowRight, Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-[#050505] text-white pt-28 pb-20 px-6 font-sans">

     
      <div className="flex justify-center mb-6">
        <span className="px-5 py-1.5 text-sm rounded-full 
          bg-white/5 border border-white/10 
          text-gray-300 shadow-[0_0_20px_rgba(255,255,255,0.04)]">
          Ready to Get Started?
        </span>
      </div>

      
      <h1 className="text-center text-6xl my-text font-semibold leading-tight">
        Secure Your Cloud Infrastructure
        <br />
        <span className="bg-linear-to-r from-[#6D4DFF] via-[#9D4EFF] to-[#FF2D55] bg-clip-text text-transparent">
          Today
        </span>
      </h1>

    
      <p className="text-center text-gray-400 text-lg mt-5 mb-12">
        Join industry leaders in building secure, AI-powered cloud infrastructure
      </p>

   
      <div className="flex justify-center gap-6">

       
        <button className=" cursor-pointer
          group relative px-8 py-3 rounded-lg text-white text-base font-medium 
          bg-linear-to-r from-[#4A63FF] to-[#6D4DFF]
          shadow-[0_0_40px_rgba(90,110,255,0.5)]
          hover:scale-[1.04] transition-all duration-300 ease-out">
          
          <span className="mr-2 text-xl">Start Free Trial</span>
          <ArrowRight className="inline font-bold w-6 h-6 text-xl group-hover:translate-x-1 transition-transform" />
        </button>

        <button className=" cursor-pointer
          flex items-center gap-2 px-8 py-3 text-xl rounded-lg text-gray-200  font-medium
          bg-white/5 border border-white/10 hover:border-white/20
          transition-all duration-300">
          
          <Mail className="w-6 h-6" />
          Contact Sales
        </button>

      </div>

  
      <div className="w-full border-t border-white/10 mt-20 mb-14"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 my-text">

        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#4A63FF] to-[#6D4DFF] 
              flex items-center justify-center shadow-lg">
              🛡️
            </div>
            <span className="text-2xl font-semibold">HawkStack</span>
          </div>

          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Enterprise AI & Cloud Security Solutions for modern businesses
          </p>
        </div>


        <div>
          <h4 className="font-medium text-lg text-white mb-3 cursor-pointer">Product</h4>
          <ul className="space-y-2 text-gray-400 text-sm cursor-pointer">
            <li>Features</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>API Reference</li>
          </ul>
        </div>


        <div>
          <h4 className="font-medium text-lg text-white mb-3 cursor-pointer">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm cursor-pointer">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>


        <div>
          <h4 className="font-medium text-lg text-white mb-3 cursor-pointer">Legal</h4>
          <ul className="space-y-2 text-gray-400 text-sm cursor-pointer">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
            <li>Compliance</li>
          </ul>
        </div>

      </div>

<div className="mt-16 flex items-center justify-between max-w-6xl mx-auto text-gray-600 text-sm">

  <span>© 2024 HawkStack × RedHat. All rights reserved.</span>

  <div className="flex items-center gap-6">
    <Linkedin 
      className="w-6 h-6 cursor-pointer text-[#4A63FF] hover:text-[#6D4DFF] transition duration-300" 
    />
    <Twitter 
      className="w-6 h-6 cursor-pointer text-[#4A63FF] hover:text-[#6D4DFF] transition duration-300" 
    />
    <Github 
      className="w-6 h-6 cursor-pointer text-[#4A63FF] hover:text-[#6D4DFF] transition duration-300" 
    />
  </div>

</div>


    </div>
  )
}

export default Footer
