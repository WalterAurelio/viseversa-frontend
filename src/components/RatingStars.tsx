import Star from '../assets/icons/Star.svg?react';

export default function RatingStars({ number }: { number: number }) {
  const max = 5;
  const stars = [];

  for (let i = 1; i <= max; i++) {
    const filled = i <= number;
    stars.push(
      <Star
        key={i}
        className={`text-miscellaneous-sunflower ${!filled && 'fill-none'} w-5 lg:w-6`}
      />
    );
  }

  return (
    <div className='w-fit flex items-center gap-xs'>
      {stars}
    </div>
  );
}
