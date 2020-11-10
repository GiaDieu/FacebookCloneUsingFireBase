import React from "react";
import "../CustomCSS/Login.css";
import fbLogo from "../images/Facebook-Logo.wine.svg";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebase";
import { useStateValue } from "../HOC";
import { ActionTypes } from "../Reducers";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: ActionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="facebooklogo1"
        />
        <img src={fbLogo} alt="facebooklogo2" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
