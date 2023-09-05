import timeMatrix from "/src/assets/eisenhower-decision-matrix.webp";
import { Typography, Link, Divider } from "@mui/material";
import { Link as LocalLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function HomePage() {
  return (
    <>
      <Divider component="div" sx={{ width: "100%" }}>
        <Typography variant="h4">Idea of the app</Typography>
      </Divider>

      <Typography variant="h5">
        it's very important to prioritize your tasks. And this matrix will help
        you to take important decisions for which tasks you should do according
        to your values and priorities. also you can read about this matrix{" "}
        <Link
          href="https://www.lifehack.org/876079/prioritization-matrix"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          here
        </Link>
      </Typography>
      <img
        src={timeMatrix}
        alt="time matrix"
        style={{
          objectFit: "contain",
          display: "block",
          maxWidth: "100%",
          maxHeight: "500px",
        }}
      />

      <Divider component="div" sx={{ width: "100%" }}>
        <Typography variant="h4">How to use the app</Typography>
      </Divider>

      <Typography variant="h5">
        First you need to{" "}
        <LocalLink to="/login" className="link">
          login
        </LocalLink>{" "}
        by google account to be able to save your different tasks. Then you can
        navigate your different lists by using this menu <MenuIcon /> in the nav
        bar.
      </Typography>

      <Divider component="div" sx={{ width: "100%" }}>
        <Typography variant="h4">Time to set tasks</Typography>
      </Divider>

      <Typography variant="h5">
        You need to put a big title of your task. inside the title you can put
        every details of this task including some special notes. And this method
        inspired by{" "}
        <Link
          href="https://todo.microsoft.com/tasks/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          {" "}
          microsoft todo app{" "}
        </Link>
      </Typography>
    </>
  );
}

export default HomePage;
