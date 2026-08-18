import Image from "../assets/icons/Image.svg?react";

type CommentProps = {
  username?: string;
  comment?: string;
  img?: string;
  alt?: string;
};

export default function Comment({ username = "john_doe_123", comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", img, alt = "" }: CommentProps) {
  return (
    <div className="flex gap-xs">
      <p className="label">{username}:</p>
      <div className="flex flex-col">
        <p>{comment}</p>
        {img ? (
          <img className="aspect-3/4 max-w-50 object-cover object-center" src={img} alt={alt} />
        ) : (
          <div className="flex aspect-3/4 max-w-50 items-center justify-center bg-neutral-tertiary">
            <Image className="w-4.5" />
          </div>
        )}
      </div>
    </div>
  );
}
