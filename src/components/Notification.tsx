import { cn } from "../utils/cn";
import Check from "../assets/icons/Check.svg?react";
import ChatCircle from "../assets/icons/ChatCircle.svg?react";
import Star from "../assets/icons/Star-1.svg?react";
import Swap from "../assets/icons/Swap.svg?react";
import X from "../assets/icons/X.svg?react";
import type { WithClassName } from "../types/WithClassName";
import { useTimeAgo } from "react-time-ago";
import User from "../assets/icons/User.svg?react";

type NotificationVariant = "request" | "comment" | "accepted" | "review";

export type TNotification = {
  id: string;
  message: string;
  createdAt: string;
  variant: NotificationVariant | "Request" | "Comment" | "Accepted" | "Review";
  profilePic?: string;
  isRead: boolean;
  // onDismiss?: () => void;
};

type NotificationProps = { notification: TNotification } & WithClassName;

const variantStyles = {
  request: {
    icon: Swap,
    badgeClass: "bg-brand-primary",
    textClass: "text-brand-primary"
  },
  comment: {
    icon: ChatCircle,
    badgeClass: "bg-lavender",
    textClass: "text-lavender"
  },
  accepted: {
    icon: Check,
    badgeClass: "bg-lime",
    textClass: "text-lime"
  },
  review: {
    icon: Star,
    badgeClass: "bg-sunflower",
    textClass: "text-sunflower"
  }
} as const;

function Notification({ notification, className /* onDismiss, */ }: NotificationProps) {
  const { id, message, createdAt, variant, profilePic, isRead } = notification;
  const normalizedVariant = variant.toLowerCase() as NotificationVariant;
  const currentVariant = variantStyles[normalizedVariant] ?? variantStyles.request;
  const Icon = currentVariant.icon;
  const timeAgo = useTimeAgo({ date: new Date(createdAt), locale: "es" });

  return (
    <div className={cn("relative flex h-19.5 w-90 items-start gap-m bg-neutral-primary px-l py-m", className)}>
      {!isRead && <div className="absolute top-1/2 left-1.5 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-brand-primary" />}

      <div className="relative flex shrink-0 flex-col items-start self-stretch">
        {profilePic ? (
          <img className="size-10 rounded-full object-cover" src={profilePic} alt="Profile picture" />
        ) : (
          <div className="flex size-10 items-center justify-center rounded-full bg-neutral-disabled" aria-label="No profile picture">
            <User className="w-4.5" />
          </div>
        )}
        {/* <Avatar profilePic={profilePic} hasStatus={false} hasUsername={false} /> */}
        <div className={cn("absolute -right-1 bottom-0 flex h-4 w-4 items-center justify-center rounded-full text-neutral-inverse-primary", currentVariant.badgeClass)}>
          <Icon className="h-3 w-3" />
        </div>
      </div>

      <div className="relative flex w-full flex-col items-start pr-2xl">
        <p className={cn("line-clamp-2 text-ellipsis text-neutral-primary", { "caption-default": isRead, "caption-strong": !isRead })}>{message}</p>
        <p className={cn("caption-default", currentVariant.textClass)}>{timeAgo.formattedDate}</p>
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={() => console.log(`Marking notification with id: ${id} as read`)}
          className={cn("absolute top-0 right-0 flex cursor-pointer items-center justify-center text-neutral-disabled hover:text-neutral-secondary", { hidden: isRead })}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
export default Notification;
