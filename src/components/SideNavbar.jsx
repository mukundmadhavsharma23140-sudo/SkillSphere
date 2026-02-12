import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/app/dashboard" },
  { name: "Announcements", path: "/app/announcements" },
  { name: "My Courses", path: "/app/my-courses" },
  { name: "Exams", path: "/app/exams" },
  { name: "Certificates", path: "/app/certificates" },
];

function SideNavbar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-200 flex flex-col">
      {/* App name */}
      <div className="h-16 flex items-center px-6 text-white text-xl font-semibold border-b border-gray-800">
        SkillSphere
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1 px-4 py-6">
        {links.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-4 py-2.5 rounded-md text-sm ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default SideNavbar;

