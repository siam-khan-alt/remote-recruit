import { motion } from "framer-motion";

export default function UserCard({ 
  role, 
  name, 
  avatar, 
  roleColor, 
  delay, 
  className,
  avatarBg = "bg-transparent", 
  avatarBorder = "border-3 border-[#F1C40F]",
  avatarClass
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className={`absolute w-75 md:w-88 bg-white p-3 pr-8 rounded-full shadow-[14px_13px_20px_0px_rgba(135,129,245,0.11)] flex items-center gap-3 border border-[#F8FAFC] z-20 ${className}`}
    >
      {/* avatar */}
      <div className={`w-[53px] h-[53px] rounded-full overflow-hidden flex items-center justify-center shrink-0 ${avatarBg} ${avatarBorder} ${avatarClass}`}>
        <img
          src={avatar}
          alt={`${name}'s Avatar`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* text content */}
      <div className="flex flex-col text-left">
        <span className={`text-[12px] font-semibold ${roleColor}`}>
          {role}
        </span>
        <span className="text-[17px] font-medium text-[#11142D]">
          {name}
        </span>
      </div>
    </motion.div>
  );
}