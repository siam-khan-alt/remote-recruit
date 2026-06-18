import { motion } from "framer-motion";

import ClientAvatar from "../assets/avatar-gru.png";
import FloatingDot from "../assets/blue-dot.png";
import ProfileMockup from "../assets/dashboard-profile.png";
import VideoPlayIcon from "../assets/video-play-icon.png";
import SectionHeader from "../components/ui/SectionHeader";
import UserCard from "../components/ui/UserCard";

export default function ShowcaseTalents() {
  const skillsList = [
    "Python",
    "Javascript",
    "Front End",
    "Back End",
    "iOS ",
    "+12",
  ];

  return (
    <section className="w-full bg-[#FFFFFF] my-16 md:mt-41 pt-0 md:pt-2 md:mb-36.5 flex items-center justify-center">
      <div className="w-full max-w-266.75 min-h-auto md:h-113.5 mx-auto px-6 md:px-10 flex md:flex-row flex-col md:gap-10 lg:gap-[181.76px] items-center relative">
        {/* Left Side */}
        <SectionHeader
          badgeText="Custom Profile"
          title="Showcase Your Talents"
          description="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
        />

        {/* Right Side */}
        <div className="relative w-full max-w-88.75 md:w-88.75 h-112.75 md:h-full p-5 rounded-[34px] bg-white flex flex-col items-start shadow-[14px_41px_100px_0px_rgba(49,89,211,0.12)]">
          {/* Floating Dot */}
          <div className="absolute hidden md:flex -top-4 -left-4 w-5.5 h-5.5 z-10 animate-pulse">
            <img
              src={FloatingDot}
              alt="Decorative Dot"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Video Mockup Container */}
          <div className="relative group h-auto max-h-52 w-full rounded-2xl shadow-[0_20px_50px_rgba(13,27,62,0.04)] overflow-hidden border border-[#F1F5F9] mb-6 cursor-pointer">
            <img
              src={ProfileMockup}
              loading="lazy"
              alt="Profile Talents Video Mockup"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 m-auto w-14 h-14 flex items-center justify-center bg-[#52B4DA]/49 rounded-full z-20"
            >
              <img
                src={VideoPlayIcon}
                alt="Play Video"
                loading="lazy"
                className="w-6 h-6 object-contain drop-shadow-md"
              />
            </motion.div>
          </div>

          {/* Tech Skills */}
          <div className="w-full flex flex-wrap gap-4 mt-auto pt-4 px-1">
            {skillsList.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-2.5 rounded-xl text-[12px] font-medium bg-linear-to-r from-[#5799EB]/10 to-[#9F74FB]/10"
              >
                <span className="bg-linear-to-r from-[#336DA6] to-[#1E3E85] bg-clip-text text-transparent">
                  {skill}
                </span>
              </span>
            ))}
          </div>

          {/* Past Client Feedback Card */}
          <UserCard
            role="Past Client Feedback"
            name="Best Developer Ever!"
            avatar={ClientAvatar}
            roleColor="text-[#1E3E85] text-[11px]"
            delay={0.3}
            className="left-0 md:-left-12 bottom-36.5"
            avatarBorder="border-3 border-[#F1C40F]"
          />

          {/* Client Avatar Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute hidden md:flex -right-7.5 top-37.5 w-20 h-20 md:w-22.75 md:h-22.75 z-30 drop-shadow-lg"
          >
            <div className="w-full h-full rounded-full bg-linear-to-br from-[#52B4DA] to-[#1E3E85] p-1.5 flex items-center justify-center">
              <img
                src={ClientAvatar}
                alt="Client Avatar Badge"
                loading="lazy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
