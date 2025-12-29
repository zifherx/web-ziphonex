import { Star } from "lucide-react";

type RATING_STAR_PROP = {
  rating: number;
};

export function RatingStar({ rating }: RATING_STAR_PROP) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400  text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  );
}
