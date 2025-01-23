import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  return(
    <nav>
      <div className="nav__container nav__container--bottom">
        <ul>
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/mytable" className="nav__link">
              Collection
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}