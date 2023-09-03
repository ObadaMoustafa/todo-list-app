import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import appLogo from "/src/assets/app-logo.png";
import UserAvatar from "./UserAvatar";
import SideMenu from "./SideMenu";

export default function MenuBar() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <SideMenu />
          <Avatar alt="app logo" src={appLogo} variant="square" />
          <Link to="/" style={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Todo App
            </Typography>
          </Link>
          <UserAvatar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
