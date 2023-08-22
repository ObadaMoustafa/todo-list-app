import { useNavigate } from "react-router-dom";

function NavButton({ children, href }) {
  //write code here
  const nav = useNavigate();
  function linkToHref() {
    nav(href);
  }
  return <button onClick={linkToHref}>{children}</button>;
}

export default NavButton;
