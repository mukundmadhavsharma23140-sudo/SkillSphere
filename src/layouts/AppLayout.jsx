import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import AppTopBar from "../components/AppTopBar";

function AppLayout({ onLogout }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNavbar />

      <div className="flex flex-col flex-1">
        <AppTopBar onLogout={onLogout} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
