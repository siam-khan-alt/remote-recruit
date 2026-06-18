import { motion } from "framer-motion";
import ReadyToWorkBg from "../assets/ready-to-work-bg.svg"; 
import DashboardLookup from "../assets/dashboard-lookup.png"; 
import { ArrowRight } from "lucide-react";

export default function ReadyToWork() {
  return (
    <section className="w-full h-[610px] bg-[#EDF5FA] flex items-end justify-center overflow-hidden relative isolate">
      
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-1">
        <img 
          src={ReadyToWorkBg} 
          alt="" 
          draggable="false"
          loading="lazy"
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#52B4DA]/15 rounded-full blur-[120px] pointer-events-none z-1" />

      <div className="w-full flex md:flex-row flex-col gap-12 md:gap-16 lg:gap-24 items-end relative z-10 px-6 md:px-0 md:pr-12 lg:pr-24">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 flex justify-start items-end self-end">
          
          <motion.div
            animate={{ y: [0, -12, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[30px] left-1/3 w-10 h-10 rounded-full bg-linear-to-br from-[#FFD02B] to-[#F1C40F] shadow-[0_10px_25px_rgba(241,196,15,0.4)] z-20 hidden md:block pointer-events-none"
          />

          <div className="w-full max-w-160 rounded-tr-3xl overflow-hidden shadow-[25px_0_80px_rgba(13,27,62,0.06)] border-t border-r border-[#E2E8F0]/30 md:mb-0 -mb-6">
            <img
              src={DashboardLookup}
              alt="RemoteRecruit Job Board Dashboard"
              loading="lazy"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>

       {/* Right Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start relative pb-16 md:pb-20 lg:pb-24">
          
          <span className="text-[#1E3E85] font-semibold text-sm md:text-base tracking-wide mb-3 block">
            Are you ready?
          </span>

          <h2 className="text-[#11142D] font-semibold text-3xl md:text-4xl lg:text-[44px] mb-6 max-w-90">
            Help is only a few clicks away!
          </h2>

          <p className="text-[#767784] text-base md:text-lg mb-[34px] max-w-[331px]">
            Click Below to get set up super quickly and find help now!
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-[14px] bg-[#EBF5FA] text-[#1E3E85] font-semibold text-[15px] pl-[10px] pr-6 py-[10px] rounded-full shadow-[0_4px_15px_rgba(82,180,218,0.06)] transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#52B4DA] to-[#1E3E85] flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-[0_2px_8px_rgba(82,180,218,0.3)]">
              <ArrowRight className="w-5 h-5 text-white stroke-[2px]" />
            </div>
            <span className="tracking-wide">Get Started</span>
          </motion.button>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[49px] right-12 w-7 h-7 rounded-full bg-linear-to-br from-[#5799EB] to-[#9F74FB] shadow-[0_8px_20px_rgba(87,153,235,0.3)] z-20 hidden lg:block pointer-events-none"
          />

        </div>

      </div>
    </section>
  ); 
}