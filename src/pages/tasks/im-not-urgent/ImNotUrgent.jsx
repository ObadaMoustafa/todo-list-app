import { Divider, Typography } from "@mui/material";
import TasksDashboard from "../components/TasksDashboard";

function ImNotUrgent() {
  //write code here

  return (
    <>
      <Divider sx={{ width: "100%" }}>
        <Typography variant="h6" fontWeight={700}>
          ✅ Important & ❌ NOT urgent
        </Typography>
      </Divider>
      <Typography variant="h5" fontWeight={400} textAlign="center">
        These tasks are important but not urgent so you can schedule it to do it
        soon.
      </Typography>
      <TasksDashboard priority="inu" />
    </>
  );
}

export default ImNotUrgent;
