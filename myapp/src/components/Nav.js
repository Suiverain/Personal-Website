import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  return(
    <nav>
      <div className="nav__container nav__container--bottom">
        <ul>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home page!
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/about" className="nav__link">
              About page!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}