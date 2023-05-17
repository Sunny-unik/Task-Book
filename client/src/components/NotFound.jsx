import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
        <div className="text-center row">
          <div className=" col-md-6">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className=" col-md-6 mt-5">
            <p className="fs-3">
              <span className="text-danger">Opps!</span> Page not found.
            </p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>
            <NavLink className="btn btn-primary" to={"/"}>
              Go Home
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
