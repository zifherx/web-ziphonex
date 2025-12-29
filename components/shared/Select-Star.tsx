"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { Button } from "../ui/button";

interface SelectStarProps {
  value: number;
  onChange: (rating: number) => void;
  max?: number;
  size?: number;
  disabled?: boolean;
  showLabel?: boolean;
}

export function SelectStar({
  onChange,
  disabled = false,
  showLabel = true,
  value = 0,
  max = 5,
  size = 24,
}: SelectStarProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (rating: number) => {
    if (!disabled) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    if (!disabled) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const getStartColor = (index: number) => {
    const currentRating = hoverRating || value;
    return index <= currentRating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-300";
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        {Array.from({ length: max }, (_, index) => {
          const startNumber = index + 1;
          return (
            <Button
              key={startNumber}
              type="button"
              variant="link"
              onClick={() => handleClick(startNumber)}
              onMouseEnter={() => handleMouseEnter(startNumber)}
              onMouseLeave={handleMouseLeave}
              disabled={disabled}
              className={`transition-all duration-200 p-0 m-0 ease-in-out ${
                disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:scale-110"
              } focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-sm`}
              aria-label={`${startNumber} ${startNumber === 1 ? "estrella" : "estrellas"}`}
            >
              <Star size={size} className={`transition-colors duration-200 ${getStartColor(startNumber)}`} />
            </Button>
          );
        })}
      </div>
      {showLabel && (
        <div className="text-sm text-gray-600">
          {value > 0 ? (
            <span className="font-medium">
              {value} {value === 1 ? "estrella" : "estrellas"}
            </span>
          ) : (
            <span className="text-gray-400">Selecciona una calificación</span>
          )}
        </div>
      )}
    </div>
  );
}
