import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext, useState } from "react";
import { SignInContext } from "../../context/SignInContext";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const listItems = [
  {
    text: "Important & urgent",
    link: "/tasks/important-and-urgent",
    icon: <FamilyRestroomIcon />,
  },
  {
    text: "important & not urgent",
    link: "/tasks/important-not-urgent",
    icon: <LocalLibraryIcon />,
  },
  {
    text: "not important & urgent",
    link: "/tasks/urgent-not-important",
    icon: <WifiCalling3Icon />,
  },
  {
    text: "not important & not urgent",
    link: "/tasks/not-important-and-not-urgent",
    icon: <SportsEsportsIcon />,
  },
];

function SideMenu() {
  //write code here
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const nav = useNavigate();
  function openOrHideSideMenu() {
    setOpenSideMenu(!openSideMenu);
  }

  function goToTaskPage(href) {
    nav(href);
    openOrHideSideMenu();
  }

  const { isSignedIn } = useContext(SignInContext);
  return (
    <>
      {isSignedIn && (
        <>
          <IconButton onClick={openOrHideSideMenu}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>

          <Drawer
            anchor="left"
            open={openSideMenu}
            onClose={openOrHideSideMenu}
          >
            <List>
              {listItems.map((item, i) => (
                <ListItem key={i}>
                  <ListItemButton onClick={() => goToTaskPage(item.link)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      )}
    </>
  );
}

export default SideMenu;
