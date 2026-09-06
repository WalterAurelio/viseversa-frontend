import Star from "../assets/icons/Star.svg?react";

function RatingStars({ stars }: { stars: number }) {
  const maxStars = 5;
  const starsArray = [];

  for (let i = 0; i < maxStars; i++) {
    const isFilled = i < stars;
    starsArray.push(<Star key={i} className={`size-4.5 ${isFilled ? "fill-sunflower" : "fill-none"}`} />);
  }

  return <div className="flex items-center gap-xs text-sunflower">{starsArray}</div>;
}
export default RatingStars;
