import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/header/Navbar";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { SignInContext } from "./context/SignInContext";
import LoadingSpinner from "./components/loader/LoadingSpinner";
import { HandleProcessesContext } from "./context/HandleProcessesContext";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImAndUrgent from "./pages/tasks/im-and-urgent/ImAndUrgent";
import ImNotUrgent from "./pages/tasks/im-not-urgent/ImNotUrgent";
import NotImUrgent from "./pages/tasks/not-im-urgent/NotImUrgent";
import NotImNotUrgent from "./pages/tasks/not-im-not-urgent/NotImNotUrgent";
import HomePage from "./pages/home/HomePage";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const { setIsSignedIn } = useContext(SignInContext);
  const { isLoading, setIsLoading } = useContext(HandleProcessesContext);
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) setIsSignedIn(true);
      else setIsSignedIn(false);
      setIsLoading(false);
    });
  }, []);
  return (
    <Box minHeight="100vh">
      <Router>
        {isLoading && <LoadingSpinner />}
        <Navbar />
        <Container
          sx={{
            pt: "80px",
            pb: "30px",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            rowGap: 5,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/tasks/important-and-urgent"
              element={
                <ProtectedRoute>
                  <ImAndUrgent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks/important-not-urgent"
              element={
                <ProtectedRoute>
                  <ImNotUrgent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks/urgent-not-important"
              element={
                <ProtectedRoute>
                  <NotImUrgent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks/not-important-and-not-urgent"
              element={
                <ProtectedRoute>
                  <NotImNotUrgent />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Container>
      </Router>
    </Box>
  );
}

export default App;
