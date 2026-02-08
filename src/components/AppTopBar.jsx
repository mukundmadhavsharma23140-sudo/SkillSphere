import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AppTopBar({ onLogout }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/", { replace: true });
  }

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left */}
      <Link
        to="/courses"
        className="text-sm font-medium text-gray-700 hover:text-indigo-600"
      >
        Explore Courses
      </Link>

      {/* Right */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold"
        >
          M
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
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
