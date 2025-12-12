import { ANIMATED_DOT_PROP } from "@/common/types";

export function AnimatedDot({ isActive, progress }: ANIMATED_DOT_PROP) {
  return (
    <div
      className="relative h-3 transition-all duration-300 ease-out"
      style={{ width: isActive ? "52px" : "12px" }}
    >
      <div className="absolute inset-0 bg-gray-300 rounded-full">
        {isActive && (
          <div
            className="absolute inset-0 bg-linear-to-r from-primary to-secondary rounded-full transition-all duration-100 ease-linear origin-left"
            style={{
              transform: `scaleX(${progress})`,
            }}
          />
        )}
      </div>
    </div>
  );
}
