import { Link } from "react-router-dom";
import '../src/App.css';

function Header() {
  return (
    <div>
        <ul className="HeaderContainer">
            <li><Link style={{}} to="/" className="tabs">Home</Link></li>
            <li><Link to="hackathon" className="tabs">Hackathon</Link></li>
            <li><Link to="jobs" className="tabs">Job</Link></li>
            <li><Link to="mentorship" className="tabs">Mentorship</Link></li>
            <li><Link to="content" className="tabs">Manage-Content</Link></li>
        </ul>
    </div>
  )
}

export default Header;

