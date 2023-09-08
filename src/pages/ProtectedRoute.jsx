import { Navigate } from "react-router-dom";
import { auth } from "../firebase/config";
import TasksContextProvider from "../context/TasksContext";

function ProtectedRoute({ children }) {
  //write code here
  const rightRout = auth.currentUser ? (
    <TasksContextProvider>{children}</TasksContextProvider>
  ) : (
    <Navigate to="/login" />
  );
  return rightRout;
}

export default ProtectedRoute;
