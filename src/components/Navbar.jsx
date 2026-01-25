import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <h2>SKILL SPHERE</h2>
            <ul>
            <li>
                <Link to='/'>Login</Link>
            </li>
            <li>
                <Link to ="/Courses">Courses</Link>
            </li>
            <li>
                <Link to ="/Dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to ="/Signup">Signup</Link>
            </li>
            
            </ul>
            
        </nav>
    );
}

export default Navbar;