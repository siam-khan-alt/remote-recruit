import { motion } from "framer-motion";

import UserAvatar from "../assets/avatar-gru.png";
import FloatingDot from "../assets/blue-dot.png";
import DashboardMockup from "../assets/dashboard-mockup.png";
import RemoteRecruitBadge from "../assets/rr-badge.png";
import SectionHeader from "../components/ui/SectionHeader";
import UserCard from "../components/ui/UserCard";

export default function GlobalReach() {
  return (
    <section className="w-full bg-[#FFFFFF] my-16 md:mt-20.75 pt-0 md:pt-2 md:mb-42.5 flex items-center justify-center ">
      <div className="w-full max-w-266.75 min-h-auto md:h-113.5 mx-auto px-6 md:px-10 flex md:flex-row flex-col md:gap-10 lg:gap-29 items-center relative">
        {/* left */}
        <SectionHeader
          badgeText="Global Reach"
          title="The First Fully Global Job Board, Anywhere, Ever"
          description="RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be."
        />

        {/* right  */}
        <div
          className=" relative w-full max-w-88.75 md:w-88.75 h-112.75 md:h-full p-5 rounded-[34px] bg-white flex flex-col items-start shadow-[14px_41px_100px_0px_rgba(49,89,211,0.12)] "
        
        >
          {/* Floating Dot */}
          <div className="absolute hidden md:flex  -left-4 w-5.5 h-5.5 z-10 animate-pulse">
            <img
              src={FloatingDot}
              alt="Decorative Dot"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Dashboard Mockup */}
          <div className="h-auto max-h-44 max-w-78.75 md:w-78.75 rounded-2xl shadow-[0_20px_50px_rgba(13,27,62,0.08)] overflow-hidden border border-[#F1F5F9]">
            <img
              src={DashboardMockup}
              alt="Platform Dashboard Mockup"
              className="w-full h-full object-cover"
            />
          </div>
             {/* Python Developer Card */}
          <UserCard
            role="Python Developer"
            name="Felonious Gru"
            avatar={UserAvatar}
            roleColor="text-[#1E3E85]"
            delay={0.2}
            className="right-0 md:right-16.75 top-[50%] md:top-58"
          />

          {/* Front End Wizard Card  */}
          <UserCard
            role="Front End Wizard"
            name="Mel Muselphiem"
            avatar={UserAvatar}
            roleColor="text-[#52B4DA]"
            delay={0.4}
            className="left-0 md:left-4.75 bottom-9.25 md:bottom-10"
          />

          {/* RemoteRecruit Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute hidden md:flex -right-12.25 top-37.5 w-20 h-20 md:w-22.75 md:h-22.75 z-30 drop-shadow-lg"
          >
            <img
              src={RemoteRecruitBadge}
              alt="RemoteRecruit Floating Badge"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
