import { motion } from "framer-motion";

import PaypalIcon from "../assets/paypal-icon.png";
import ActiveIcon from "../assets/active-Icon.svg";
import FloatingDot from "../assets/blue-dot.png";
import RemoteRecruitBadge from "../assets/rr-badge.svg";
import SectionHeader from "../components/ui/SectionHeader";
import UserCard from "../components/ui/UserCard";
import { feeFreeFeatures } from "../data/features";

export default function FeeFreeForever() {
 
  return (
    <section className="w-full bg-[#FFFFFF] pt-0 md:pt-3  flex items-center justify-center ">
      <div className="w-full max-w-[1067px] min-h-auto md:h-[454px] mx-auto px-6 md:px-10 flex md:flex-row-reverse flex-col md:gap-10 lg:gap-[145px] items-center relative">
        {/* right */}
        <SectionHeader
          badgeText="Actually Fee Free"
          title="Fee-Free Forever"
          description="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved."
        />

        {/* left */}
        <div className="relative w-full max-w-[355px] md:w-[355px] h-full p-8 rounded-[34px] bg-white flex flex-col items-start shadow-[14px_41px_100px_0px_rgba(49,89,211,0.12)]">
          {/* Floating Dot */}
          <div className="absolute hidden md:flex -top-[3px] -left-4 w-[22px] h-[22px] z-10 animate-pulse">
            <img
              src={FloatingDot}
              alt="Decorative Dot"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="w-full bg-white text-left">
            <span className="text-[12px] font-semibold text-[#808191]">
              Your Membership Tier
            </span>

            <h3 className="text-[20px] font-semibold bg-linear-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent mt-[5px] mb-[17px]">
              Premium
            </h3>

            <span className="text-[10px] font-bold text-[#11142D]/50 uppercase mb-3">
              Features
            </span>

            {/* Active Mark List */}
            <div className="flex flex-col space-y-5">
              {feeFreeFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-1">
                  <img
                    src={ActiveIcon}
                    alt="Active Mark"
                    loading="lazy"
                    className="w-4 h-4 shrink-0 object-contain"
                  />
                  <span className="text-[14px] font-medium text-[#323445]/90">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Payment Card */}
          <UserCard
            role="Upcoming Payment In..."
            name="14 Days - $79.99"
            avatar={PaypalIcon}
            roleColor="text-[#A4A7B7] !text-[11px] font-semibold"
            delay={0.2}
            className="left-0 md:-left-12 bottom-7 md:bottom-12 "
            avatarClass="py-[17px] px-[16px] !h-[61px] !w-[61px]"
            avatarBg="bg-[#E8F0FE]"
            avatarBorder="border-0"
          />

          {/* RemoteRecruit Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute hidden md:flex -right-[49px] top-[150px] w-20 h-20 md:w-[91px] md:h-[91px] z-30 drop-shadow-lg"
          >
            <div className="w-full h-full rounded-full bg-linear-to-br from-[#52B4DA] to-[#1E3E85] p-2 flex items-center justify-center">
              <img
                src={RemoteRecruitBadge}
                alt="RemoteRecruit Floating Badge"
                loading="lazy"
                className="w-12 h-10 object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
