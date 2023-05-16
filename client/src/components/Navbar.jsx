import { NavLink } from "react-router-dom";
// import Signup from "./SignUp";
import User from "./User";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="sd-SignUp">
          <NavLink className="sd-signup" to="/signup">
            signup here
          </NavLink>
        </div>
        <User />
      </nav>
    </div>
  );
}
