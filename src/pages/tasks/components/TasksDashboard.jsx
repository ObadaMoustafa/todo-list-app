import { Paper, Stack } from "@mui/material";
import SingleTask from "./SingleTask";
import AddTask from "./AddTask";
import { useCallback, useContext } from "react";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TasksContext } from "../../../context/TasksContext";
import { setTasksInDB } from "../../../utils/dbFunction";

function TasksDashboard({ priority }) {
  const tasksContextValues = useContext(TasksContext);
  const items = tasksContextValues[`${priority}`];
  const setItems = tasksContextValues[`set${priority}`];

  //! _________ don't remove _____________________
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setItems((prevCards) => {
      const newOrder = update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      });
      //^ set the new tasks order in the DB then update the UI
      setTasksInDB(newOrder, priority);
      return newOrder;
    });
  }, []);
  //!_______________________________________________

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        flexGrow: 1,
        p: 2,
        display: "flex",
        flexDirection: "column",
        rowGap: 5,
      }}
    >
      <Stack flexGrow={1} spacing={2}>
        {items.length > 0 && (
          <DndProvider backend={HTML5Backend}>
            {items.map((item, i) => (
              <SingleTask
                key={item.id}
                item={item}
                index={i}
                moveCard={moveCard}
                priority={priority}
              />
            ))}
          </DndProvider>
        )}
      </Stack>
      <AddTask priority={priority} />
    </Paper>
  );
}

export default TasksDashboard;
