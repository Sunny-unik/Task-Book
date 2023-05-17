import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center bg-primary"
        style={{ height: "80vh" }}
      >
        <h1 className="display-1 fw-bold text-white">404 &nbsp; Not found</h1>
      </div>
      <div className="d-flex flex-grow-1"></div>
      <NavLink to="/home"> Go Home </NavLink>
    </>
  );
}
