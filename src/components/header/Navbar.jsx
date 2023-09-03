import { auth } from "../../firebase/config";
import { useContext } from "react";
import { SignInContext } from "../../context/SignInContext";
import { Box, Typography } from "@mui/material";
import MenuBar from "./MenuBar";

function Navbar() {
  const name = auth?.currentUser?.displayName.split(" ")[0];
  const { isSignedIn } = useContext(SignInContext);

  return (
    <Box component="nav">
      <MenuBar />
      {isSignedIn && (
        <Typography variant="h6" color="darkblue" textAlign="center" pt={2}>
          Welcome {name}
        </Typography>
      )}
    </Box>
  );
}

export default Navbar;
