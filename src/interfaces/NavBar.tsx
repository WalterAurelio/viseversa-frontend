import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import NavAnchor from "../components/NavAnchor";
import Avatar from "../components/Avatar";
import NotificationsButton from "../components/NotificationsButton";

function NavBar() {
  return (
    <nav className="flex h-15 items-center justify-between bg-neutral-primary px-13">
      <div className="flex items-center gap-xl">
        <h1>
          <Link to="/">Logo</Link>
        </h1>
        <SearchBar />
      </div>

      <div className="relative flex items-center gap-xl">
        <NotificationsButton />
        <NavAnchor to="/publish">Publicar</NavAnchor>
        <Link to="/profile">
          <Avatar hasStatus={false} hasUsername={false} />
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
