import { motion } from "framer-motion";

// Background and brand assets
import FooterBg from "../assets/footer-bg.svg";
import LogoImg from "../assets/logo.png";
import LogoIcon from "../assets/rr-badge.svg";
import PremiumIcon from "../assets/premium-icon.png";

// Feature icons
import ActiveIcon from "../assets/active-icon.svg";
import XIconSvg from "../assets/x-icon.svg";
import { socialLinks } from "../data/socials";
import { freeFeatures, premiumFeatures } from "../data/features";

export default function PricingFooter() {
  return (
    <section className="w-full relative bg-white flex flex-col justify-between pt-16 overflow-hidden min-h-188">
      {/* Wave Background Layer */}
      <div className="absolute inset-x-0 bottom-0 w-full h-145 md:h-130 pointer-events-none select-none z-1">
        <img
          src={FooterBg}
          alt="Footer Wave"
          loading="lazy"
          draggable="false"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-285 mx-auto px-6 relative z-10 grow flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-[#11142D] font-semibold text-3xl md:text-[40px] text-center mb-[50px] tracking-tight">
          Help Is One Click Away
        </h2>

        {/* Pricing Cards Grid */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-240 mb-24">
          {/*  Free Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="w-full lg:w-1/2 bg-white rounded-[28px] p-6 md:p-8 shadow-[0_20px_50px_rgba(13,27,62,0.04)] border border-[#E2E8F0] flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Left Side */}
              <div className="w-full sm:w-[150px] h-40 bg-[#ECF2FF] rounded-2xl flex flex-col items-center justify-center">
                <span className="text-[#52B4DA] font-semibold text-[32px]">Free</span>
                <span className="text-[#11142D]/39 text-[20px] font-medium mt-1">
                  Basic
                </span>
              </div>

              {/* Right Side */}
              <ul className="flex flex-col gap-4 self-center sm:self-start">
                {freeFeatures.map((feature, i) => (
                  <li key={i} className={`flex items-center gap-3 text-[16px] font-medium ${feature.isAvailable ? 'text-[#323445]' : 'text-[#808191]'}`}>
                    <img
                      src={feature.isAvailable ? ActiveIcon : XIconSvg}
                      alt={feature.isAvailable ? "Active" : "Not Included"}
                      className="w-5 h-5"
                      loading="lazy"
                    />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Row */}
            <button className="w-full py-4 border-2 border-[#1E3E85] text-[#1E3E85] font-bold text-base rounded-2xl bg-transparent hover:bg-[#EFF4FF] transition-all cursor-pointer select-none">
              Get Started
            </button>
          </motion.div>

          {/*  Premium Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="w-full lg:w-1/2 bg-white rounded-[28px] p-6 md:p-8 shadow-[0_25px_60px_rgba(13,27,62,0.07)] border border-[#E2E8F0] flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 relative w-full">
              {/* Left Side */}
              <div className="w-full sm:w-[150px] h-40 bg-[#EFF4FF] rounded-2xl flex flex-col items-center justify-center relative pt-4">
                {/* Float Badge */}
                <div className="absolute top-2 left-2 right-2 bg-[#E2F5FC] text-[#4DA8CC] font-bold text-[10px] px-2 py-1 rounded-full flex items-center justify-center gap-1 shadow-sm">
                  <img
                    src={PremiumIcon}
                    alt="Premium"
                    className="w-3 h-3 object-contain"
                    loading="lazy"
                  />
                  <span>Premium</span>
                </div>
                <span className="text-[#1E3E85] font-bold text-3xl mt-2">
                  $79.99
                </span>
                <span className="text-[#718096] text-xs font-semibold mt-1">
                  Per Month
                </span>
              </div>

              {/* Right Side */}
              <ul className="flex flex-col gap-4 self-center sm:self-start">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[16px] font-medium text-[#323445]">
                    <img src={ActiveIcon} alt="Active" className="w-5 h-5" loading="lazy" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Row */}
            <button className="w-full py-[18px] bg-linear-to-br from-[#52B4DA] to-[#1E3E85] hover:opacity-95 text-white font-bold text-base rounded-2xl shadow-[0_6px_20px_rgba(30,62,133,0.25)] transition-all cursor-pointer select-none">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>

      {/* Footer Area */}
      <footer className="w-full relative z-10 max-w-285 mx-auto px-6 pb-8 flex flex-col gap-12 justify-end">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Footer Branding Logo */}
          <div className="select-none h-12 flex items-center">
            <img
              src={LogoImg}
              alt="RemoteRecruit Logo"
              className="h-10 w-auto object-contain"
              loading="lazy"
            />
          </div>

          {/*  Social Loop */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.url} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-90 overflow-hidden p-[6px]">
                <img src={social.img} alt="social icon" className="w-full h-full object-contain brightness-0 invert" loading="lazy" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom Icon */}
        <div className="w-full flex justify-center pt-4 border-t border-white/10">
          <div className="h-6 flex items-center justify-center">
            <img
              src={LogoIcon}
              alt="RemoteRecruit Icon"
              className="h-5 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </footer>
    </section>
  );
}
