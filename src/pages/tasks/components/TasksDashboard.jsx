import { Paper, Stack } from "@mui/material";
import SingleTask from "./SingleTask";
import AddTask from "./AddTask";
import { useCallback, useContext } from "react";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import { TasksContext } from "../../../context/TasksContext";
import { setTasksInDB } from "../../../utils/dbFunction";
import { TouchBackend } from "react-dnd-touch-backend";
import { isMobile } from "react-device-detect";
import { HTML5Backend } from "react-dnd-html5-backend";

function TasksDashboard({ priority }) {
  const { allTasks, allSetTasks } = useContext(TasksContext);
  const items = allTasks[`${priority}`];
  const setItems = allSetTasks[`set${priority}`];

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
          <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
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
