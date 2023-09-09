import { Checkbox, IconButton, Paper, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useRef, useState } from "react";
import TaskDrawer from "./TaskDrawer";
import { useDrag, useDrop } from "react-dnd";
import DeleteTaskButton from "./DeleteTaskButton";
import { changeTaskDetails } from "../../../utils/dbFunction";

function SingleTask({ item, index, moveCard, priority }) {
  //write code here
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  console.log(item.title, item.checked);

  const checkItem = () => {
    const checked = item.checked ? !item.checked : true;
    changeTaskDetails(index, priority, { checked });
  };

  //! ******** functions for draggable tasks *************
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id: item.id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  //! ***************************************************

  return (
    <>
      <Paper
        ref={ref}
        data-handler-id={handlerId}
        elevation={2}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          p: 2,
          borderRadius: 2,
          backgroundColor: "#0000",
          cursor: "pointer",
          opacity,
        }}
      >
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon />}
          color="success"
          checked={item.checked || false}
          onClick={checkItem}
        />
        <Typography
          variant="h5"
          flexGrow={1}
          sx={{ textDecoration: item.checked ? "line-through" : "none" }}
          onClick={handleClickOpen}
        >
          {item.title}
        </Typography>
        <DeleteTaskButton item={item} priority={priority} />
        <IconButton sx={{ cursor: "grab" }} color="primary">
          <DragHandleIcon />
        </IconButton>
      </Paper>

      <TaskDrawer
        open={open}
        setOpen={setOpen}
        item={item}
        index={index}
        priority={priority}
      />
    </>
  );
}

export default SingleTask;
