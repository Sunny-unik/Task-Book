import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const [emailInput, passwordInput] = event.target.querySelectorAll("input");

    axios
      .post("http://localhost:4000/user/login", {
        email: emailInput.value,
        password: passwordInput.value
      })
      .then((res) => {
        res.data.data ? navigate("/home") : alert("incorrect credential");
      })
      .catch((err) => console.log(err.message));
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
