import Image from '../assets/icons/Image.svg?react';

type HowToCardProps = {
  img?: string;
  alt?: string;
  title?: string;
  description?: string;
};

function HowToCard({ img, alt = '', title = 'Title', description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }: HowToCardProps) {
  return (
    <div className='flex flex-col gap-m'>
      {img ? (
        <img
          src={img}
          alt={alt}
          className='w-full aspect-3/4 object-cover object-center'
        />
      ) : (
        <div className='w-full aspect-3/4 bg-background-neutral-tertiary flex items-center justify-center'>
          <Image className='h-6 w-6'/>
        </div>
      )}

      <div className='flex flex-col justify-center items-center gap-s text-text-neutral-primary text-center'>
        <h6 className='h6-normal'>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default HowToCard;
