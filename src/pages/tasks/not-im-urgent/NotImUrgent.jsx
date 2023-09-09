import { Divider, Typography } from "@mui/material";
import TasksDashboard from "../components/TasksDashboard";

function NotImUrgent() {
  //write code here

  return (
    <>
      <Divider sx={{ width: "100%" }}>
        <Typography variant="h6" fontWeight={700}>
          ❌ NOT Important & ✅ urgent
        </Typography>
      </Divider>
      <Typography variant="h5" fontWeight={400} textAlign="center">
        These tasks are not important but it's urgent in the same time. So it
        will be good to delegate is for someone else to do it for you. it
        depends on your priorities and values in life.
      </Typography>
      <TasksDashboard priority="niu" />
    </>
  );
}

export default NotImUrgent;
