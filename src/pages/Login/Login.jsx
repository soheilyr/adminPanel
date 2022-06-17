import { useContext, useRef, useState } from "react";
import { SIGN_IN } from "../../Urls/Urls";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/Auth/Auth-context";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  //email and pass ref
  const history = useNavigate();
  const authCTX = useContext(authContext);
  let email = useRef();
  let pass = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        SIGN_IN,
        {
          email: email.current.value,
          password: pass.current.value,
          returnSecureToken: true,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        setIsLoading(false);
        return response.data;
      })
      .then((data) => {
        const expireIn = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCTX.login(data.idToken, expireIn);
        history("/");
      });
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
          <input className="form-control" ref={email} type="email" />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input className="form-control" ref={pass} type="password" />
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
