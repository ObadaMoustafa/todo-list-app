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
        These are the most important tasks so you better focus on doing it to
        get the most from your time.
      </Typography>
      <TasksDashboard priority="niu" />
    </>
  );
}

export default NotImUrgent;
