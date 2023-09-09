import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/config";
import { useContext } from "react";
import { SignInContext } from "../../context/SignInContext";
import { Navigate } from "react-router-dom";
import "./login.css";
import { Typography } from "@mui/material";

function Login() {
  //write code here
  const { isSignedIn } = useContext(SignInContext);

  function signInWithGoogle() {
    signInWithPopup(auth, provider).catch(console.log);
  }

  return (
    <>
      {isSignedIn ? (
        <Navigate to="/" />
      ) : (
        <>
          <Typography variant="h5" component="p" textAlign="center">
            Welcome to your todo App. <br /> You need to login with google
            account to save and track your tasks
          </Typography>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="login-with-google-btn"
          >
            Sign in with Google
          </button>
        </>
      )}
    </>
  );
}

export default Login;
