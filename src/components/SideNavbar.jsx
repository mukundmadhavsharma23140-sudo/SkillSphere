import { NavLink } from "react-router-dom";

function SideNavbar() {
  return (
    <aside style={{ width: "220px", padding: "20px", borderRight: "1px solid #ccc" }}>
      <h3>SkillSphere</h3>

      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <NavLink to="/app/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/app/announcements">Announcements</NavLink>
          </li>
          <li>
            <NavLink to="/app/my-courses">My Courses</NavLink>
          </li>
          <li>
            <NavLink to="/app/exams">Exams</NavLink>
          </li>
          <li>
            <NavLink to="/app/certificates">Certificates</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideNavbar;
