import { Link } from "react-router-dom";
import '../src/App.css';
import { ThreedotLogo } from "./Images";

function Header() {
  return (
    <div>
        <ul className="HeaderContainer">
            <li><Link style={{}} to="/" className="tabs">Home</Link></li>
            <li><Link to="jobs" className="tabs">Job</Link></li>
            <li><Link to="mentorship" className="tabs">Mentorship</Link></li>
        </ul>
        <div className="hamburger">
          <img src={ThreedotLogo} height={20} width={20} alt="3dot-logo" />
        </div>
    </div>
  )
}

export default Header;

