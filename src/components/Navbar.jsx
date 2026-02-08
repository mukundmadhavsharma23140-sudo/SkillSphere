import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2><Link to="/">SkillSphere</Link></h2>

      <ul>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
