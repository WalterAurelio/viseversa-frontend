import { cn } from "../utils/cn";
import StatusPin from "./StatusPin";
import User from "../assets/icons/User.svg?react";
import { useGetUserProfile } from "../services/users/users.queries";

type AvatarProps = {
  className?: string;
  hasStatus?: boolean;
  hasUsername?: boolean;
  size?: "S" | "M" | "L" | "XL";
};

const avatarSizes = {
  S: "size-10",
  M: "size-12",
  L: "size-17",
  XL: "size-36"
} as const;

export default function Avatar({ className, hasStatus = true, hasUsername = true, size = "S" }: AvatarProps) {
  const { data } = useGetUserProfile();
  const { nombreUsuario, fotoPerfil } = data;

  return (
    <div className={cn("relative flex items-center gap-m", className)} data-testid="avatar-component">
      <div className={cn("relative shrink-0 overflow-visible rounded-full", avatarSizes[size])}>
        {fotoPerfil ? (
          <img className="size-full rounded-full object-cover" src={fotoPerfil} alt={nombreUsuario ? `${nombreUsuario}'s profile` : "Profile picture"} />
        ) : (
          <div className="flex size-full items-center justify-center rounded-full bg-neutral-disabled" aria-label="No profile picture">
            <User className="size-4.5" />
          </div>
        )}
        {hasStatus && <StatusPin className="absolute right-0 bottom-0" />}
      </div>
      {hasUsername && <p className="label-default wrap-break-word">{nombreUsuario}</p>}
    </div>
  );
}
