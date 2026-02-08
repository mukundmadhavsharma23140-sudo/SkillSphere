import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h2>App Layout (Student Area)</h2>

      {/* App pages will render here */}
      <Outlet />
    </div>
  );
}

export default AppLayout;
