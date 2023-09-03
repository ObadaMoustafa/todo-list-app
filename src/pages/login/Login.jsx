import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/config";
import { useContext } from "react";
import { SignInContext } from "../../context/SignInContext";
import { Navigate } from "react-router-dom";
import "./login.css";

function Login() {
  //write code here
  const { isSignedIn } = useContext(SignInContext);

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("success");
        console.log(result);
      })
      .catch(console.log);
  }

  return (
    <>
      {isSignedIn ? (
        <Navigate to="/" />
      ) : (
        <button
          type="button"
          onClick={signInWithGoogle}
          className="login-with-google-btn"
        >
          Sign in with Google
        </button>
      )}
    </>
  );
}

export default Login;
