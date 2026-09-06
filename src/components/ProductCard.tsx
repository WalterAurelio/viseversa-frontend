import ChipTag from "./ChipTag";
import Image from "../assets/icons/Image.svg?react";

export type TProduct = {
  img: string;
  title: string;
  inExchangeOf: string;
  location: string;
};

type ProductCardProps = { product: TProduct };

function ProductCard({ product }: ProductCardProps) {
  const { img, title, inExchangeOf, location } = product;
  return (
    <div className="relative flex w-60 flex-col items-start gap-m">
      <ChipTag label={location} className="absolute top-1 left-1" />
      <div className="flex flex-col items-start gap-xs">
        {img ? (
          <img src={img} alt={title} className="aspect-3/4 h-80 w-60 rounded-border-xs object-cover object-center" />
        ) : (
          <div className="flex aspect-3/4 w-full items-center justify-center rounded-border-xs bg-neutral-disabled">
            <Image className="size-4.5" />
          </div>
        )}
        <p>{title}</p>
      </div>

      <div className="flex flex-col items-start">
        <p className="label-default text-brand-primary">En busca de:</p>
        <p className="caption-default text-neutral-tertiary">{inExchangeOf}</p>
      </div>
    </div>
  );
}
export default ProductCard;
