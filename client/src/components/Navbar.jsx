import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const user = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light align-item-center">
      <div className="container">
        <div className="navbar-brand">
          <span>{user ? "Welcome " + user.name : "Hello World"}</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="flex-grow-1"></div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {user ? (
            <li className="nav-item">
              <NavLink to="/logout">Logout</NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink to="/signup">Signup</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
