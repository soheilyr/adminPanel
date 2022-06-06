import { useRef, useState } from "react";
import { SIGN_UP } from "../../Urls/Urls";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  // email input value
  const [emailValue, setEmailValue] = useState("");
  //pass input value
  const [passwordValue, setPasswordValue] = useState("");
  //email and pass ref
  const history = useNavigate();
  let email = useRef();
  let pass = useRef();

  const loginHandler = () => {
    console.log("login");
  };

  const linkToSignUp = (e) => {
    e.preventDefault();
    history("/signup");
  };

  return (
    <>
      <h1 className="text-center mt-5">Please Log in</h1>
      <form className="form-signin w-100 m-auto" onSubmit={loginHandler}>
        <div className="form-floating">
          <input
            className="form-control"
            ref={email}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            type="email"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            className="form-control"
            ref={pass}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
          />
          <label>password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          disabled={isLoading}
          type="submit"
        >
          logIn
        </button>
        <div className="d-flex gap-2">
          <p>Dont Have an account ?</p>
          <a style={{ cursor: "pointer" }} onClick={linkToSignUp}>
            SignUp
          </a>
        </div>
      </form>
    </>
  );
};
export default Login;
