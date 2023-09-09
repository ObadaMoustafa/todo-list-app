import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Input, TextField } from "@mui/material";
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

  const saveDetails = (e) => {
    e.preventDefault();
    if (!title) return;
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
        <form>
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
              <Input
                inputRef={titleRef}
                value={title}
                onChange={changeTitle}
                sx={{ mx: { xs: 1, md: 5 }, fontSize: 30, color: "white" }}
                fullWidth
                autoFocus
                color="warning"
              />
              <Button color="inherit" type="submit" onClick={saveDetails}>
                save
              </Button>
            </Toolbar>
          </AppBar>
        </form>
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
