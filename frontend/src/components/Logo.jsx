import { Sparkles } from "lucide-react";

export const Logo = ({ light = false, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`} data-testid="brand-logo">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
          light ? "bg-white/15" : "bg-brand"
        }`}
      >
        <Sparkles className="h-5 w-5 text-white" strokeWidth={2.4} />
      </span>
      <div className="leading-none">
        <span
          className={`font-display text-xl font-extrabold tracking-tight ${
            light ? "text-white" : "text-brand"
          }`}
        >
          BRILLEXA
          <span className={light ? "text-brand-light" : "text-brand-light"}>+</span>
        </span>
      </div>
    </div>
  );
};
