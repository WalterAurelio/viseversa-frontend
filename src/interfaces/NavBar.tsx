import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import NavAnchor from "../components/NavAnchor";
import Avatar from "../components/Avatar";
import Bell from "../assets/icons/Bell.svg?react";
import Notifications from "./Notifications";
import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

function NavBar() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleDocumentPointerDown = (event: PointerEvent) => {
      if (isNotificationsOpen && !notificationsRef.current?.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) {
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
    <nav className="flex h-15 items-center justify-between bg-neutral-primary px-13">
      <div className="flex items-center gap-xl">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <SearchBar />
      </div>

      <div className="relative flex items-center gap-xl">
        <Notifications ref={notificationsRef} className={cn("absolute -top-144 right-0 opacity-0 transition-all", { "top-15 opacity-100": isNotificationsOpen })} />
        <button ref={buttonRef} className="cursor-pointer" type="button" onClick={handleBellClick}>
          <Bell className="w-4.5" />
        </button>
        <NavAnchor to="/publish">Publicar</NavAnchor>
        <Avatar hasStatus={false} hasUsername={false} />
      </div>
    </nav>
  );
}
export default NavBar;
