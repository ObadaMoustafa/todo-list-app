import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/config";
import { useContext, useEffect } from "react";
import { SignInContext } from "../../context/SignInContext";
import { Navigate } from "react-router-dom";

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
        <button type="submit" onClick={signInWithGoogle}>
          google login
        </button>
      )}
    </>
  );
}

export default Login;
