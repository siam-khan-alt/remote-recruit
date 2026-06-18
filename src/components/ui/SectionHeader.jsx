export default function SectionHeader({ badgeText, title, description, maxWidth = "500px" }) {
  return (
    <div 
      className="flex flex-col items-start space-y-5 text-left w-full"
      style={{ maxWidth: maxWidth }}
    >
      {/* badge */}
      <span className="px-5 py-2.5 rounded-full bg-[#C2EEFF] text-[#11142D] font-semibold text-xs">
        {badgeText}
      </span>

      {/* main title */}
      <h2 className="text-[#11142D] font-medium text-3xl md:text-[40px] leading-[1.2] tracking-tight">
        {title}
      </h2>

      {/* discription */}
      <p className="text-[#11142D]/64 text-[15px] md:text-[16px] leading-relaxed max-w-115 font-medium">
        {description}
      </p>
    </div>
  );
}