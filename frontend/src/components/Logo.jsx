import { LOGO_SRC } from "../data/content";

export const Logo = ({ light = false, className = "", imgClass = "h-9 sm:h-10" }) => {
  return (
    <span className={`inline-flex items-center ${className}`} data-testid="brand-logo">
      <img
        src={LOGO_SRC}
        alt="BRILLEXA+ — nettoyage résidentiel et commercial"
        className={`w-auto object-contain ${imgClass} ${light ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
};
