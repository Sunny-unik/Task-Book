import "../App.css";

import { NavLink } from "react-router-dom";
// import Signup from "./SignUp";
import User from "./User";
import Signup from "./SignUp";
import Logout from "./Logout";

export default function Navbar() {
  let isUserSignedIn = false;
  return (
    <div>
      <nav className="nav-container">
        <div className="user-profile">
          <User />
        </div>
        {isUserSignedIn ? (
          <div className="signup-container">
            <NavLink className="user-container" to="/logout">
              <Logout />
            </NavLink>
          </div>
        ) : (
          <div className="signup-container">
            <NavLink className="user-container" to="/signup">
              <Signup />
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}
