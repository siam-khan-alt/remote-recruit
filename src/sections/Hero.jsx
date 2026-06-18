import { motion } from "framer-motion";
import HeroBg from "../assets/hero-bg.svg";

export default function Hero() {
  return (
    <section className="relative w-full h-160 md:h-176 flex items-center justify-center overflow-hidden">
      
     <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <img 
          src={HeroBg} 
          alt="Hero Background Architecture"
          loading="lazy"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* text content */}
      <div className="relative z-10 w-full max-w-260 h-full mx-auto px-6 md:px-10 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 
            className="text-white font-bold tracking-tight text-2xl md:text-[53px]"
            
          >
            RemoteRecruit’s Difference
          </h1>

          <p 
            className="mt-6 max-w-200 text-white text-pretty font-medium text-[16px]  md:text-[20px]"
           
          >
            RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
          </p>
        </motion.div>

      </div>
    </section>
  );
}