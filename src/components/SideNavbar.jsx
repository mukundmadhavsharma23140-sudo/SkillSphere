import { NavLink } from "react-router-dom";

const baseLink =
  "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition";

const inactive =
  "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

const active =
  "bg-indigo-50 text-indigo-600 font-semibold";

function SideNavbar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Brand */}
      <div className="h-14 flex items-center px-6 border-b">
        <span className="text-xl font-bold text-indigo-600">
          SkillSphere
        </span>
      </div>

      {/* Links */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <NavLink
          to="/app/dashboard"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? active : inactive}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/app/announcements"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? active : inactive}`
          }
        >
          Announcements
        </NavLink>

        <NavLink
          to="/app/my-courses"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? active : inactive}`
          }
        >
          My Courses
        </NavLink>

        <NavLink
          to="/app/exams"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? active : inactive}`
          }
        >
          Exams
        </NavLink>

        <NavLink
          to="/app/certificates"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? active : inactive}`
          }
        >
          Certificates
        </NavLink>
      </nav>
    </aside>
  );
}

export default SideNavbar;
