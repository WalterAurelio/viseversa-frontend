import { Outlet } from "react-router";
// import NavBar from "../interfaces/NavBar";

function MainLayout() {
  return (
    <div>
      {/* <NavBar /> */}
      <Outlet />
    </div>
  );
}
export default MainLayout;
