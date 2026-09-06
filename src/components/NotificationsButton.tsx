import { useState, useRef, useEffect } from "react";
import Bell from "../assets/icons/Bell.svg?react";
import Notifications from "../interfaces/Notifications";
import notifications from "../json/notifications.json";
import type { TNotification } from "./Notification";
import { cn } from "../utils/cn";

function NotificationsButton() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((notification) => !notification.isRead).length;

  useEffect(() => {
    const handleDocumentPointerDown = (event: PointerEvent) => {
      if (isNotificationsOpen && !containerRef.current?.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleDocumentPointerDown);

    return () => {
      document.removeEventListener("pointerdown", handleDocumentPointerDown);
    };
  }, [isNotificationsOpen]);

  const handleBellClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        className={cn("flex aspect-square w-10 cursor-pointer items-center justify-center text-neutral-secondary", { "text-brand-primary": isNotificationsOpen })}
        type="button"
        onClick={handleBellClick}
        aria-label="Abrir notificaciones"
        aria-controls="notifications-dropdown"
        aria-expanded={isNotificationsOpen}
      >
        <Bell className="w-4.5" />
      </button>
      {unreadCount > 0 && (
        <div
          className="absolute top-0 right-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-border-s bg-brand-primary pb-0.75"
          aria-label={`${unreadCount} notificaciones sin leer`}
          onClick={handleBellClick}
        >
          <span className="label-small text-neutral-inverse-primary select-none">{unreadCount}</span>
        </div>
      )}
      <Notifications
        id="notifications-dropdown"
        inert={!isNotificationsOpen}
        aria-hidden={!isNotificationsOpen}
        notifications={notifications as TNotification[]}
        className={cn("absolute -top-144 right-0 opacity-0 transition-all duration-300", { "top-full opacity-100": isNotificationsOpen })}
      />
    </div>
  );
}
export default NotificationsButton;
