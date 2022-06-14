import { useRef, useState, useContext } from "react";
import { SIGN_UP } from "../../Urls/Urls";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import { authContext } from "../../context/Auth/Auth-context";
const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  //email and pass ref
  const authCTX = useContext(authContext);
  const history = useNavigate();
  let email = useRef();
  let pass = useRef();
  const signUpHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        SIGN_UP,
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
        authCTX.signUp(data.idToken, expireIn);
        history("/");
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
  const linkToLogin = (e) => {
    e.preventDefault();
    history("/login");
  };
  return (
    <>
      <h1 className="text-center mt-5">Please Sign Up</h1>
      <form className="form-signin w-100 m-auto" onSubmit={signUpHandler}>
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
          SignUp
        </button>
        <div className="d-flex gap-2">
          <p>already have an account ?</p>
          <a style={{ cursor: "pointer" }} onClick={linkToLogin}>
            LogIn
          </a>
        </div>
      </form>
    </>
  );
};
export default SignUp;
