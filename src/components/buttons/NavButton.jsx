import { useNavigate } from "react-router-dom";

function NavButton({ children, href, ...rest }) {
  //write code here
  const nav = useNavigate();
  function linkToHref() {
    nav(href);
  }
  return (
    <button onClick={linkToHref} {...rest}>
      {children}
    </button>
  );
}

export default NavButton;
