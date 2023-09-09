import { Box, IconButton, InputBase, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useRef, useState } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { getNewId, setTasksInDB } from "../../../utils/dbFunction";

function AddTask({ priority }) {
  // for input field to add the new task
  const [newTask, setNewTask] = useState("");
  const newTaskRef = useRef();
  const inputTask = () => setNewTask(newTaskRef.current.value);

  // get the proper state and setState from context according to the priority
  const { allTasks } = useContext(TasksContext);
  const tasks = allTasks[`${priority}`];

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask) return;
    const newId = getNewId(priority);
    const newTaskObj = { id: newId, title: newTask };
    setTasksInDB([newTaskObj, ...tasks], priority);
    setNewTask("");
  };

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        p: 2,
        borderRadius: 2,
        backgroundColor: "#0000",
        mt: 3,
        justifySelf: "flex-end",
      }}
    >
      <Box component="form" sx={{ display: "flex", width: "100%" }}>
        <InputBase
          sx={{ flexGrow: 1, fontSize: 25 }}
          placeholder="Write the task main title here"
          inputRef={newTaskRef}
          value={newTask}
          onChange={inputTask}
          autoFocus
        />
        <IconButton color="primary" onClick={addTask} type="submit">
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}

export default AddTask;
