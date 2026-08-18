import User from "../assets/icons/User.svg?react";
import { cn } from "../utils/cn";
import StatusPin from "./StatusPin";

type AvatarProps = {
  size?: "S" | "M" | "L" | "XL";
  hasUsername?: boolean;
  username?: string;
  hasStatusPin?: boolean;
  img?: string;
} & Omit<React.ComponentProps<typeof StatusPin>, "className">;

function Avatar({ img, size = "S", hasUsername = false, username = "john_doe_123", hasStatusPin = false, status }: AvatarProps) {
  return (
    <div className="flex items-center gap-s">
      <div className="relative">
        {img ? (
          <img
            src={img}
            alt="User profile pic"
            className={cn("aspect-square rounded-full object-cover object-center", {
              "w-8": size === "S",
              "w-12": size === "M",
              "w-17": size === "L",
              "w-30.5": size === "XL"
            })}
          />
        ) : (
          <div
            className={cn("flex aspect-square items-center justify-center rounded-full bg-neutral-tertiary", {
              "w-8": size === "S",
              "w-12": size === "M",
              "w-17": size === "L",
              "w-30.5": size === "XL"
            })}
          >
            <User className="w-4.5" />
          </div>
        )}

        {hasStatusPin && <StatusPin className={"absolute right-0 bottom-0"} status={status} />}
      </div>
      {hasUsername && <p className="label">{username}</p>}
    </div>
  );
}
export default Avatar;
