import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const [nameInput, emailInput, passwordInput] = event.target.querySelectorAll("input");

    axios
      .post("http://localhost:4000/user", {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
      })
      .then((res) => {
        const data = res.data.data;
        if (data) {
          alert("account created successfully");
          navigate("/");
        } else alert(res.data.error.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="col-3 m-auto" onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            placeholder="your name"
            aria-describedby="nameHelp"
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
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
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
