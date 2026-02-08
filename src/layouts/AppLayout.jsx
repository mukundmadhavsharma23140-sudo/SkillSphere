import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";

function AppLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <SideNavbar />

      {/* Main content area */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>

    </div>
  );
}

export default AppLayout;
