import NavButton from "../buttons/NavButton";

function Navbar() {
  //write code here

  return (
    <nav>
      <h1>welcome from Navbar component</h1>;
      <NavButton href={"login"}>Login</NavButton>
      <NavButton href={"/"}>Home</NavButton>
    </nav>
  );
}

export default Navbar;
