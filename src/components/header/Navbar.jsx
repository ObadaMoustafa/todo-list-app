import { Box } from "@mui/material";
import MenuBar from "./MenuBar";

function Navbar() {
  return (
    <Box component="nav" position="fixed" zIndex={10}>
      <MenuBar />
    </Box>
  );
}

export default Navbar;
