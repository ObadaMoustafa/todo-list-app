import { signOut } from "firebase/auth";
import NavButton from "../buttons/NavButton";
import { auth } from "../../firebase/config";
import { useContext } from "react";
import { SignInContext } from "../../context/SignInContext";
import { HandleProcessesContext } from "../../context/HandleProcessesContext";

function Navbar() {
  //write code here
  const { setIsLoading } = useContext(HandleProcessesContext);
  function signUserOut() {
    setIsLoading(true);
    signOut(auth).catch((err) => {
      console.log(err.message);
      setIsLoading(false);
    });
  }
  const name = auth?.currentUser.displayName;

  const { isSignedIn } = useContext(SignInContext);
  return (
    <nav className="grid grid-cols-12 gap-3">
      <h1 className=" pt-2 text-center font-bold col-span-6">
        Todo List Project
      </h1>
      <NavButton href={"/"}>Home</NavButton>
      {!isSignedIn && <NavButton href={"login"}>Login</NavButton>}
      {isSignedIn && (
        <>
          <NavButton onClick={signUserOut}>Sign Out</NavButton>
          <h1 className="col-span-12 text-center font-semibold">
            Welcome {name}
          </h1>
        </>
      )}
    </nav>
  );
}

export default Navbar;
