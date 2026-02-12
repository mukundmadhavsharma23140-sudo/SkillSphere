import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppTopBar({ onLogout }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/", { replace: true });
  }

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <span className="text-lg font-medium">Dashboard</span>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full bg-indigo-600 text-white font-semibold"
        >
          M
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default AppTopBar;
