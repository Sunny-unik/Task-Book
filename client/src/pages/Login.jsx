import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../slices/userSlice";

export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user);

  useEffect(() => {
    reduxUser && navigate("/home");
  }, [reduxUser, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    const [emailInput, passwordInput] = event.target.querySelectorAll("input");

    dispatch(
      checkLogin({
        email: emailInput.value,
        password: passwordInput.value
      })
    );
  };

  return (
    <div>
      <form className="col-3 m-auto" onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            placeholder="abc@gmail.com"
            aria-describedby="emailHelp"
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            name="password"
            placeholder="xxxxxx"
            id="exampleInputPassword1"
            ref={passwordRef}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
