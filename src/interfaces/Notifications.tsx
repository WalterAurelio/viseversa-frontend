import Notification, { type TNotification } from "../components/Notification";
import { cn } from "../utils/cn";
import notifications from "../json/notifications.json";

type NotificationsProps = React.ComponentProps<"div">;

function Notifications({ className, ...props }: NotificationsProps) {
  const unreadNotifications = notifications.filter((notification) => !notification.isRead);
  const unreadCount = unreadNotifications.length;
  const markAllAsRead = () => {
    unreadNotifications.forEach((notification) => {
      console.log(`Marking notification with id: ${notification.id} as read`);
    });
  };

  return (
    <div className={cn("flex w-90.5 flex-col items-start overflow-hidden", className)} aria-label="Notificaciones" {...props}>
      <header className="flex h-13.75 w-full items-center justify-between border-b border-neutral-inverse-primary bg-neutral-primary p-l">
        <div className="flex items-center gap-s">
          <h2 className="label-default text-neutral-primary">Notificaciones</h2>
          {unreadCount > 0 && <span className="rounded-full bg-brand-tertiary px-s py-xs label-small text-brand-primary">{unreadCount} nuevas</span>}
        </div>
        <button type="button" className={cn("cursor-pointer label-small text-brand-primary hover:underline", { hidden: unreadCount === 0 })} onClick={markAllAsRead}>
          Marcar como leídas
        </button>
      </header>

      {notifications.map((notification, index) => {
        const castedNotification = { ...notification, variant: notification.variant as TNotification["variant"] };
        return <Notification key={index} notification={castedNotification} className="w-full" />;
      })}
    </div>
  );
}

export default Notifications;
