import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoImg from "../assets/logo.png"; 

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 flex items-center ${
          scrolled ? "bg-[#1E3E85] backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="w-full max-w-360 mx-auto px-6 md:px-12.5 py-5 md:py-7.25 flex items-center justify-between">
          
          <a href="/" className="flex items-center select-none active:scale-95 transition-transform">
            <img 
              src={LogoImg} 
              alt="RemoteRecruit Logo" 
              className="h-8 md:h-10 w-auto object-contain" 
            />
          </a>

          {/* Dekstop Button */}

          <div className="hidden md:flex items-center gap-6">
            <a
              href="/signin"
              className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="px-4 py-2.5 text-sm font-bold text-white bg-[#4DA8CC] rounded-2xl hover:bg-[#2f9eca] "
            >
              Sign Up
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-x-0 top-19 z-40 md:hidden bg-[#1E3E85] border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-50 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          <a
            href="/signin"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3 text-center text-sm font-bold text-white rounded-full"
          >
            Sign In
          </a>
          <a
            href="/signup"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3 text-center text-sm font-bold text-white bg-[#4DA8CC] rounded-full "
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}