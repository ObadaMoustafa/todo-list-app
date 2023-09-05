import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import makeStyles from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Test() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <MenuIcon onClick={handleDrawerOpen} />
          <Typography variant="h6" noWrap>
            Side Menu Example
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
          <MenuIcon onClick={handleDrawerClose} />
        </div>
        <List>
          <ListItem>
            <ListItemIcon>✉️</ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>📁</ListItemIcon>
            <ListItemText primary="File Manager" />
          </ListItem>
          <ListItem>
            <ListItemIcon>📋</ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Your main content goes here */}
        <Typography variant="h4" gutterBottom>
          Welcome to your app!
        </Typography>
        <Typography paragraph>
          This is the main content area of your application.
        </Typography>
      </main>
    </div>
  );
}

export default Test;
