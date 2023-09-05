import { IconButton, InputBase, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function AddTask() {
  //write code here

  return (
    <Paper
      elevation={2}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        p: 2,
        borderRadius: 2,
        backgroundColor: "#0000",
        mt: 3,
      }}
    >
      <InputBase
        sx={{ flexGrow: 1 }}
        placeholder="Write the task main title here"
      />
      <IconButton color="primary">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}

export default AddTask;
