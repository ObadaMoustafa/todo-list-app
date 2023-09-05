import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { auth } from "../../firebase/config";
import { useContext, useState } from "react";
import { SignInContext } from "../../context/SignInContext";
import { HandleProcessesContext } from "../../context/HandleProcessesContext";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function UserAvatar() {
  //write code here
  const name = auth?.currentUser?.displayName.split(" ")[0];

  const avatarURL = auth?.currentUser?.photoURL;
  const [anchorEl, setAnchorEl] = useState(null);
  const { isSignedIn } = useContext(SignInContext);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { setIsLoading } = useContext(HandleProcessesContext);
  function signUserOut() {
    setIsLoading(true);
    signOut(auth)
      .then(handleClose)
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }
  return (
    <>
      {isSignedIn ? (
        <>
          <Typography variant="h6" color="white" textAlign="center">
            Welcome {name}
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt="user photo" src={avatarURL} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={signUserOut}>Sign out</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </>
      ) : (
        <Link to="/login">
          <Button sx={{ color: "white" }}>Login</Button>
        </Link>
      )}
    </>
  );
}

export default UserAvatar;
