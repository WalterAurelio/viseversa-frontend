import Star from '../assets/icons/Star.svg?react';

export default function Rating({ number }: { number: number }) {
  const max = 5;
  const stars = [];

  for (let i = 1; i <= max; i++) {
    const filled = i <= number;
    stars.push(
      <Star
        key={i}
        className={`text-icon-miscellaneous-primary ${!filled && 'fill-none'} w-3 lg:w-4`}
      />
    );
  }

  return (
    <div className='w-fit flex items-center gap-xs text-text-neutral-tertiary body-regular'>
      {stars}{number}
    </div>
  );
}
