import { Paper, Stack } from "@mui/material";
import SingleTask from "./SingleTask";
import AddTask from "./AddTask";
import { useCallback, useState } from "react";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const dummyTasks = [
  {
    id: 1,
    content: "Title number 1",
    checked: true,
  },
  {
    id: 2,
    content: "Title number 2",
    checked: false,
  },
  {
    id: 3,
    content: "Title number 3",
    checked: false,
  },
  {
    id: 4,
    content: "Title number 4",
    checked: true,
  },
  {
    id: 5,
    content: "Title number 5",
    checked: false,
  },
  {
    id: 6,
    content: "Title number 6",
    checked: false,
  },
  {
    id: 7,
    content: "Title number 7",
    checked: true,
  },
  {
    id: 8,
    content: "Title number 8",
    checked: false,
  },
  {
    id: 9,
    content: "Title number 9",
    checked: false,
  },
  {
    id: 10,
    content: "Title number 10",
    checked: false,
  },
];

function TasksDashboard() {
  //write code here

  const [items, setItems] = useState(dummyTasks);

  //! _________ don't remove _____________________
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setItems((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
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
        {/* draggable items */}
        <DndProvider backend={HTML5Backend}>
          {items.map((item, i) => (
            <SingleTask
              key={item.id}
              item={item}
              index={i}
              moveCard={moveCard}
            />
          ))}
        </DndProvider>
      </Stack>
      <AddTask />
    </Paper>
  );
}

export default TasksDashboard;
