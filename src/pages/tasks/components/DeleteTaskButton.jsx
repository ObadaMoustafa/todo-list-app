import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { TasksContext } from "../../../context/TasksContext";
import { setTasksInDB } from "../../../utils/dbFunction";

function DeleteTaskButton({ item, priority }) {
  //write code here
  const allTasks = useContext(TasksContext);
  const deleteItem = () => {
    const tasks = allTasks[priority];
    const newTasksAfterDeletion = tasks.filter((e) => e.id !== item.id);
    setTasksInDB(newTasksAfterDeletion, priority);
  };
  return (
    <IconButton color="error" onClick={deleteItem}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteTaskButton;
