import { Divider, Typography } from "@mui/material";
import TasksDashboard from "../components/TasksDashboard";
function NotImNotUrgent() {
  //write code here

  return (
    <>
      <Divider sx={{ width: "100%" }}>
        <Typography variant="h6" fontWeight={700}>
          ❌ NOT Important & ❌ NOT urgent
        </Typography>
      </Divider>
      <Typography variant="h5" fontWeight={400} textAlign="center">
        These are the last tasks you need to thing about. Imagine this dashboard
        like a trashy tasks 😅. it's better to eliminate these tasks from your
        app and brain as well. it will waste your time and consume your energy.
      </Typography>
      <TasksDashboard priority="ninu" />
    </>
  );
}

export default NotImNotUrgent;
