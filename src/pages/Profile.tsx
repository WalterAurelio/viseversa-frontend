import { Link, Outlet } from "react-router";
import { useGetUserProfile } from "../services/users/users.queries";
import { format } from "date-fns";

function Profile() {
  const { data } = useGetUserProfile();
  const { name, lastName, username, profilePicture, location, createdAt } = data;
  const memberSince = format(new Date(createdAt), "yyyy");

  return (
    <div>
      <img alt="profile-pic" src={profilePicture} />
      <h3>
        {name} {lastName}
      </h3>
      <p>@{username}</p>
      <p>Member since {memberSince}</p>
      <p>{location}</p>

      <Link to="/profile/edit-profile">Edita tu perfil</Link>

      <div className="flex gap-2">
        <Link to="/profile">Publicaciones</Link>
        <Link to="resenas">Reseñas</Link>
        <Link to="solicitudes">Solicitudes</Link>
        <Link to="historial-intercambios">Historial de Intercambios</Link>
      </div>

      <Outlet />
    </div>
  );
}
export default Profile;
