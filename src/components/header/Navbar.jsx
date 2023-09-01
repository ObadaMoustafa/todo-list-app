import { signOut } from "firebase/auth";
import NavButton from "../buttons/NavButton";
import { auth } from "../../firebase/config";
import { useContext } from "react";
import { SignInContext } from "../../context/SignInContext";
import { IsLoadingContext } from "../../context/IsLoadingContext";

function Navbar() {
  //write code here
  const { setIsLoading } = useContext(IsLoadingContext);
  function signUserOut() {
    setIsLoading(true);
    signOut(auth).catch(console.log);
  }

  const { isSignedIn } = useContext(SignInContext);
  return (
    <nav>
      <h1>welcome from Navbar component</h1>;
      <NavButton href={"/"}>Home</NavButton>
      {!isSignedIn && <NavButton href={"login"}>Login</NavButton>}
      {isSignedIn && <NavButton onClick={signUserOut}>Sign Out</NavButton>}
    </nav>
  );
}

export default Navbar;
