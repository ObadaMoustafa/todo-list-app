import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Paper, TextField } from "@mui/material";
import { forwardRef, useRef, useState } from "react";
import { changeTaskDetails } from "../../../utils/dbFunction";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TaskDrawer({ open, setOpen, item, index, priority }) {
  const [title, setTitle] = useState(item.title);
  const titleRef = useRef();
  const [notes, setNotes] = useState(item.notes || "");
  const notesRef = useRef();

  const changeTitle = () => setTitle(titleRef.current.value);
  const changeNotes = () => setNotes(notesRef.current.value);

  const handleClose = () => {
    setOpen(false);
    setTitle(item.title);
  };

  const saveDetails = () => {
    changeTaskDetails(index, priority, { title, notes });
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <TextField
              inputRef={titleRef}
              value={title}
              onChange={changeTitle}
              variant="standard"
              sx={{ mx: { xs: 1, md: 5 } }}
              fullWidth
              autoFocus
            />
            <Button color="inherit" onClick={saveDetails}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <TextField
          inputRef={notesRef}
          multiline
          label="Notes"
          placeholder="Write your notes here"
          fullWidth
          sx={{ mt: 5, width: "95%", mx: "auto" }}
          value={notes}
          onChange={changeNotes}
        />
      </Dialog>
    </div>
  );
}
